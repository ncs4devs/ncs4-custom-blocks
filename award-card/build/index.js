/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../img/dismiss.svg":
/*!**************************!*\
  !*** ../img/dismiss.svg ***!
  \**************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgDismiss; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _path, _path2, _path3, _path4;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgDismiss(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    id: "dismiss_svg__Layer_1",
    "data-name": "Layer 1",
    xmlns: "http: //www.w3.org/2000/svg",
    viewBox: "0 0 43 95.17"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".dismiss_svg__cls-2,.dismiss_svg__cls-4{fill:none;stroke-width:3px;stroke-miterlimit:10}"))), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "dismiss_svg__cls-1",
    d: "M21.5 42.5a21 21 0 1121-21 21 21 0 01-21 21",
    transform: "translate(0 52.67)"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "dismiss_svg__cls-2",
    d: "M10.91 84.76l21.18-21.19M10.91 63.57l21.18 21.19"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M21.5-10.17a21 21 0 01-21-21 21 21 0 0121-21 21 21 0 0121 21 21 21 0 01-21 21m0-40a19 19 0 00-19 19 19 19 0 0019 19 19 19 0 0019-19 19 19 0 00-19-19z",
    transform: "translate(0 52.67)",
    strokeMiterlimit: 10
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "dismiss_svg__cls-4",
    d: "M10.91 32.09l21.18-21.18M10.91 10.91l21.18 21.18"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDogLy93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDMgOTUuMTciPg0KICA8ZGVmcz4NCiAgICA8c3R5bGU+DQogICAgICAuY2xzLTIsIC5jbHMtNCB7DQogICAgICAgIGZpbGw6IG5vbmU7DQogICAgICAgIHN0cm9rZS13aWR0aDogM3B4Ow0KICAgICAgfQ0KICAgICAgLmNscy0yLCAuY2xzLTMsIC5jbHMtNCB7DQogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KCTwvZGVmcz4NCiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjEuNSwgNDIuNWEyMSwgMjEsIDAsIDEsIDEsIDIxLTIxLCAyMSwgMjEsIDAsIDAsIDEtMjEsIDIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUyLjY3KSIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxMC45MSIgeTE9Ijg0Ljc2IiB4Mj0iMzIuMDkiIHkyPSI2My41NyIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxMC45MSIgeTE9IjYzLjU3IiB4Mj0iMzIuMDkiIHkyPSI4NC43NiIvPg0KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMS41LTEwLjE3YTIxLCAyMSwgMCwgMCwgMS0yMS0yMSwgMjEsIDIxLCAwLCAwLCAxLCAyMS0yMSwgMjEsIDIxLCAwLCAwLCAxLCAyMSwgMjEsIDIxLCAyMSwgMCwgMCwgMS0yMSwgMjFtMC00MGExOSwgMTksIDAsIDAsIDAtMTksIDE5LCAxOSwgMTksIDAsIDAsIDAsIDE5LCAxOSwgMTksIDE5LCAwLCAwLCAwLCAxOS0xOUExOSwgMTksIDAsIDAsIDAsIDIxLjUtNTAuMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUyLjY3KSIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIxMC45MSIgeTE9IjMyLjA5IiB4Mj0iMzIuMDkiIHkyPSIxMC45MSIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIxMC45MSIgeTE9IjEwLjkxIiB4Mj0iMzIuMDkiIHkyPSIzMi4wOSIvPg0KPC9zdmc+DQo=");


/***/ }),

/***/ "../js/ColorSelector.js":
/*!******************************!*\
  !*** ../js/ColorSelector.js ***!
  \******************************/
/*! exports provided: createColorClass, createColorStyle, ColorSelector, verifyColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorClass", function() { return createColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorStyle", function() { return createColorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelector", function() { return ColorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyColor", function() { return verifyColor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function createColorClass(slug, prop) {
  if (!slug || !prop) {
    return null;
  }

  return "has-" + slug + "-" + prop;
} // creates a style dictionary suitable for inline styling of custom colors

/* input format:
  [
    { color: attrs.bgColor,
      props: [ "background-color", "--palette-bg-color"],
    },
    { color: attrs.textColor,
      props: [ "color", "--palette-color" ],
    },
  ]
*/

function createColorStyle(attributes) {
  let style = {};

  for (let attr of attributes) {
    if (!attr.color) {
      continue;
    }

    let color = attr.color.slug ? null : attr.color.color;

    for (let prop of attr.props) {
      style[prop] = color;
    }
  }

  return style;
}
class ColorSelector extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    let label = this.props.label;
    let allowGradients = this.props.allowGradients; // TODO

    let value = this.props.value;
    let onChange = this.props.onChange;
    let settings = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])("core/block-editor").getSettings();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      colors: settings.colors,
      disableCustomColors: settings.disableCustomColors,
      clearable: !settings.disableCustomColors,
      value: value,
      onChange: c => {
        let color = settings.colors.filter(obj => obj.color === c)[0];
        onChange({
          color: c,
          slug: color ? color.slug : null
        });
      }
    }));
  }

}
function verifyColor(color) {
  let colors = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])("core/block-editor").getSettings().colors;
  return getColorBySlug(color.slug, colors);
}

function getColorBySlug(slug, colors) {
  let color = colors.filter(obj => obj.slug === slug)[0];
  return color ? color.color : null;
}

/***/ }),

/***/ "../js/SelectControls.js":
/*!*******************************!*\
  !*** ../js/SelectControls.js ***!
  \*******************************/
