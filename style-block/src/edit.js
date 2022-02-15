import React, { useState } from 'react';

import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TextControl,
  TextareaControl,
  CheckboxControl,
} from '@wordpress/components';
import { ColorSelector, createColorClass } from '../../js/ColorSelector';
import { ButtonControl, ListControl } from '../../js/UIControls';
import { normalizeStringLength } from '../../js/utils';
import Save from './save';

/*
  Rule object format:
  {
    id: {blockId}-{numericId},
    selectors: [
      {SelectorObject}
    ],
    properties: [
      {PropertyObject}
    ],
  }

  (Only some enum examples are listed.)
  SelectorObject format:
  {
    type: {enum :: "text" | "image" | "all" | "custom"},
    onlyDirectChildren: { False | True },
    value: {css value string},
  }

  PropertyObject format:
  {
    type: {enum :: "margin" | "padding" | "border" | "custom"},
    value: {css value string},
  }

  all properties apply to all selectors (selectors are joined with `,`)
*/

// class used in CSS selectors as the lowermost parent

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.reduceAction = this.reduceAction.bind(this);

    this.id = this.props.blockProps.id;
    this.getRuleId = ( () => {
      let id = -1;
      return ( () => {
        id++;
        return this.id + "-" + id;
      });
    })();

    let initialRules = this.addIdsToRules(this.attributes.rules);
    let selectedRuleIndex = initialRules.length > 0 ? initialRules.length - 1 : null;
    let rule = selectedRuleIndex != null ? initialRules[selectedRuleIndex] : null;
    let selectors = rule ? rule.selectors : null;
    let properties = rule ? rule.properties : null;

    this.state = {
      rules: initialRules,
      selectedRule: rule ? rule.id : null,
      selectedRuleIndex,
      selectedSelector: selectors ? selectors[0] : null,
      selectedProperty: properties ? properties[0] : null,
    }
    this.setAttributes({
      id: this.id,
      style: this.createStyleFromRules(initialRules),
    });
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  addIdsToRules(rules) {
    let out = [];
    for (let rule of rules) {
      out.push({
        ...rule,
        id: this.getRuleId(),
      });
    }
    return out;
  }

  createStyleFromRules(rules) {
    let style = "";
    for (let rule of rules) {
      let selector = this.createSelectorFromRule(rule, "#" + this.id);
      let properties = this.createPropertiesFromRule(rule);
      if (selector && selector !== "" && properties && properties !== "") {
        style += selector + "{" + properties + "}";
      }
    }
    return style;
  }
  createSelectorFromRule(rule, prefix) {
    let selectors = rule.selectors;
    if (rule.onlyDirectChildren) {
      prefix += ">";
    } else {
      prefix += " ";
    }
    if (!selectors || selectors.length < 1) {
      return null;
    }
    let out = "";
    for (let selector of selectors) {
      let selectorString = selector.value.split(",").reduce(
        (str, sel) => (
          str !== ""
            ? str + "," + prefix + sel
            : str + prefix + sel
        ),
        "",
      );
      out += selector.value && selector.value !== ""
        ? selectorString
        : ""
    }
    return out;
  }
  createPropertiesFromRule(rule){
    let properties = rule.properties;
    if (!properties || properties.length < 1) {
      return null;
    }
    let out = "";
    for (let property of properties) {
      out += property.value && property.value !== ""
        ? property.value
        : ""
    }
    return out;
  }

  updateSelected(index, rules = this.state.rules) {
    let rule = rules[index] || {};

    this.setState({
      selectedRuleIndex: rule.id ? index : null,
      selectedRule: rule.id ? rule.id : null,
      selectedSelector: rule.selectors ? rule.selectors[0] : null,
      selectedProperty: rule.properties ? rule.properties[0] : null,
    });
  }

  reduceAction(action) {
    switch(action.type) {
      case "select":
      {
        let selectedRuleIndex = ( () => {
          for (let i = 0; i < this.state.rules.length; i++) {
            if (this.state.rules[i].id === action.id) {
              return i;
            }
          }
        })();
        this.updateSelected(selectedRuleIndex);

        break;
      }

      case "append":
      {
        let newRuleId = this.getRuleId();
        this.setStateAttributes({
          rules: [
            ...this.state.rules,
            {
              id: newRuleId,
            }
          ],
        });
        this.setState({
          selectedRule: newRuleId,
          selectedRuleIndex: this.state.rules.length,
          selectedSelector: null,
          selectedProperty: null,
        });

        break;
      }

      case "edit":
      {
        this.setStateAttributes({
          rules: action.rules,
          style: this.createStyleFromRules(action.rules),
        });

        break;
      }

      case "delete":
      {
        let deletedIndex;
        let rules = this.state.rules.reduce(
          ({arr, index}, rule) => {
            if (rule.id === action.id) {
              deletedIndex = index;
              return {arr, index: index + 1};
            } else {
              return {arr: [...arr, rule], index: index + 1};
            }
          },
          {arr: [], index: 0}
        ).arr;
        this.reduceAction({ type: "edit", rules });

        // update currently selected rule

        if (this.state.selectedRuleIndex > deletedIndex) {
          this.updateSelected(this.state.selectedRuleIndex - 1, rules);
        } else if (this.state.selectedRule === action.id) {
          // selectedRule was deleted
          let selectedRuleIndex = null;
          if (this.state.selectedRuleIndex < rules.length) {
            selectedRuleIndex = this.state.selectedRuleIndex;
          } else if (rules.length > 0) {
            selectedRuleIndex = rules.length - 1;
          }
          this.updateSelected(selectedRuleIndex, rules);
        }

        break;
      }

      case "moveIndexUp":
      {
        if (action.index >= this.state.rules.length - 1) {
          return;
        }
        this.reduceAction({
          type: "moveIndexDown",
          index: action.index + 1,
          swapIndexes: true,
        })

        break;
      }

      case "moveIndexDown":
      {
        if (action.index <= 0) {
          return;
        }

        let newIndex;
        let rules = this.state.rules.map(
          (rule, i, arr) => {
            if (i === action.index) {
              newIndex = i - 1;
              return arr[newIndex];
            }
            if (i === action.index - 1) {
              return arr[i + 1];
            }
            return rule;
          }
        );
        this.reduceAction({
          type: "edit",
          rules,
        });
        this.updateSelected(action.swapIndexes
          ? action.index
          : newIndex,
          rules,
        );

        break;
      }

      default:
        console.warn("Rule reduceAction: unrecognized action type '" + action.type + "'");
    }
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <>
        <Save
          blockProps = { blockProps }
          attributes = { this.state }
          backend = { true }
        />
        <InspectorControls>
          <PanelBody
            title = "Style rules"
            initialOpen = { true }
          >
            <ButtonControl
              className = "ncs4-style-block__append-rule"
              onClick = { () => this.reduceAction({ type: "append" }) }
              dashicon = "plus"
              label = "Add rule"
            />
            <ButtonControl
              className = "ncs4-style-block__delete-rule"
              onClick = { () => this.reduceAction({
                type: "delete",
                id: this.state.selectedRule,
              }) }
              dashicon = "trash"
              label = "Delete rule"
              disabled = { this.state.selectedRule == null }
            />
            <RulesList
              rules = { this.state.rules }
              selected = { this.state.selectedRule }
              blockId = { this.id }
              onSelect = { (id) => this.reduceAction({
                type: "select",
                id,
              }) }
              disabled = { this.state.rules.length < 1 }
            />
            <ButtonControl
              className = "ncs4-style-block__move-up"
              onClick = { () => this.reduceAction({
                type: "moveIndexUp",
                index: this.state.selectedRuleIndex,
              }) }
              dashicon = "arrow-up"
              title = "Move rule up"
              iconSize = "45px"
              iconTranslation = "-18px, -15px"
              disabled = {
                   this.state.selectedRule == null
                || this.state.rules.length - this.state.selectedRuleIndex < 2
              }
            />
            <ButtonControl
              className = "ncs4-style-block__move-down"
              onClick = { () => this.reduceAction({
                type: "moveIndexDown",
                index: this.state.selectedRuleIndex,
              }) }
              dashicon = "arrow-down"
              title = "Move rule down"
              iconSize = "45px"
              iconTranslation = "-18px, -15px"
              disabled = {
                   this.state.selectedRule == null
                || this.state.selectedRuleIndex < 1
              }
            />
            <hr style = {{ borderColor: "black" }}/>
            <RuleSettings
              rules = { this.state.rules }
              selected = { this.state.selectedRule }
              onChange = { (rules) => this.reduceAction({
                type: "edit",
                rules,
              }) }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}

