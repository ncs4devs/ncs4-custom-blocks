import React from 'react';
import {
  SelectControl,
  RadioControl,
  ToggleControl,
  CheckboxControl,
  RangeControl,
  PanelRow,
} from '@wordpress/components';
// Dev note: OptionsControl doesn't use multi-select SelectControls.
// This is because WordPress's styling and implementation of it is terrible.

// Creates inspector controls for selecting options via
// radios, multi-select boxes, and range selects.
// Implements functions for getting the default option, custom marks, etc

/*
  Option object format

  {
    attribute: <string>, // should be unique in the options array
    label: <string>,
    help: <string>,
    choices: <array of {value, label}> | null, (null for boolean)

    ( min, max, step required for sliders, choices must be null )
    min: <number>,
    max: <number>,
    step: <number>,
    markStep: <number>,
    markRender: (number) => string,
    tooltipRender: (number) => string,

    multiple: <boolean> | false, ( checkboxgroup instead of radios )
    invertValue: <boolean> | false, (inverts displayed value for booleans)
    default: <value> | <array of value>, (arrays used for multiselects)
    value: [value] | <array of value>,
    disabled: <boolean> | false,
  }

*/

/*
  --- Example Usage ---
  this.state = {
    doToggle: true,
    attr1: null,
    attr2: null,
    maxWidth: null,
    minWidth: {
      useMinWidth: false,
      unit: "%",
      value: 20,
      asString: "20%",
    },
  }


  let options = [
    {
      attribute: 'doToggle',
      label: 'Toggle test',
      default: false,
      value: this.state.doToggle,
    },
    {
      attribute: 'attr1',
      label: 'Attribute one',
      help: 'This is help text',
      choices: [
        { value: 'val1', label: 'Value one' },
        { value: 'val2', label: 'Value two' },
      ],
      value: this.state.attr1,
    },
    {
      attribute: 'attr2',
      label: 'Attribute two',
      choices: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      multiple: true,
      default: 'c',
      value: this.state.attr2,
    },
    {
      attribute: 'maxWidth',
      label: 'Max width',
      help: 'SliderControl test',
      min: 10,
      max: 50,
      step: 5,
      markStep: 10,
      markRender: (v) => String(v) + 'ch',
      default: 30,
      value: this.state.maxWidth,
    },
  ];

  let units = [
    {
      value: "%",
      label: "%",
      min: 0,
      max: 100,
      step: 1,
      markStep: 10,
    },
    {
      value: "vw",
      label: "vw",
      min: 0,
      max: 100,
      step: 1,
      markStep: 10,
    },
    {
      value: "ch",
      label: "ch",
      min: 10,
      max: 50,
      step: 5,
    },
  ];

  render() {
    <OptionsControl
      options = { options }
      onChange = { (v) => { console.log(v); this.setState(v) } }
    />
    <UnitControl
      label = "Mininum Width"
      help = "UnitControl test"
      toggleSelector = {{
        attribute: "useMinWidth",
        label: "Use min width",
        help: "toggleSelector",
        value: this.state.minWidth.useMinWidth,
      }}
      unitSelector = {{
        label: "Units",
        value: this.state.minWidth.unit,
        units: units,
      }}
      slider = {{
        label: "Value",
        value: this.state.minWidth.value,
      }}
      onChange = { (v) => { this.setState( { minWidth: v } ) } }
    />
  }

*/


/*
Handles enumerable selections
(ToggleControl, CheckboxControl, SelectControl, RadioControl, RangeControl)

Props (* denotes required props):
  options*
    array of option objects, format for which is above.

  onChange
    Callback, typically used to set state in the parent.
    The callback is passed an object of `attribute: value` pairs

  maxRadioOptions
    max enumerable options before a SelectControl is used instead of
    RadioControl/CheckboxControl, default 5.
*/
export class OptionsControl extends React.Component {

  // Returns attr: value pairs currently selected
  getChoices(options) {
    let choices = [];
    options.forEach( (o, i) => {
      choices[i] = {
        attribute: o.attribute,
        value: o.value || o.default,
      };
    });
    return choices;
  }

  // returns choice from choices with the given attribute
  getChoice(attribute, choices) {
    for (let c of choices) {
      if (c.attribute === attribute) {
        return c;
      }
    }
  }