/*! exports provided: OptionsControl, OptionControl, OptionGroup, CheckboxGroup, SliderControl, UnitControl, PhoneControl, EmailControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsControl", function() { return OptionsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionControl", function() { return OptionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionGroup", function() { return OptionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderControl", function() { return SliderControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitControl", function() { return UnitControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneControl", function() { return PhoneControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailControl", function() { return EmailControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);




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
    onChange: [value] => [value], (pre-processing hook before returning state object)
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
      onChange = { (v) => { this.setState(v) } }
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

class OptionsControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // Returns attr: value pairs currently selected
  getChoices(options) {
    let choices = [];
    options.forEach((o, i) => {
      choices[i] = {
        attribute: o.attribute,
        value: o.value || o.default
      };
    });
    return choices;
  } // returns choice from choices with the given attribute


  getChoice(attribute, choices) {
    for (let c of choices) {
      if (c.attribute === attribute) {
        return c;
      }
    }
  }

  render() {
    let maxRadioOptions = this.props.maxRadioOptions || 5;
    let options = this.props.options;
    let onChange = this.props.onChange; // array of {attribute: attr, value: val}}

    let choices = this.getChoices(options);
    let optionControls = [...Array(options.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, {
      key: i,
      maxRadioOptions: maxRadioOptions,
      label: options[i].label,
      help: options[i].help,
      choices: options[i].choices,
      multiple: options[i].multiple,
      invertValue: options[i].invertValue,
      min: options[i].min,
      max: options[i].max,
      step: options[i].step,
      markStep: options[i].markStep,
      markRender: options[i].markRender,
      tooltipRender: options[i].tooltipRender,
      value: this.getChoice(options[i].attribute, choices).value,
      disabled: options[i].disabled,
      callback: v => {
        // allows for option-specific onChange hooks
        if (typeof options[i].onChange === "function") {
          v = options[i].onChange(v);
        }

        onChange({
          [options[i].attribute]: v
        }); // callback
      }
    }));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, optionControls);
  }

}
class OptionControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Array.isArray(value) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionGroup, this.props) : !choices ? !(isNaN(min) || isNaN(max) || isNaN(step)) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SliderControl, {
      label: label,
      help: help,
      value: value,
      min: min,
      max: max,
      step: step,
      markStep: markStep,
      markRender: markRender,
      tooltipRender: tooltipRender,
      disabled: disabled,
      callback: callback
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: label,
      help: help,
      checked: invertValue != Boolean(value) // != <-> XOR
      ,
      onChange: b => callback(invertValue != b),
      disabled: disabled
    }) : multiple ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CheckboxGroup, {
      label: label,
      help: help,
      options: choices,
      value: value,
      callback: callback,
      disabled: disabled
    }) : choices.length <= maxRadioOptions ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
      label: label,
      help: help,
      selected: value,
      onChange: callback,
      options: choices,
      disabled: disabled
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: label,
      help: help,
      value: value,
      onChange: callback,
      options: choices,
      disabled: disabled
    }));
  }

} // a group of option controls that accepts array props and returns
// an array of values

class OptionGroup extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // Returns correct properties for a given Option index
  getProps(props, i) {
    var out = { ...props
    };

    for (let [k, v] of Object.entries(out)) {
      if (Array.isArray(v)) {
        out[k] = v[i];
      }
    }

    return out;
  }

  render() {
    let values = this.props.value;
    let callback = this.props.callback;
    let options = [...Array(values.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.getProps(this.props, i), {
      key: i,
      callback: v => {
        let vs = [...values];
        vs[i] = v;
        callback(vs);
      }
    })));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, options);
  }

} // Creates multiple CheckboxControls from a group of attributes

class CheckboxGroup extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.id = "ncs4-components-checkboxgroup-" + String(document.getElementsByClassName("ncs4-components-checkboxgroup").length);
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let value = this.props.value;
    let options = this.props.options;
    let disabled = this.props.disabled;
    let callback = this.props.callback;
    let boxes = [...Array(options.length).keys()].map(i => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
      key: i,
      label: options[i].label,
      checked: value.includes(options[i].value),
      disabled: disabled,
      name: this.id,
      onChange: b => {
        var choice = [...value];

        if (b) {
          choice.push(options[i].value);
        } else {
          let j = choice.indexOf(options[i].value);

          if (j > -1) {
            choice.splice(j, 1);
          }
        }

        callback(choice);
      }
    }));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "ncs4-components-checkboxgroup"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2",
      for: this.id
    }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help), boxes);
  }

} // Handles number selects (RangeControl)

class SliderControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  createMarks(min, max, step, render) {
    var marks = Array(Math.floor((max - min) / step) + 1);

    for (let i = 0; i < marks.length; i++) {
      marks[i] = {
        value: min,
        label: render(min)
      };
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

    let markRender = this.props.markRender || (v => String(v));

    let disabled = this.props.disabled;
    let tooltipRender = this.props.tooltipRender || markRender;
    let callback = this.props.callback;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: label,
      help: help,
      value: value,
      min: min,
      max: max,
      step: step,
      marks: this.createMarks(min, max, markStep, markRender),
      renderTooltipContent: tooltipRender,
      disabled: disabled,
      onChange: callback
    });
  }

} // Handles unit selection
// Toggle (optional)
// unit selector
// Range

class UnitControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  getUnitSettings(props) {
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
    let toggleValue = !toggleProps || toggleProps.value || toggleProps.default;
    let unitValue = unitProps.value || unitProps.default;
    let sliderValue = !isNaN(sliderProps.value) ? sliderProps.value : sliderProps.default; // Set default values

    if (toggleProps && typeof toggleProps.value === "undefined" || typeof unitProps.value === "undefined" || isNaN(sliderProps.value)) {
      onChange({
        [toggleAttr]: toggleValue,
        unit: unitValue,
        value: sliderValue,
        asString: String(sliderValue) + unitValue
      });
    }

    let selectorsDisabled = disabled || !toggleValue;
    let unitSettings = this.getUnitSettings(unitProps);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2"
    }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, toggleAttr && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, toggleProps, {
      value: toggleValue,
      callback: v => onChange({
        [toggleAttr]: v,
        unit: unitValue,
        value: sliderValue,
        asString: String(sliderValue) + unitValue
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(OptionControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, unitProps, {
      multiple: false,
      choices: unitProps.units,
      disabled: disabled || !toggleValue,
      callback: v => {
        let props = { ...unitProps,
          value: v
        };
        let unitSettings = this.getUnitSettings(props);
        onChange({
          [toggleAttr]: toggleValue,
          unit: v,
          value: this.clamp(sliderValue, unitSettings.min, unitSettings.max),
          asString: this.clamp(sliderValue, unitSettings.min, unitSettings.max) + v
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SliderControl, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, sliderProps, {
      value: sliderValue,
      min: unitSettings.min,
      max: unitSettings.max,
      step: unitSettings.step,
      markStep: unitSettings.markStep || unitSettings.step,
      tooltipRender: v => String(v) + (unitSettings.label || unitSettings.value),
      disabled: disabled || !toggleValue,
      callback: v => onChange({
        [toggleAttr]: toggleValue,
        unit: unitValue,
        value: this.clamp(v, unitSettings.min, unitSettings.max),
        asString: this.clamp(v, unitSettings.min, unitSettings.max) + unitValue
      })
    })), help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help));
  }

}
class PhoneControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  validateNumber(num) {
    return !Boolean(num) || PhoneControl.reg.test(num);
  }

  render() {
    let valid = this.validateNumber(this.props.value);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      value: this.props.value,
      onChange: n => {
        this.props.onChange(n);
      },
      label: "Phone",
      help: valid ? null : "Unrecognized phone number format (perhaps you've made a typo?)"
    });
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(PhoneControl, "reg", /^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);

class EmailControl extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  // https://stackoverflow.com/a/201378
  validateEmail(s) {
    return !Boolean(s) || EmailControl.reg.test(s);
  }

  render() {
    let valid = this.validateEmail(this.props.value);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      value: this.props.value,
      onChange: e => {
        this.props.onChange(e); // set state

        if (this.validateEmail(e)) {
          this.props.onChangeComplete(e); // set attribute
        }
      },
      label: "Email",
      help: valid ? null : "Invalid email address"
    });
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(EmailControl, "reg", /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../popup/src/popup.js":
/*!*****************************!*\
  !*** ../popup/src/popup.js ***!
  \*****************************/
/*! exports provided: Popup, PopupSettings, POPUP_STORE, reserveId, deleteId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupSettings", function() { return PopupSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_STORE", function() { return POPUP_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reserveId", function() { return reserveId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteId", function() { return deleteId; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_SelectControls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/SelectControls.js */ "../js/SelectControls.js");
/* harmony import */ var _js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/ColorSelector.js */ "../js/ColorSelector.js");
/* harmony import */ var _popupSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popupSelectors */ "../popup/src/popupSelectors.js");
/* harmony import */ var _popupActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popupActions */ "../popup/src/popupActions.js");


// Library of generic popup classes






 // Should be included by all components that use Popup

let classType = "ncs4-custom-blocks_popup-type"; // stateless popup component, children are rendered as popup contents