// displays all rules in a radio list, sends selected into onSelect()
function RulesList(props) {
  return (
    <ListControl
      className = "ncs4-style-block__rules-list"
      label = "Rule"
      options = { props.rules }
      reverse = { true }
      selected = { props.selected }
      disabled = { props.disabled }
      getKey = { (rule) => rule.id }
      getValue = { (rule) => {
        let chars = 15;
        let out = rule.selectors && rule.selectors.length
          ? normalizeStringLength(
              rule.selectors.reduce(
                (str, sel) => str + capitalize(sel.type) + ", ",
                "",
              ).slice(0, -2),
              chars,
              false,
            )
          : normalizeStringLength("<No Selectors>", chars, false)
        out += " | "
        out += rule.properties && rule.properties.length
          ? normalizeStringLength(
              rule.properties.reduce(
                (str, prop) => str + capitalize(prop.type) + ", ",
                "",
              ).slice(0, -2),
              chars,
              false,
            )
          : normalizeStringLength("<No Properties>", chars, false)
        return out;
      }}
      onSelect = { props.onSelect }
    />
  );
}

// displays settings for currently selected rule, sends action to onChange()
function RuleSettings(props) {
  let [selectedPane, selectPane] = useState("selectors");
  let panes = [
    {value: "selectors", text: "Selectors"},
    {value: "properties", text: "Properties"},
  ];

  if (!props.selected) {
    return null;
  }

  function handleSelectorUpdate(selectors) {
    let newRules = props.rules.map(
      (rule) => rule.id !== props.selected
        ? rule
        : {
          ...rule,
          selectors,
        }
    );
    props.onChange(newRules);
  }

  function handlePropertiesUpdate(properties) {
    let newRules = props.rules.map(
      (rule) => rule.id !== props.selected
        ? rule
        : {
          ...rule,
          properties,
        }
    );
    props.onChange(newRules);
  }

  let currentRule = null;
  for (let rule of props.rules) {
    if (rule.id === props.selected) {
      currentRule = rule;
      break;
    }
  }

  return (
    <>
      <div className = "ncs4-style-block__rule-settings-panes">
        {
          panes.map( ({ value, text }) => (
            <ButtonControl
              className = {
                [
                  "ncs4-style-block__rule-settings-pane-selector",
                  value === selectedPane ? "is-selected" : null,
                ].join(" ")
              }
              label = { text }
              onClick = { () => selectPane(value) }
              key = { props.selected + "__" + value }
            />
          ))
        }
      </div>
      { selectedPane === "selectors" && (
        <SelectorsSettingsPane
          selectors = { currentRule.selectors }
          onChange = { handleSelectorUpdate }
        />
      )}
      { selectedPane === "properties" && (
        <PropertiesSettingsPane
          properties = { currentRule.properties }
          onChange = { handlePropertiesUpdate }
        />
      )}
    </>
  );
}

