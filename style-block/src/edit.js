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
    this.appendRule = this.appendRule.bind(this);
    this.changeRules = this.changeRules.bind(this);

    this.id = this.props.blockProps.id;
    this.getRuleId = ( () => {
      let id = -1;
      return ( () => {
        id++;
        return this.id + "-" + id;
      });
    })();

    let initialRules = this.addIdsToRules(this.attributes.rules);
    this.state = {
      rules: initialRules,
      selectedRule: initialRules && initialRules[0] ? initialRules[0].id : null,
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

  appendRule() {
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
    });
  }

  changeRules(rules) {
    this.setStateAttributes({
      rules,
      style: this.createStyleFromRules(rules),
    });
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
            <RulesListControl
              onAppend = { this.appendRule }
            />
            <RulesList
              rules = { this.state.rules }
              selected = { this.state.selectedRule }
              blockId = { this.id }
              onSelect = { (v) => this.setState({ selectedRule: v }) }
            />
            <RuleSettings
              rules = { this.state.rules }
              selected = { this.state.selectedRule }
              onChange = { this.changeRules }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}

// controls to display above RulesList; e.g. add rule
function RulesListControl(props) {
  return (
    <div
      className = "ncs4-style-block__list-controls"
    >
      <ButtonControl
        className = "ncs4-style-block__list-controller ncs4-style-block__append-rule"
        onClick = { props.onAppend }
        dashicon = "plus"
        label = "Add rule"
      />
    </div>
  );
}

// displays all rules in a radio list, sends selected into onSelectChange()
function RulesList(props) {
  return (
    <ListControl
      className = "ncs4-style-block__rules-list"
      label = "Rule"
      options = { props.rules }
      reverse = { true }
      selected = { props.selected }
      getKey = { (rule) => rule.id }
      getValue = { (rule) => {
        let chars = 15;
        let out = rule.selectors
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
        out += rule.properties
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

  let currentRule = ( () => {
    for (let rule of props.rules) {
      if (rule.id === props.selected) {
        return rule;
      }
    }
    return {};
  })();


  return (
    <>
      <div className = "ncs4-style-block__rule-settings-panes">
        {
          panes.map( ({ value, text }) => (
            <button
              className = {
                [
                  "ncs4-style-block__rule-settings-pane-selector",
                  value === selectedPane ? "is-selected" : null,
                ].join(" ")
              }
              onClick = { () => selectPane(value) }
              key = { props.selected + "__" + value }
            >{ text }</button>
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

      case "delete":
        props.onChange(selectors.map(
          (val, index) => index !== action.index ? val : null
        ));
        setSelector(null);
        break;

      case "edit":
        props.onChange(selectors.map(
          (val, index) => index !== action.index ? val : action.value
        ));
        break;

      default:
        console.warn("SelectorsSettingsPane: unrecognized action '" + action.type + "'");
    }
  }

  let selectorData = selectors[currentSelector];

  let handleSelect = (index) => {
    if (selectors[index].type === "custom") {
      setCustomCss(selectors[index].value);
    }
    setSelector(index);
  }

  let handleEdit = (field) => (value) => reduceAction({
    type: "edit",
    index: currentSelector,
    value: {
      ...selectorData,
      [field]: value,
    }
  });

  let handleTypeChange = (value) => reduceAction({
    type: "edit",
    index: currentSelector,
    value: {
      ...selectorData,
      type: value,
      value: selectorValues[value] || customCss,
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
      <ListControl
        className = "ncs4-style-block__selectors-list"
        label = "Selector"
        options = { selectors }
        getValue = { (sel) => capitalize(sel.type) }
        onSelect = { handleSelect }
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
        props.onChange([
          ...properties,
          {
            type: propertyTypes[0],
            value: propertyValues[propertyTypes[0]],
          },
        ]);
        setProperty(properties.length);
        break;

      case "delete":
        props.onChange(properties.map(
          (val, index) => index !== action.index ? val : null
        ));
        setProperty(null);
        break;

      case "edit":
        props.onChange(properties.map(
          (val, index) => index !== action.index ? val : action.value
        ));
        break;

      default:
        console.warn("PropertiesSettingsPane: unrecognized action '" + action.type + "'");
    }
  }

  let propertyData = properties[currentProperty];

  let handleSelect = (index) => {
    if (properties[index].type === "custom") {
      setCustomCss(properties[index].value);
    }
    setProperty(index);
  }

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
      <ListControl
        className = "ncs4-style-block__properties-list"
        label = "Property"
        options = { properties }
        getValue = { (prop) => capitalize(prop.type) }
        onSelect = { handleSelect }
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