class Popup extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let attrs = this.props.attributes;
    let id = "popup-" + String(attrs.id);
    let customBgColor = attrs.bgColor.slug ? null : attrs.bgColor.color;
    let customColor = attrs.textColor.slug ? null : attrs.textColor.color;
    let css = `
      #${id}:target {
        display: block;
      }
    `;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "ncs4-popup-button",
      href: "#"
    }, attrs.buttonTitle) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "ncs4-popup-button",
      href: "#" + id
    }, attrs.buttonTitle), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: id,
      className: "ncs4-popup__wrapper",
      style: {
        textAlign: "left"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "ncs4-popup-overlay",
      href: "#!",
      style: {
        opacity: attrs.overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-popup-content__wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: ["ncs4-popup-content", Object(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_6__["createColorClass"])(attrs.bgColor.slug, "background-color"), Object(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_6__["createColorClass"])(attrs.textColor.slug, "color"), attrs.optionSize].join(' '),
      style: {
        backgroundColor: customBgColor,
        ["--palette-bg-color"]: customBgColor,
        color: customColor,
        ["--palette-color"]: customColor
      }
    }, this.props.children)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", null, css)));
  }

} // Used to create popup setting controls inside of InspectorControls

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Popup, "classType", classType);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Popup, "sizeOptions", [{
  value: 'size-alert',
  label: 'Alert'
}, {
  value: 'size-small',
  label: 'Small'
}, {
  value: 'size-body',
  label: 'Medium (body size)'
}, {
  value: 'size-large',
  label: 'Large'
}]);

class PopupSettings extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let attrs = this.props.attributes;
    let callback = this.props.callback;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Button settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: "Button title",
      placeholder: "Show",
      value: attrs.buttonTitle,
      onChange: v => {
        callback({
          buttonTitle: v
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Popup area settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_6__["ColorSelector"], {
      label: "Popup background",
      value: attrs.bgColor.color,
      onChange: c => {
        callback({
          bgColor: c
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_6__["ColorSelector"], {
      label: "Popup text",
      value: attrs.textColor.color,
      onChange: c => {
        callback({
          textColor: c
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_js_SelectControls_js__WEBPACK_IMPORTED_MODULE_5__["OptionsControl"], {
      options: [{
        attribute: 'overlayOpacity',
        label: 'Overlay opacity',
        value: Math.round(100 * attrs.overlayOpacity),
        min: 0,
        max: 100,
        step: 1,
        markStep: 20,
        markRender: v => String(v) + "%",
        onChange: v => v / 100
      }, {
        attribute: 'optionSize',
        label: "Content size",
        value: attrs.optionSize,
        choices: Popup.sizeOptions
      }],
      onChange: v => {
        callback(v);
      }
    })));
  }

} // Popup store

const POPUP_STORE = "ncs4/popup";

const popupReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ids: []
  };
  let {
    id,
    type
  } = arguments.length > 1 ? arguments[1] : undefined;
  id = Number(id);

  switch (type) {
    case "CREATE":
      let out = [];
      let j = 0;
      let haveAdded = false;

      for (let i = 0; i < state.ids.length; i++) {
        if (!haveAdded && state.ids[i] > id) {
          out[j] = id;
          haveAdded = true;
          j++;
        }

        out[j] = state.ids[i];
        j++;
      }

      if (!haveAdded) {
        out[out.length] = id;
      }

      return { ...state,
        ids: out
      };

    case "DELETE":
      return { ...state,
        ids: state.ids.filter(x => x !== id)
      };

    default:
      return state;
  }
};

Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["registerStore"])(POPUP_STORE, {
  selectors: _popupSelectors__WEBPACK_IMPORTED_MODULE_7__,
  actions: _popupActions__WEBPACK_IMPORTED_MODULE_8__,
  reducer: popupReducer
}); // popup id functions

function reserveId(callback) {
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  // -1 guarantees it is unavailable
  let popupStore = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])("ncs4/popup");
  let {
    createId,
    deleteId
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])("ncs4/popup");
  let resp = popupStore.requestId(id);

  if (resp !== -1) {
    // current id is invalid
    callback(resp);
    createId(resp);
  } else {
    callback(id);
    createId(id);
  }
}
function deleteId(id) {
  let {
    deleteId
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])("ncs4/popup");
  deleteId(id);
}

/***/ }),

/***/ "../popup/src/popupActions.js":
/*!************************************!*\
  !*** ../popup/src/popupActions.js ***!
  \************************************/
/*! exports provided: createId, deleteId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createId", function() { return createId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteId", function() { return deleteId; });
function createId(id) {
  return {
    type: "CREATE",
    id: id
  };
}
function deleteId(id) {
  return {
    type: "DELETE",
    id: id
  };
}

/***/ }),

/***/ "../popup/src/popupSelectors.js":
/*!**************************************!*\
  !*** ../popup/src/popupSelectors.js ***!
  \**************************************/
/*! exports provided: getIds, requestId, getNextId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestId", function() { return requestId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextId", function() { return getNextId; });
const getIds = state => {
  return state.ids || [];
}; // Returns -1 if available, getNextId if unavailable

const requestId = (state, id) => {
  id = Number(id);
  let n = state.ids.length;

  if (id < 0) {
    return getNextId(state); // unavailable
  }

  if (n === 0) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (state.ids[i] === id) {
      return getNextId(state); // unavailable
    }
  }

  return -1;
};
const getNextId = state => {
  for (let i = 0; i < state.ids.length; i++) {
    const id = state.ids[i];

    if (i === 0 && id !== 0) {
      return id;
    }

    if (i + 1 < state.ids.length && state.ids[i + 1] - 1 > id // gap
    || i + 1 >= state.ids.length // end of array
    ) {
      return id + 1;
    }
  }

  return 0;
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? undefined : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? undefined : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? undefined : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? undefined : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? undefined : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? undefined : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? undefined : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? undefined : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? undefined : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? undefined : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? undefined : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? undefined : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? undefined : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? undefined : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? undefined : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? undefined : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? undefined : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: AwardCardEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardCardEdit", function() { return AwardCardEdit; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/ColorSelector.js */ "../js/ColorSelector.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../popup/src/popup.js */ "../popup/src/popup.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save.js */ "./src/save.js");
/* harmony import */ var _recipients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipients */ "./src/recipients.js");










const normalizedDescLength = 400; // Number of chars for the short description