function SelectorsSettingsPane(props) {
  let [ currentSelector, setSelector ] = useState(
    props.selectors && props.selectors[0]
      ? 0
      : null
  );
  let [ customCss, setCustomCss ] = useState(null);
  let selectors = props.selectors || [];
  let selectorTypes = [
    "text",
    "image",
    "all",
    "custom",
  ];
  let selectorValues = {
    text: "p,h1,h2,h3,h4,h5,h6,span,button,input,a",
    image: "img,figure,svg",
    all: "*",
    custom: null,
  }

  let reduceAction = (action) => {
    switch(action.type) {
      case "append":
      {
        props.onChange([
          ...selectors,
          {
            type: selectorTypes[0],
            onlyDirectChildren: false,
            value: selectorValues[selectorTypes[0]],
          },
        ]);
        setSelector(selectors.length);

        break;
      }

      case "delete":
      {
        props.onChange(selectors.filter(
          (_, index) => index !== action.index
        ));

        if (action.index < currentSelector || currentSelector > 0) {
          setSelector(currentSelector - 1);
        } else if (action.index === currentSelector) {
          if (selectors.length - currentSelector > 2) {
            setSelector(currentSelector + 1);
          } else {
            setSelector(null);
          }
        }

        break;
      }

      case "edit":
      {
        props.onChange(selectors.map(
          (val, index) => index !== action.index ? val : action.value
        ));

        break;
      }

      case "select":
      {
        if (selectors[action.index].type === "custom") {
          setCustomCss(selectors[action.index].value);
        }
        setSelector(index);

        break;
      }

      default:
        console.warn("SelectorsSettingsPane: unrecognized action '" + action.type + "'");
    }
  }

  let selectorData = selectors[currentSelector] || {};

  let handleEdit = (field) => (value) => reduceAction({
    type: "edit",
    index: currentSelector,
    value: {
      ...selectorData,
      [field]: value,
    }
  });

  let handleTypeChange = (type) => reduceAction({
    type: "edit",
    index: currentSelector,
    value: {
      ...selectorData,
      type,
      value: selectorValues[type] || customCss,
    }
  });

  return (
    <div className = "ncs4-style-block__selectors-settings-pane">
      <ButtonControl
        className = "ncs4-style-block__add-selector"
        onClick = { () => reduceAction({ type: "append" }) }
        dashicon = "plus"
        label = "Add selector"
      />
      <ButtonControl
        className = "ncs4-style-block__remove-selector"
        onClick = { () => reduceAction({
          type: "delete",
          index: currentSelector,
        }) }
        dashicon = "trash"
        label = "Delete selector"
        disabled = { currentSelector == null }
      />
      <ListControl
        className = "ncs4-style-block__selectors-list"
        label = "Selector"
        options = { selectors }
        getValue = { (sel) => capitalize(sel.type) }
        onSelect = { (index) => reduceAction({
          type: "select",
          index: Number(index),
        }) }
        disabled = { selectors.length < 1 }
      />
      { currentSelector != null && (
        <div className = "ncs4-style-block__selector-settings">
          <SelectControl
            multiple = { false }
            label = "Selector type"
            options = { selectorTypes.map( (v) => ({
              label: capitalize(v),
              value: v,
            }) )}
            value = { selectorData.type }
            onChange = { handleTypeChange }
            disabled = { selectors.length < 1 }
          />
          <TextControl
            disabled = { !selectorData || selectorData.type !== "custom" }
            value = { customCss}
            onChange = { setCustomCss }
            label = "Custom selector"
            help = "For advanced users only"
          />
          <CheckboxControl
            label = "Select only direct children"
            help = { selectorData.onlyDirectChildren
              ? "Only elements whose direct parent is this block will be selected"
              : "Any child elements will be selected"
            }
            checked = { selectorData.onlyDirectChildren }
            onChange = { handleEdit("onlyDirectChildren") }
          />
        </div>
      )}
    </div>
  );
}