  // used to pass to callback, returns object of attribute: value pairs
  choicesToObject(choices) {
    var obj = {};
    for (let c of choices) {
      obj[c.attribute] = c.value;
    }
    return obj;
  }

  render() {
    let maxRadioOptions = this.props.maxRadioOptions || 5;
    let options = this.props.options;
    let onChange = this.props.onChange;

    // array of {attribute: attr, value: val}}
    let choices = this.getChoices(options);
    let optionControls = [ ...Array(options.length).keys() ]
      .map( (i) => (
        <OptionControl
          key = { i }
          maxRadioOptions = { maxRadioOptions }
          label = { options[i].label }
          help = { options[i].help }
          choices = { options[i].choices }
          multiple = { options[i].multiple }
          invertValue = { options[i].invertValue }
          min = { options[i].min }
          max = { options[i].max }
          step = { options[i].step }
          markStep = { options[i].markStep }
          markRender = { options[i].markRender }
          tooltipRender = { options[i].tooltipRender }
          value = {
            this.getChoice(options[i].attribute, choices).value
          }
          disabled = { options[i].disabled }
          callback = { (v) => {
            var cs = [ ...choices ]
            for (let j in cs) {
              if (cs[j].attribute === options[i].attribute) {
                cs[j] = {attribute: cs[j].attribute, value: v};
                break;
              }
            }
            onChange(this.choicesToObject(cs)); // callback
          } }
        />
      )
    );

    return (
      <>
        { optionControls }
      </>
    );
  }
}

export class OptionControl extends React.Component {
  render() {
    let maxRadioOptions = this.props.maxRadioOptions;
    let value = this.props.value;
    let label = this.props.label;
    let help = this.props.help;
    let choices = this.props.choices;

    let min = this.props.min;
    let max = this.props.max;
    let step = this.props.step;
    let markStep = this.props.markStep;
    let markRender = this.props.markRender;
    let tooltipRender = this.props.tooltipRender;

    let multiple = this.props.multiple;
    let invertValue = this.props.invertValue || false;
    let disabled = this.props.disabled;
    let callback = this.props.callback;

    return (
      <>
      { !choices
        ? !( isNaN(min) || isNaN(max) || isNaN(step) )
          ? <SliderControl
              label = { label }
              help = { help }
              value = { value }
              min = { min }
              max = { max }
              step = { step }
              markStep = { markStep }
              markRender = { markRender }
              tooltipRender = { tooltipRender }
              disabled = { disabled }
              callback = { callback }
            />
          : <ToggleControl
              label = { label }
              help = { help }
              checked = { invertValue != Boolean(value) } // != <-> XOR
              onChange = { (b) => callback(invertValue != b) }
              disabled = { disabled }
            />
        : multiple
          ? <CheckboxGroup
              label = { label }
              help = { help }
              options = { choices }
              value = { value }
              callback = { callback }
              disabled = { disabled }
            />
          : choices.length <= maxRadioOptions
            ? <RadioControl
                label = { label }
                help = { help }
                selected = { value }
                onChange = { callback }
                options = { choices }
                disabled = { disabled }
              />
            : <SelectControl
                label = { label }
                help = { help }
                value = { value }
                onChange = { callback }
                options = { choices }
                disabled = { disabled }
              />
      }
      </>
    );
  }
}

// Creates multiple CheckboxControls from a group of attributes
export class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.id = "ncs4-components-checkboxgroup-" +
      String(
        document.getElementsByClassName("ncs4-components-checkboxgroup").length
      );
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let value = this.props.value;
    let options = this.props.options;
    let disabled = this.props.disabled;
    let callback = this.props.callback;

    let boxes = [ ...Array(options.length).keys() ]
      .map( (i) => (
        <CheckboxControl
          key = { i }
          label = { options[i].label }
          checked = { value.includes(options[i].value) }
          disabled = { disabled }
          name = { this.id }
          onChange = { (b) => {
            var choice = [ ...value ];
            if (b) {
              choice.push(options[i].value);
            } else {
              let j = choice.indexOf(options[i].value);
              if (j > -1) {
                choice.splice(j, 1);
              }
            }
            callback(choice);
          }}
        />
      )
    );
    return (
      <div
        className = "ncs4-components-checkboxgroup"
      >
        <label
          className = "components-base-control__label css-pezhm9-StyledLabel e1puf3u2"
          for = { this.id }
        >
          { label }
        </label>
        <p
          className = "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
        >
          { help }
        </p>
        { boxes }
      </div>
    );
  }
}