class AwardCardEdit extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.registry = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["createRegistry"])({});
    this.registry.register(_recipients__WEBPACK_IMPORTED_MODULE_9__["store"]);
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);
    this.onStoreUpdate = this.onStoreUpdate.bind(this);
    this.handleDescription = this.handleDescription.bind(this); // normalize description if length is wrong or it doesn't exist

    if (this.attributes.desc && (!this.attributes.normalizedDesc || this.attributes.normalizedDesc.length !== normalizedDescLength)) {
      this.handleDescription(this.attributes.desc);
    } // store existing recipients


    Object(_recipients__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(this.registry, this.attributes.recipients, this.attributes.useOrgs);
    this.registry.stores[_recipients__WEBPACK_IMPORTED_MODULE_9__["recipientStoreName"]].subscribe(this.onStoreUpdate);
    this.state = {
      overlayOpacity: this.attributes.overlayOpacity,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      id: this.attributes.id,
      customId: this.attributes.customId,
      optionSize: this.attributes.optionSize,
      buttonTitle: this.attributes.buttonTitle,
      name: this.attributes.name,
      desc: this.attributes.desc
    };
  }

  componentDidMount() {
    Object(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["reserveId"])(x => this.setStateAttributes({
      id: x
    }), this.state.id);
    this.setStateAttributes({
      bgColor: {
        color: Object(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_5__["verifyColor"])(this.state.bgColor),
        slug: this.state.bgColor.slug
      }
    });
    this.setStateAttributes({
      textColor: {
        color: Object(_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_5__["verifyColor"])(this.state.textColor),
        slug: this.state.textColor.slug
      }
    });
  }

  componentWillUnmount() {
    Object(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["deleteId"])(this.state.id);
  }

  setStateAttributes(attrs) {
    this.setState(attrs, () => {
      this.setAttributes(attrs);
    });
  } // returns (x) => null


  trimStateAttribute(attr) {
    return x => {
      this.setState({
        [attr]: x
      }, () => {
        this.setAttributes({
          [attr]: x.trim()
        });
      });
    };
  }

  onStoreUpdate() {
    this.setAttributes(Object(_recipients__WEBPACK_IMPORTED_MODULE_9__["getRecipientData"])(this.registry));
  }

  handleDescription(str) {
    str = str.trim();
    let paddingChars = normalizedDescLength - str.length;
    let normalizedDesc = str;

    if (paddingChars > 0) {
      normalizedDesc += " " + "&nbsp;".repeat(paddingChars - 1);
    } else if (paddingChars < 0) {
      normalizedDesc = normalizedDesc.slice(0, normalizedDescLength - 3) + "...";
    }

    this.setStateAttributes({
      "desc": str
    });
    this.setAttributes({
      "normalizedDesc": normalizedDesc
    });
  }

  render() {
    let blockProps = this.props.blockProps;
    let registry = this.registry;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: ["ncs4-award-card", _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["Popup"].classType, blockProps.className].join(' ')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "ncs4-award-card__name"
    }, this.state.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "ncs4-award-card__description",
      tagName: "p",
      value: this.state.desc,
      onChange: this.handleDescription,
      placeholder: "Award description..."
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-award-card__edit-recipients"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Recipients"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: "dashicons dashicons-plus",
      title: "Add recipient",
      onClick: () => Object(_recipients__WEBPACK_IMPORTED_MODULE_9__["addRecipient"])(registry)
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["RegistryProvider"], {
      value: registry
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_recipients__WEBPACK_IMPORTED_MODULE_9__["default"], {
      awardId: blockProps.id
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Award info",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      value: this.state.name,
      label: "Award name",
      help: "Name of the award",
      placeholder: "World's Best Web Dev",
      onChange: this.trimStateAttribute("name")
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
      label: "Split past recipients by organization",
      help: "Leave checked to organize past recipients by their organization",
      checked: this.registry.select(_recipients__WEBPACK_IMPORTED_MODULE_9__["recipientStoreName"]).getUseOrgs(),
      onChange: b => {
        let {
          setUseOrgs,
          sortRecipients
        } = this.registry.dispatch(_recipients__WEBPACK_IMPORTED_MODULE_9__["recipientStoreName"]);
        setUseOrgs(b);
        sortRecipients();
        this.setAttributes({
          useOrgs: b
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["PopupSettings"], {
      attributes: this.state,
      callback: this.setStateAttributes
    })));
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save.js */ "./src/save.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/award-card', {
  apiVersion: 2,
  title: 'Award Card',
  icon: 'awards',
  category: 'layout',
  attributes: {
    overlayOpacity: {
      type: 'number',
      default: 0.9
    },
    bgColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'white-bright'
      }
    },
    textColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'secondary-1c'
      }
    },
    id: {
      type: 'number'
    },
    customId: {
      type: 'string'
    },
    optionSize: {
      type: 'string',
      default: 'size-body'
    },
    buttonTitle: {
      type: 'string',
      default: 'Read More'
    },
    name: {
      type: 'string',
      default: 'Award'
    },
    desc: {
      type: 'string'
    },
    normalizedDesc: {
      type: 'string'
    },
    recipients: {
      type: 'object',
      default: {}
    },
    displayPrevious: {
      type: 'boolean',
      default: false
    },
    useOrgs: {
      type: 'boolean',
      default: false
    }
  },
  edit: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_js__WEBPACK_IMPORTED_MODULE_4__["AwardCardEdit"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])()
  })),
  save: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_5__["AwardCardSave"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()
  }))
});

/***/ }),

/***/ "./src/recipientActionTypes.js":
/*!*************************************!*\
  !*** ./src/recipientActionTypes.js ***!
  \*************************************/
/*! exports provided: Create, Delete, Edit, SetRecipients, SetUseOrgs, AddOrganization, Sort, SetCurrentYearIf, SetCurrentYear, RecalculateCurrentYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipients", function() { return SetRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUseOrgs", function() { return SetUseOrgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrganization", function() { return AddOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentYearIf", function() { return SetCurrentYearIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentYear", function() { return SetCurrentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecalculateCurrentYear", function() { return RecalculateCurrentYear; });
const Create = "CREATE";
const Delete = "DELETE";
const Edit = "EDIT";
const SetRecipients = "SET_RECIPIENTS";
const SetUseOrgs = "SET_ORGS";
const AddOrganization = "ADD_ORG";
const Sort = "SORT";
const SetCurrentYearIf = "SET_CURRENT_YEAR_IF";
const SetCurrentYear = "SET_CURRENT_YEAR";
const RecalculateCurrentYear = "RECALCULATE_CURRENT_YEAR";

/***/ }),

/***/ "./src/recipientActions.js":
/*!*********************************!*\
  !*** ./src/recipientActions.js ***!
  \*********************************/
/*! exports provided: createRecipient, deleteRecipient, editRecipient, setRecipients, setUseOrgs, setCurrentYear, setCurrentYearIf, recalculateCurrentYear, addOrganization, sortRecipients, updateCurrentYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecipient", function() { return createRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRecipient", function() { return deleteRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRecipient", function() { return editRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRecipients", function() { return setRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseOrgs", function() { return setUseOrgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentYear", function() { return setCurrentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentYearIf", function() { return setCurrentYearIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recalculateCurrentYear", function() { return recalculateCurrentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrganization", function() { return addOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRecipients", function() { return sortRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentYear", function() { return updateCurrentYear; });
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");

function createRecipient(data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Create"],
    data
  };
}
function deleteRecipient(data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Delete"],
    data
  };
}
function editRecipient(oldData, data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Edit"],
    oldData,
    data
  };
}
function setRecipients(data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetRecipients"],
    data
  };
}
function setUseOrgs(useOrgs) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetUseOrgs"],
    useOrgs
  };
}
function setCurrentYear(year) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetCurrentYear"],
    year
  };
}
function setCurrentYearIf(year) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetCurrentYearIf"],
    year
  };
}
function recalculateCurrentYear() {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["RecalculateCurrentYear"]
  };
}
function addOrganization(organization) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["AddOrganization"],
    organization
  };
}
function sortRecipients() {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Sort"]
  };
}
function updateCurrentYear(year) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetCurrentYearIf"],
    year
  };
}

/***/ }),

/***/ "./src/recipientReducers.js":
/*!**********************************!*\
  !*** ./src/recipientReducers.js ***!
  \**********************************/
/*! exports provided: traverseRecipients, reduceOverRecipients, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseRecipients", function() { return traverseRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceOverRecipients", function() { return reduceOverRecipients; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/sort.js");
/* harmony import */ var _recipientActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipientActions */ "./src/recipientActions.js");




/***** Sorting variables *****/

const defaultOrg = "Unaffiliated";
const industrySegments = {
  pro: {
    title: "Professional Sports and Entertainment",
    useOrgs: true
  },
  college: {
    title: "Intercollegiate Athletics",
    useOrgs: false
  },
  hs: {
    title: "Interscholastic Athletics and After-School Activities",
    useOrgs: false
  },
  marathon: {
    title: "Marathon and Endurance Events",
    useOrgs: false
  },
  other: {
    title: "Other",
    useOrgs: true
  }
};
const orgFields = ["industry", "organization"];
/***** Helper functions *****/
// no particular order