function PropertiesSettingsPane(props) {
  // just meant to keep randos from using custom styling
  const cssAdminPass = "IKnowCSS";

  let [ currentProperty, setProperty ] = useState(
    props.properties && props.properties[0]
      ? 0
      : null
  );
  let [ customCss, setCustomCss ] = useState(null);
  let [ knowsCss, setKnowsCss ] = useState(0); // 1 is success, -3 is max tries
  let [ cssPassword, setCssPassword ] = useState("");
  let properties = props.properties || [];
  let propertyTypes = [
    "no margin",
    "no all-caps text",
    "use all-caps text",
    "custom",
  ];
  let propertyValues = {
    ["no margin"]: "margin:0;",
    ["no all-caps text"]: "text-transform:none;",
    ["use all-caps text"]: "text-transform:uppercase;",
  }

  let reduceAction = (action) => {
    switch(action.type) {
      case "append":
      {
        props.onChange([
          ...properties,
          {
            type: propertyTypes[0],
            value: propertyValues[propertyTypes[0]],
          },
        ]);
        setProperty(properties.length);

        break;
      }

      case "delete":
      {
        props.onChange(properties.filter(
          (_, index) => index !== action.index
        ));

        if (action.index < currentProperty || currentProperty > 0) {
          setProperty(currentProperty - 1);
        } else if (action.index === currentProperty) {
          if (properties.length - currentProperty > 2) {
            setProperty(currentProperty + 1);
          } else {
            setProperty(null);
          }
        }

        break;
      }

      case "edit":
      {
        props.onChange(properties.map(
          (val, index) => index !== action.index ? val : action.value
        ));

        break;
      }

      case "select":
      {
        if (properties[action.index].type === "custom") {
          setCustomCss(properties[action.index].value);
        }
        setProperty(action.index);
      }

      default:
        console.warn("PropertiesSettingsPane: unrecognized action '" + action.type + "'");
    }
  }

  let propertyData = properties[currentProperty] || {};

  let handleEdit = (field ) => (value) => reduceAction({
    type: "edit",
    index: currentProperty,
    value: {
      ...propertyData,
      [field]: value,
    }
  });

  let handleTypeChange = (value) => reduceAction({
    type: "edit",
    index: currentProperty,
    value: {
      ...propertyData,
      type: value,
      value: propertyValues[value] || customCss,
    }
  });

  return (
    <div className = "ncs4-style-block__properties-settings-pane">
      <ButtonControl
        className = "ncs4-style-block__add-property"
        onClick = { () => reduceAction({ type: "append" }) }
        dashicon = "plus"
        label = "Add property"
      />
      <ButtonControl
        className = "ncs4-style-block__remove-property"
        onClick = { () => reduceAction({
          type: "delete",
          index: currentProperty,
        }) }
        dashicon = "trash"
        label = "Delete property"
        disabled = { currentProperty == null }
      />
      <ListControl
        className = "ncs4-style-block__properties-list"
        label = "Property"
        options = { properties }
        getValue = { (prop) => capitalize(prop.type) }
        onSelect = { (index) => reduceAction({
          type: "select",
          index: Number(index),
        }) }
        disabled = { properties.length < 1 }
      />
      { currentProperty != null && (
        <div className = "ncs4-style-block__property-settings">
          <SelectControl
            multiple = { false }
            label = "Property type"
            options = { propertyTypes.map( (v) => ({
              label: capitalize(v),
              value: v,
            }) )}
            value = { propertyData.type }
            onChange = { handleTypeChange }
            disabled = { properties.length < 1 }
          />
          { propertyData && propertyData.type === "custom" && (
            <>
              <TextControl
                label = "Advanced user authentication"
                help = "To use custom CSS properties, input password (if you don't know it, you shouldn't use this). DO NOT SUBMIT YOUR ACCOUNT PASSWORD"
                type = "password"
                value = { cssPassword }
                onChange = { setCssPassword }
              />
              <ButtonControl
                label = "Submit"
                onClick = { () => {
                  if (knowsCss > -3 && cssAdminPass === cssPassword) {
                    setKnowsCss(1);
                  } else {
                    setKnowsCss(knowsCss - 1);
                  }
                }}
              />
              <p>{(
                () => {
                  if (knowsCss <= 0) {
                    return String(3 + knowsCss) + " tries remaining";
                  } else {
                    return "Password accepted";
                  }
                }
              )()}
              </p>
            </>
          )}
          <TextControl
            disabled = { knowsCss !== 1 }
            value = { customCss}
            onChange = { setCustomCss }
            label = "Custom property"
            help = "For advanced users only"
          />
        </div>
      )}
    </div>
  );
}