// Handles number selects (RangeControl)
export class SliderControl extends React.Component {
  createMarks(min, max, step, render) {
    var marks = Array(Math.floor( (max - min) / step ) + 1);
    for ( let i = 0; i < marks.length; i++) {
      marks[i] = { value: min, label: render(min) }
      min += step;
    }
    return marks;
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let value = this.props.value;
    let min = this.props.min;
    let max = this.props.max;
    let step = this.props.step || 1;
    let markStep = this.props.markStep || step;
    let markRender = this.props.markRender || ( (v) => String(v) );
    let disabled = this.props.disabled;
    let tooltipRender = this.props.tooltipRender || markRender;
    let callback = this.props.callback;

    return (
      <RangeControl
        label = { label }
        help = { help }
        value = { value }
        min = { min }
        max = { max }
        step = { step }
        marks = { this.createMarks(min, max, markStep, markRender) }
        renderTooltipContent = { tooltipRender }
        disabled = { disabled }
        onChange = { callback }
      />
    );
  }
}

// Handles unit selection
// Toggle (optional)
// unit selector
// Range

export class UnitControl extends React.Component {
  clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  getUnitSettings(props){
    for (let unit of props.units) {
      if (unit.value === props.value) {
        return unit;
      }
    }
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let disabled = this.props.disabled;
    let onChange = this.props.onChange;

    let toggleProps = this.props.toggleSelector; // may be undefined
    let unitProps = this.props.unitSelector;
    let sliderProps = this.props.slider;
    let toggleAttr = toggleProps && toggleProps.attribute;

    let toggleValue = !toggleProps ||
      ( toggleProps.value || toggleProps.default );
    let unitValue = unitProps.value || unitProps.default;
    let sliderValue = !isNaN(sliderProps.value)
      ? sliderProps.value
      : sliderProps.default;

    // Set default values
    if (
      (toggleProps && typeof toggleProps.value === "undefined")
      || typeof unitProps.value === "undefined"
      || isNaN(sliderProps.value)
    ) {
      onChange({
        [toggleAttr]: toggleValue,
        unit: unitValue,
        value: sliderValue,
        asString: String(sliderValue) + unitValue,
      });
    }

    let selectorsDisabled = disabled || !toggleValue

    let unitSettings = this.getUnitSettings(unitProps);
    return (
      <>
        { label && (
          <p
            className = "components-base-control__label css-pezhm9-StyledLabel e1puf3u2"
          >
            { label }
          </p>
        )}
        <PanelRow>
          { toggleAttr && (
            <OptionControl { ...toggleProps }
              value = { toggleValue }
              callback = { (v) => onChange(
                {
                  [toggleAttr]: v,
                  unit: unitValue,
                  value: sliderValue,
                  asString: String(sliderValue) + unitValue,
                }
              ) }
            />
          )}
          <OptionControl { ...unitProps }
            multiple = { false }
            choices = { unitProps.units }
            disabled = { disabled || !toggleValue }
            callback = { (v) => {
              let props = {
                ...unitProps,
                value: v,
              };
              let unitSettings = this.getUnitSettings(props);
              onChange(
              {
                [toggleAttr]: toggleValue,
                unit: v,
                value: this.clamp(
                  sliderValue,
                  unitSettings.min,
                  unitSettings.max
                ),
                asString: this.clamp(
                  sliderValue,
                  unitSettings.min,
                  unitSettings.max
                ) + v,
              })
            }
          }
          />
        </PanelRow>
        <SliderControl { ...sliderProps }
          value = { sliderValue }
          min = { unitSettings.min }
          max = { unitSettings.max }
          step = { unitSettings.step }
          markStep = { unitSettings.markStep || unitSettings.step }
          tooltipRender = {
            (v) => String(v) + (unitSettings.label || unitSettings.value)
          }
          disabled = { disabled || !toggleValue }
          callback = { (v) => onChange(
            {
              [toggleAttr]: toggleValue,
              unit: unitValue,
              value: this.clamp(v, unitSettings.min, unitSettings.max),
              asString: this.clamp(
                v,
                unitSettings.min,
                unitSettings.max
              ) + unitValue,
            }
          ) }
        />
        { help && (
          <p
            className = "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
          >
            { help }
          </p>
        )}
      </>
    );
  }
}