function traverseRecipients(tree, visit) {
  if (Array.isArray(tree)) {
    tree.forEach(visit);
  } else {
    for (let field in tree) {
      if (field === "order" || field === "length") {
        continue;
      }

      traverseRecipients(tree[field], visit);
    }
  }
}
function reduceOverRecipients(tree, visit) {
  let newTree = {};

  if (Array.isArray(tree)) {
    return tree.reduce(visit, []);
  }

  for (let field in tree) {
    if (field === "order" || field === "length") {
      continue;
    }

    newTree[field] = reduceOverRecipients(tree[field], visit);
  }

  return newTree;
}

function addToRecipientTree(root, recipient, useOrgs, currentYear) {
  let tree = {
    current: root.current || [],
    previous: root.previous || (useOrgs ? {} : [])
  };
  const compare = _sort__WEBPACK_IMPORTED_MODULE_2__["compareYearThenNames"];

  if (recipient.year === currentYear) {
    tree.current = Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortedInsert"])(tree.current, recipient, compare);
  } else {
    if (useOrgs) {
      tree.previous = buildSubtree(tree.previous, orgFields, recipient, compare, useOrgs = recipient.organization && industrySegments[recipient.organization] ? industrySegments[recipient.organization].useOrgs : useOrgs);
      tree.previous.length = tree.previous.length ? tree.previous.length + 1 : 1;
    } else {
      tree.previous = Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortedInsert"])(tree.previous, recipient, compare);
    }
  }

  return tree;
}

function buildSubtree(root, fields, recipient, compare) {
  let useOrgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (fields.length > 0) {
    let field = recipient[fields[0]];

    if (fields[0] === "organization" && !field) {
      field = defaultOrg;
    }

    if (fields[0] === "organization" && !useOrgs) {
      return buildSubtree(root, fields.slice(1), recipient, compare, useOrgs);
    }

    if (fields.length && !root[field]) {
      // there is a subtree and it needs to be added to order
      let order = root.order || [];
      order = Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortedInsert"])(order, field, _sort__WEBPACK_IMPORTED_MODULE_2__["compareStrings"]);
      root.order = order;
      root[field] = {};
    } else {
      root[field] = root[field] || [];
    }

    if (fields[0] === "industry" && industrySegments[field]) {
      root[field] = buildSubtree(root[field], fields.slice(1), recipient, compare, industrySegments[field].useOrgs);
    } else {
      root[field] = buildSubtree(root[field], fields.slice(1), recipient, compare);
    }

    return root;
  } else {
    return Object(_sort__WEBPACK_IMPORTED_MODULE_2__["sortedInsert"])(root, recipient, compare);
  }
}

function getRecipientsPath(tree, recipient, currentYear) {
  const properties = ["industry", "organization"];
  let path = "";

  if (recipient.year === currentYear) {
    path += "current/";
  } else {
    path += "previous/";
    let field = "previous";
    let propertiesArr = [...properties];

    while (!Array.isArray(tree[field])) {
      tree = tree[field];
      field = recipient[propertiesArr[0]];
      propertiesArr = propertiesArr.slice(1);
      path += field + "/";
    }
  }

  return path.replace(/(^\/)|(\/$)/g, "");
}

function assignRecipientsSlice(tree, slice, path) {
  let newSlice = slice;
  let fields = path.split("/");

  for (let i = fields.length - 1; i >= 0; i--) {
    newSlice = { ...getRecipientsSlice(tree, fields.slice(0, i).join("/")),
      [fields[i]]: newSlice
    };
  }

  return { ...tree,
    ...newSlice
  };
}

function getRecipientsSlice(tree, path) {
  let fields = path.split("/");

  for (let i = 0; i < fields.length; i++) {
    tree = tree[fields[i]];
  }

  return tree;
}
/***** Reducers *****/
// action.data includes id


const recipients = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let {
    useOrgs,
    currentYear
  } = arguments.length > 2 ? arguments[2] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Create"]:
      {
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentYearIf"](action.data.year));
        return addToRecipientTree(state, action.data, useOrgs, currentYear);
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Delete"]:
      {
        let path = getRecipientsPath(state, action.data, currentYear);
        let newSlice = getRecipientsSlice(state, path).filter(x => x.id !== action.data.id);

        if (action.data.year === currentYear && state.current.length < 2) {
          let year = null;
          traverseRecipients(state.previous, r => {
            if (!year || r.year > year) {
              year = r.year;
            }
          });
          action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["setCurrentYear"](year));
        }

        return assignRecipientsSlice(state, newSlice, path);
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"]:
      {
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["deleteRecipient"](action.oldData));
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["createRecipient"](action.data));
        return state;
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["SetRecipients"]:
      {
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["recalculateCurrentYear"]());
        return Object.assign({}, action.data);
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Sort"]:
      {
        // re-sort entire tree
        let newTree = {};
        traverseRecipients(state, recipient => {
          newTree = addToRecipientTree(newTree, recipient, useOrgs, currentYear);
        });
        return newTree;
        break;
      }

    default:
      {
        return state;
      }
  }
};

const ids = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Create"]:
      {
        let out = [];
        let j = 0;
        let haveAdded = false;
        let data = action.data;

        for (let i = 0; i < state.length; i++) {
          if (!haveAdded && state[i] > data.id) {
            out[j] = data.id;
            haveAdded = true;
            j++;
          }

          out[j] = state[i];
          j++;
        }

        if (!haveAdded) {
          out[out.length] = data.id;
        }

        return out;
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Delete"]:
      {
        return state.filter(x => x !== action.id);
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"]:
      {
        // just check the id exists
        if (!state.includes(action.data.id)) {
          console.error(_recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"] + ": id '" + action.data.id + "' not found");
        }

        return state;
        break;
      }

    default:
      {
        return state;
      }
  }
};

const useOrgs = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["SetUseOrgs"]:
      {
        return action.useOrgs;
        break;
      }

    default:
      {
        return state;
      }
  }
};

const organizations = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["AddOrganization"]:
      {
        if (!state.includes(action.organization)) {
          return [...state, action.organization];
        } else {
          return state;
        }

        break;
      }

    default:
      {
        return state;
      }
  }
};

const currentYear = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let {
    recipients
  } = arguments.length > 2 ? arguments[2] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["SetCurrentYearIf"]:
      {
        if (!state || state < action.year) {
          action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["sortRecipients"]());
          return action.year;
        } else {
          return state;
        }

        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["SetCurrentYear"]:
      {
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["sortRecipients"]());
        return action.year;
        break;
      }

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["RecalculateCurrentYear"]:
      {
        let year = null;
        traverseRecipients(recipients, r => {
          if (!year || r.year > year) {
            year = r.year;
          }
        });
        action.asyncDispatch(_recipientActions__WEBPACK_IMPORTED_MODULE_3__["sortRecipients"]());
        return year;
      }

    default:
      {
        return state;
      }
  }
}; // Higher-order reducers


/* harmony default export */ __webpack_exports__["default"] = (combineReducersWithData({
  recipients: {
    reducer: recipients,
    stateReducer: state => ({
      useOrgs: state.useOrgs,
      currentYear: state.currentYear
    })
  },
  ids,
  useOrgs,
  organizations,
  currentYear: {
    reducer: currentYear,
    stateReducer: state => ({
      recipients: state.recipients
    })
  }
})); // takes an object of {reducer: function(), stateReducer: function()} objects
// stateReducer() should take the full store's state and return what data the
// reducer function needs. This data will be passed to the reducer as the third
// parameter

function combineReducersWithData(reducersWithData) {
  return function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;
    let newState = {};

    for (let field in reducersWithData) {
      if (typeof reducersWithData[field] === "function") {
        newState[field] = reducersWithData[field](state[field], action);
      } else {
        let {
          reducer,
          stateReducer
        } = reducersWithData[field];

        stateReducer = stateReducer || (x => null);

        newState[field] = reducer(state[field], action, stateReducer(state));
      }
    }

    return newState;
  };
}

/***/ }),

/***/ "./src/recipientSelectors.js":
/*!***********************************!*\
  !*** ./src/recipientSelectors.js ***!
  \***********************************/
/*! exports provided: getRecipients, getState, getUsedIds, getUseOrgs, getCurrentYear, getOrganizations, hasId, createRecipientData, getNextId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipients", function() { return getRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsedIds", function() { return getUsedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseOrgs", function() { return getUseOrgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentYear", function() { return getCurrentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrganizations", function() { return getOrganizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasId", function() { return hasId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecipientData", function() { return createRecipientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextId", function() { return getNextId; });
// if ids is a valid array: return all recipients with matching ids,
// else return all recipients
const getRecipients = (state, ids) => {
  if (Array.isArray(ids)) {
    return state.recipients.filter(r => ids.includes(r.id));
  } else {
    return state.recipients;
  }
};
const getState = state => state;
const getUsedIds = state => state.ids;
const getUseOrgs = state => state.useOrgs;
const getCurrentYear = state => state.currentYear;
const getOrganizations = state => state.organizations;
const hasId = (state, id) => state.ids.includes(id);
const createRecipientData = (state, data) => ({ ...data,
  id: !isNaN(data.id) && !hasId(data.id) ? data.id : getNextId(state)
});
const getNextId = state => {
  for (let i = 0; i < state.ids.length; i++) {
    const id = state.ids[i];

    if (i === 0 && id !== 0) {
      return id;
    }

    if (i + 1 < state.ids.length && state.ids[i + 1] - 1 > id // gap
    || i + 1 >= state.ids.length // end of array
    ) {
      return id + 1;
    }
  }

  return 0;
};

/***/ }),

/***/ "./src/recipients.js":
/*!***************************!*\
  !*** ./src/recipients.js ***!
  \***************************/
/*! exports provided: recipientStoreName, store, addRecipient, initializeStore, getRecipientData, default, RecipientsSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipientStoreName", function() { return recipientStoreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipient", function() { return addRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipientData", function() { return getRecipientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientsSave", function() { return RecipientsSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _recipientSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipientSelectors */ "./src/recipientSelectors.js");
/* harmony import */ var _recipientActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipientActions */ "./src/recipientActions.js");
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");
/* harmony import */ var _recipientReducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipientReducers */ "./src/recipientReducers.js");












/*
  Sorting is done by splitting Recipients into a tree with the field being
  either the header, or an alias to the header title.
  Each subtree then becomes its own section on the page, with the depth
  encoded as an HTML attribute for styling.
  Each edge leaf is an array of recipient objects, sorted by year and then name
  Sorting of organization and industry is handled by sorting their
  identifiers in an array stored in a special leaf, `order`, in each proper
  subtree that isn't an edge leaf.

  Example recipient tree:

  // Organization sorting disabled
  {
    "current": [
      {"name":"Elizabeth Woollen","position":"Chief (Ret.), The University of Oklahoma Police Department","year":"2021","industry":"pro"}
    ],
    "previous": [
      {"name":"John King","position":"CSSP, Executive Director of Public Safety, Chief of Police (Ret.), Boston College","year":"2019","industry":"other"},
      {"name":"Dennis Cunningham","position":"Executive Vice President/Director of Security, National Hockey League","year":"2018","industry":"other"},
      {"name":"Larry Buendorf","position":"Chief Security Officer, United States Olympic Committee","year":"2017","industry":"other"}
    ]
  }

  // Organization sorting enabled (some entries ommitted, some organizations incorrectly labeled)
  {
    "current": [
      {"name":"Salvatore DeAngelis","position":"Director, Operations/Security, Philadelphia Phillies ","organization":"MLB","year":"2021","industry":"pro"},
      {"name":"Brandon Flynn","position":"Security and Parking Manager, Tampa Sports Authority ","organization":"NFL","year":"2021","industry":"pro"},
      ...
    ],
    "previous": {
      "order": ["hs","pro","other","marathon"],
      "marathon": [
        {"name":"John Bertsch","position":"Executive Director of Global Safety & Security, IRONMAN World Championship","organization":"Marathon/Endurance Events","year":"2017","industry":"marathon"},
        {"name":"Virginia Achman","position":"Executive Director, Twin Cities in Motion","organization":"Marathon/Endurance Events","year":"2018","industry":"marathon"},
        {"name":"Greg Haapala","position":"Race Director, Grandma's Marathon","organization":"Marathon/Endurance Events","year":"2019","industry":"marathon"}
      ],
      "length": 51,
      "other": {
        "order": ["NHL","NFL","NCAA","NBA","National Federation of High School Associations","MLB","Marathon/Endurance Events"],
        "Marathon/Endurance Events": [
          {"name":"Dave McGillivray","position":"Boston Marathon","organization":"Marathon/Endurance Events","year":"2014","industry":"other"},
          {"name":"Mike Nishi","position":"Chicago Marathon","organization":"Marathon/Endurance Events","year":"2015","industry":"other"},
          {"name":"Ted Metellus","position":"Competitor Group","organization":"Marathon/Endurance Events","year":"2016","industry":"other"}
        ],
        ...
      },
      "pro": {
        "order": ["NBA","MLB"],
        "MLB": [
          {"name":"Greg Terp","position":"Miami Marlins","organization":"MLB","year":"2016","industry":"pro"},
          {"name":"Randy Olewinski","position":"Security Director, Milwaukee Brewers","organization":"MLB","year":"2017","industry":"pro"},
        ],
        "NBA": [
          {"name":"Scott Anderson","position":"Pinnacle Venue Services","organization":"NBA","year":"2016","industry":"pro"}
        ]
      },
      "hs": [
        {"name":"Marmion Dambrino","position":"Director of Athletics, Houston Independent School District","organization":"National Federation of High School Associations","year":"2018","industry":"hs"},
        {"name":"Guy Grace","position":"Director of Security and Emergency Planning, Littleton Public Schools","organization":"National Federation of High School Associations","year":"2019","industry":"hs"}
      ]
    }
  }

*/

const recipientStoreName = "ncs4/recipient-store"; // Create redux store with middleware and then add to WP registry
// WordPress store, wrapper around redux store

const store = {
  name: recipientStoreName,
  instantiate: () => {
    let listeners = new Set(); // Middleware

    const logger = store => next => action => {
      //console.log("Dispatching", action);
      let result = next(action); //console.log("Next state", store.getState());

      return result;
    };

    const asyncDispatchMiddleware = store => next => action => {
      let syncActivityFinished = false;
      let actionQueue = [];

      function flushQueue() {
        actionQueue.forEach(a => store.dispatch(a)); // flush queue

        actionQueue = [];
      }

      function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);

        if (syncActivityFinished) {
          flushQueue();
        }
      }

      const actionWithAsyncDispatch = Object.assign({}, action, {
        asyncDispatch
      });
      next(actionWithAsyncDispatch);
      syncActivityFinished = true;
      flushQueue();
    };

    const reduxStore = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_recipientReducers__WEBPACK_IMPORTED_MODULE_11__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(logger, asyncDispatchMiddleware));
    const boundActions = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(_recipientActions__WEBPACK_IMPORTED_MODULE_9__, action => function () {
      return reduxStore.dispatch(action(...arguments));
    });
    const boundSelectors = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["mapValues"])(_recipientSelectors__WEBPACK_IMPORTED_MODULE_8__, selector => function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return selector(reduxStore.getState(), ...args);
    });
    return {
      actions: _recipientActions__WEBPACK_IMPORTED_MODULE_9__,
      selectors: _recipientSelectors__WEBPACK_IMPORTED_MODULE_8__,
      subscribe: listener => reduxStore.subscribe(listener),
      reducer: _recipientReducers__WEBPACK_IMPORTED_MODULE_11__["default"],
      getSelectors: () => boundSelectors,
      getActions: () => boundActions,
      store: reduxStore
    };
  }
}; // Constants

const industrySegments = {
  pro: {
    title: "Professional Sports and Entertainment",
    useOrgs: true
  },
  college: {
    title: "Intercollegiate Athletics",
    useOrgs: false
  },
  hs: {
    title: "Interscholastic Athletics and After-School Activities",
    useOrgs: false
  },
  marathon: {
    title: "Marathon and Endurance Events",
    useOrgs: false
  },
  other: {
    title: "Other",
    useOrgs: true
  }
}; // create a default recipient and set it to editMode

function addRecipient(registry) {
  let {
    createRecipient
  } = registry.dispatch(recipientStoreName);
  createRecipient({
    year: new Date().getFullYear(),
    id: registry.select(recipientStoreName).getNextId(),
    industry: "other",
    editMode: true,
    cancelDisabled: true
  });
}
function initializeStore(registry, recipients, useOrgs) {
  let actions = registry.dispatch(recipientStoreName);
  let organizations = registry.select(recipientStoreName).getOrganizations();
  actions.setUseOrgs(useOrgs);
  Object(_recipientReducers__WEBPACK_IMPORTED_MODULE_11__["traverseRecipients"])(recipients, r => {
    actions.updateCurrentYear(r.year);
    actions.createRecipient({ ...r,
      id: registry.select(recipientStoreName).getNextId(),
      industry: r.industry || "other"
    });

    if (r.organization && !organizations.includes(r.organization)) {
      actions.addOrganization(r.organization);
    }
  });
} // returns all data necessary to save recipients to DB

function getRecipientData(registry) {
  let recipients = registry.select(recipientStoreName).getRecipients();
  var currentYear = registry.select(recipientStoreName).getCurrentYear();
  let excludeFields = ["editMode", "cancelDisabled"];
  let newRecipients = Object(_recipientReducers__WEBPACK_IMPORTED_MODULE_11__["reduceOverRecipients"])(recipients, (arr, r) => {
    if (isRecipientValid(r)) {
      let filteredRecipient = {};

      for (let field in r) {
        if (excludeFields.includes(field)) {
          continue;
        }

        filteredRecipient[field] = typeof r[field] === "string" ? r[field].trim() : r[field];
      }

      return arr.concat([filteredRecipient]);
    }

    return arr;
  });
  return {
    recipients: newRecipients
  };
} // tests if the recipient can be saved

function isRecipientValid(data) {
  if (typeof data.name !== "string" || data.name === "") {
    return false;
  }

  if (!data.year || isNaN(data.year) || data.year < 2000) {
    return false;
  }

  return true;
}
/***** Components *****/


const RecipientsSectionContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  backend: false,
  onChange: null,
  recipients: [],
  useOrgs: false,
  actions: null,
  currentYear: null
});
function Recipients(props) {
  /*****  Constants *****/
  const actions = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])(recipientStoreName);
  const recipients = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useSelect"])(select => select(recipientStoreName).getRecipients());
  const currentYear = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useSelect"])(select => select(recipientStoreName).getCurrentYear());
  const useOrgs = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useSelect"])(select => select(recipientStoreName).getUseOrgs());

  if (!recipients || !recipients.current) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSectionContext.Provider, {
    value: {
      backend: true,
      onChange: actions.editRecipient,
      recipients,
      useOrgs,
      actions,
      currentYear
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSectionContext.Consumer, null, context => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsTree, {
    recipients: context.recipients,
    currentYear: context.currentYear,
    depth: 0
  })));
}
function RecipientsSave(props) {
  let recipients = props.recipients;

  if (!recipients || !recipients.current || !recipients.previous || !recipients.current[0]) {
    return null; // malformed database attribute
  }

  let hasPreviousRecipients = recipients.previous.length > 0;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSectionContext.Provider, {
    value: {
      backend: false,
      recipients,
      useOrgs: props.useOrgs,
      currentYear: recipients.current[0].year
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSectionContext.Consumer, null, context => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsTree, {
    recipients: context.recipients,
    currentYear: context.currentYear,
    depth: 0
  })));
}

function RecipientsTree(props) {
  let leaves = [];
  let recipients = props.recipients;
  let fields = recipients.order || Object.keys(recipients).filter(field => field !== "order" && field !== "length");

  for (let field of fields) {
    let recipients = props.recipients[field];
    let header;

    if (industrySegments[field]) {
      header = industrySegments[field].title;
    } else if (field === "current") {
      header = recipients.length > 0 ? recipients[0].year + " Recipient" : null;
      header = recipients.length > 1 ? header + "s" : header;
    } else if (field === "previous") {
      header = recipients.length > 0 ? "Previous Recipient" : null;
      header = recipients.length > 1 ? header + "s" : header;
    } else {
      header = field;
    }

    leaves.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsLeaf, {
      key: field,
      recipients: recipients,
      header: header,
      displayYear: field !== "current",
      depth: props.depth
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, leaves);
}

function RecipientsLeaf(props) {
  let content = Array.isArray(props.recipients) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsList, {
    recipients: props.recipients,
    displayYear: props.displayYear,
    depth: props.depth
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsTree, {
    recipients: props.recipients,
    displayYear: props.displayYear,
    depth: props.depth + 1
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, props.header && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsHeader, {
    depth: props.depth,
    header: props.header
  }), content);
}

function RecipientsHeader(props) {
  let commonProps = {
    className: "ncs4-award-recipient__header",
    depth: props.depth
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, props.depth === 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", commonProps, props.header), props.depth === 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", commonProps, props.header), props.depth === 2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h5", commonProps, props.header), props.depth > 2 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h6", commonProps, props.header));
}

function RecipientsList(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, props.recipients.map(recipient => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSectionContext.Consumer, null, context => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, context.backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Recipient, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, context, {
    recipient: recipient,
    key: recipient.id,
    displayYear: props.displayYear
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientSave, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, context, {
    recipient: recipient,
    key: recipient.id,
    displayYear: props.displayYear
  }))))));
}

function Recipient(props) {
  let initData = props.recipient;
  let [isEditing, setEditing] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Boolean(initData.editMode));
  let actions = props.actions;
  let orgs = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useSelect"])(select => select(recipientStoreName).getOrganizations());
  let {
    addOrganization
  } = props.actions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isEditing ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientEditer, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    initialState: initData,
    delete: () => actions.deleteRecipient(initData),
    cancel: () => setEditing(false),
    save: info => {
      setEditing(false);

      if (info.organization && !orgs.includes(info.organization)) {
        actions.addOrganization(info.organization);
      }

      props.onChange(initData, { ...info,
        editMode: false
      });
    }
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientSave, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    recipient: initData,
    setEditing: setEditing
  })));
}

function RecipientSave(props) {
  let recipient = props.recipient;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "ncs4-award-recipient"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__name"
  }, recipient.name), recipient.position && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__position"
  }, recipient.position)), props.displayYear && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__year"
  }, recipient.year)), props.useOrgs && recipient.organization && !props.displayYear && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, " (", recipient.organization, ")"), props.backend && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "dashicons dashicons-edit ncs4-award-recipient__edit",
    onClick: () => props.setEditing(true)
  }));
}

function RecipientEditer(props) {
  let [dataState, setDataState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.initialState);
  let [uiState, setUIState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    deleteClicked: false,
    cancelClicked: false,
    saveValid: true
  });

  let changeHandler = attr => x => {
    setDataState({ ...dataState,
      [attr]: x
    });
  };

  let uiHandler = attr => x => {
    setUIState({ ...uiState,
      [attr]: x
    });
  };

  let deleteHandler = e => {
    if (!uiState.deleteClicked) {
      uiHandler("deleteClicked")(true);
    } else {
      props.delete();
    }
  };

  let cancelHandler = e => {
    if (!uiState.cancelClicked) {
      uiHandler("cancelClicked")(true);
    } else {
      props.cancel();
    }
  };

  let saveHandler = () => {
    if (isRecipientValid(dataState)) {
      uiHandler("saveValid")(true);
      props.save(dataState);
    } else {
      // Invalid data, display error
      uiHandler("saveValid")(false);
    }
  };

  let organizations = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["useSelect"])(select => select(recipientStoreName).getOrganizations());
  const deleteClass = "dashicons dashicons-trash ncs4-award-recipient__edit-delete";
  const cancelClass = "dashicons dashicons-no ncs4-award-recipient__edit-cancel";
  const labelClasses = "css-1wzzj1a css-4dk55l e1puf3u1";
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-award-card__recipient-editer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: uiState.deleteClicked ? deleteClass + " toggled" : deleteClass,
    tabIndex: 0,
    onClick: deleteHandler,
    onBlur: () => uiHandler("deleteClicked")(false)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: [cancelClass, uiState.cancelClicked ? "toggled" : null, props.cancelDisabled ? "disabled" : null].join(" "),
    tabIndex: 0,
    onClick: props.cancelDisabled ? null : cancelHandler,
    onBlur: () => uiHandler("cancelClicked")(false)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "dashicons dashicons-yes ncs4-award-recipient__edit-save",
    onClick: saveHandler
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-award-recipient__input-fields-area"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    value: dataState.name,
    label: "Recipient name",
    placeholder: "John Deer",
    onChange: changeHandler("name")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    value: dataState.position,
    label: "Recipient position",
    placeholder: "Super-executive-vice-president of business operations",
    onChange: changeHandler("position")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-award-recipient__field-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-award-recipient__organization-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "ncs4-award-recipient__organization-label " + labelClasses,
    for: "organization_award-" + props.awardId + "_recipient-" + props.id
  }, "Organization"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    className: "css-1kyqli5",
    list: "organizations_award-" + props.awardId + "_recipient-" + props.id,
    id: "organization_award-" + props.awardId + "_recipient-" + props.id,
    value: dataState.organization,
    placeholder: "NCS\u2074",
    onChange: e => {
      changeHandler("organization")(e.target.value);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("datalist", {
    id: "organizations_award-" + props.awardId + "_recipient-" + props.id
  }, organizations.map(org => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: org,
    key: org
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-award-recipient__year-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "ncs4-award-recipient__year-label " + labelClasses,
    for: "award-year_award-" + props.awardId + "_recipient-" + props.id
  }, "Award Year"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    id: "award-year_award-" + props.awardId + "_recipient-" + props.id,
    className: "css-1kyqli5",
    value: dataState.year,
    onChange: e => changeHandler("year")(e.target.value)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
    label: "Industry segment",
    selected: dataState.industry,
    options: [{
      label: "Professional & Entertainment",
      value: "pro"
    }, {
      label: "Intercollegiate",
      value: "college"
    }, {
      label: "Interscholastic & After-School",
      value: "hs"
    }, {
      label: "Marathon & Endurance",
      value: "marathon"
    }, {
      label: "Miscellaneous",
      value: "other"
    }],
    onChange: changeHandler("industry")
  }))));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: AwardCardSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardCardSave", function() { return AwardCardSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popup/src/popup.js */ "../popup/src/popup.js");
/* harmony import */ var _img_dismiss_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/dismiss.svg */ "../img/dismiss.svg");
/* harmony import */ var _recipients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipients */ "./src/recipients.js");







class AwardCardSave extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: ["ncs4-award-card", _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_4__["Popup"].classType, blockProps.className].join(' ')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "ncs4-award-card__name"
    }, attributes.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "ncs4-award-card__description",
      tagName: "p",
      value: attributes.normalizedDesc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
      attributes: attributes,
      backend: this.props.backend
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-award-card__popup-header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", {
      className: "ncs4-award-card__popup-name"
    }, attributes.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "#!",
      className: "ncs4-award-card__popup-dismiss-link",
      title: "Dismiss"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_img_dismiss_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], {
      className: "ncs4-award-card__popup-dismiss",
      viewBox: "0 52.67 43 43"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-award-card__popup-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "ncs4-award-card__popup-description",
      tagName: "p",
      value: attributes.desc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_recipients__WEBPACK_IMPORTED_MODULE_6__["RecipientsSave"], attributes))));
  }

}

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: sortedInsert, compareYearThenNames, compareIsEmptyRecipient, compareStrings, compareYears, compareNames, transposeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedInsert", function() { return sortedInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareYearThenNames", function() { return compareYearThenNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareIsEmptyRecipient", function() { return compareIsEmptyRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareStrings", function() { return compareStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareYears", function() { return compareYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareNames", function() { return compareNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transposeName", function() { return transposeName; });
// inserts an element into a sorted array given a comparison function
// Returns a new, sorted array.
// compare(x, y) should return < 0 if x is "greater", > 0 if y is "greater",
// 0 if equal
function sortedInsert(arr, x, compare) {
  let out = [];
  let i = 0;
  let j = 0;
  let hasAdded = false;

  while (j < arr.length) {
    if (hasAdded || compare(arr[j], x) < 0) {
      out[i] = arr[j];
      j++;
    } else {
      hasAdded = true;
      out[i] = x;
    }

    i++;
  }

  if (!hasAdded) {
    // reached end of array
    out[out.length] = x;
  }

  return out;
}
function compareYearThenNames(x, y) {
  return combineCompares(compareIsEmptyRecipient, compareYears, compareNames)(x, y);
} // Applies each compare in order until a non-zero result is reached or all return 0

function combineCompares() {
  for (var _len = arguments.length, compares = new Array(_len), _key = 0; _key < _len; _key++) {
    compares[_key] = arguments[_key];
  }

  return (x, y) => {
    let result;

    for (let i = 0; i < compares.length; i++) {
      result = compares[i](x, y);

      if (result !== 0) {
        return result;
      }
    }

    return result;
  };
} // Used to put new, blank recipients in edit mode at the top of the list


function compareIsEmptyRecipient(x, y) {
  if (x.editMode && x.name == null && (!y.editMode || y.name != null)) {
    return -1;
  } else if ((!x.editMode || x.name != null) && y.editMode && y.name == null) {
    return 1;
  } else {
    return 0;
  }
}
function compareStrings(x, y) {
  if (x === y) {
    return 0;
  } else {
    return 2 * Number(x.toUpperCase() > y.toUpperCase()) - 1;
  }
}
function compareYears(x, y) {
  if (x.year === y.year) {
    return 0;
  } else {
    return y.year - x.year;
  }
}
function compareNames(x, y) {
  if (!x.name || !y.name || x.name === "" || y.name === "" || x.name === y.name) {
    return 0;
  }

  let xName = transposeName(x.name);
  let yName = transposeName(y.name);
  return 2 * Number(xName.toUpperCase() > yName.toUpperCase()) - 1;
}
function transposeName(name) {
  let lastIndex = name.search(/[\S]+$/);
  let last = name.slice(lastIndex);
  let rest = "";

  if (lastIndex > 0) {
    rest = name.slice(0, lastIndex - 1);
  }

  return last + ", " + rest;
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map