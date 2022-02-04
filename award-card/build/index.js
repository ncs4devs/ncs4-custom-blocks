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
    xmlns: "http://www.w3.org/2000/svg",
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

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MyA5NS4xNyI+DQogIDxkZWZzPg0KICAgIDxzdHlsZT4NCiAgICAgIC5jbHMtMiwgLmNscy00IHsNCiAgICAgICAgZmlsbDogbm9uZTsNCiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7DQogICAgICB9DQogICAgICAuY2xzLTIsIC5jbHMtMywgLmNscy00IHsNCiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjEuNSw0Mi41YTIxLDIxLDAsMSwxLDIxLTIxLDIxLDIxLDAsMCwxLTIxLDIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUyLjY3KSIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxMC45MSIgeTE9Ijg0Ljc2IiB4Mj0iMzIuMDkiIHkyPSI2My41NyIvPg0KICA8bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxMC45MSIgeTE9IjYzLjU3IiB4Mj0iMzIuMDkiIHkyPSI4NC43NiIvPg0KICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMS41LTEwLjE3YTIxLDIxLDAsMCwxLTIxLTIxLDIxLDIxLDAsMCwxLDIxLTIxLDIxLDIxLDAsMCwxLDIxLDIxLDIxLDIxLDAsMCwxLTIxLDIxbTAtNDBhMTksMTksMCwwLDAtMTksMTksMTksMTksMCwwLDAsMTksMTksMTksMTksMCwwLDAsMTktMTlBMTksMTksMCwwLDAsMjEuNS01MC4xN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNTIuNjcpIi8+DQogIDxsaW5lIGNsYXNzPSJjbHMtNCIgeDE9IjEwLjkxIiB5MT0iMzIuMDkiIHgyPSIzMi4wOSIgeTI9IjEwLjkxIi8+DQogIDxsaW5lIGNsYXNzPSJjbHMtNCIgeDE9IjEwLjkxIiB5MT0iMTAuOTEiIHgyPSIzMi4wOSIgeTI9IjMyLjA5Ii8+DQo8L3N2Zz4NCg==");


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
      type: 'array',
      default: []
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
/*! exports provided: Create, Delete, Edit, SetUseOrgs, AddOrganization, Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUseOrgs", function() { return SetUseOrgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrganization", function() { return AddOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
const Create = "CREATE";
const Delete = "DELETE";
const Edit = "EDIT";
const SetUseOrgs = "SET_ORGS";
const AddOrganization = "ADD_ORG";
const Sort = "SORT";

/***/ }),

/***/ "./src/recipientActions.js":
/*!*********************************!*\
  !*** ./src/recipientActions.js ***!
  \*********************************/
/*! exports provided: createRecipient, deleteRecipient, editRecipient, setUseOrgs, addOrganization, sortRecipients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecipient", function() { return createRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRecipient", function() { return deleteRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRecipient", function() { return editRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseOrgs", function() { return setUseOrgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrganization", function() { return addOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRecipients", function() { return sortRecipients; });
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");

function createRecipient(data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Create"],
    data
  };
}
function deleteRecipient(id) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Delete"],
    id
  };
}
function editRecipient(data) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["Edit"],
    data
  };
}
function setUseOrgs(useOrgs) {
  return {
    type: _recipientActionTypes__WEBPACK_IMPORTED_MODULE_0__["SetUseOrgs"],
    useOrgs
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

/***/ }),

/***/ "./src/recipientReducers.js":
/*!**********************************!*\
  !*** ./src/recipientReducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ "./src/sort.js");


 // action.data includes id

const recipients = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;
  let useOrgs = arguments.length > 2 ? arguments[2] : undefined;
  let currentYear = state[0] ? state[0].year : null;

  let newState = (() => {
    switch (action.type) {
      case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Create"]:
        return [...state, action.data];

      case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Delete"]:
        return state.filter(x => x.id !== action.id);

      case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"]:
        return [...state.filter(x => x.id !== action.data.id), action.data];

      case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Sort"]:
        return state;

      default:
        //console.warn("recipients: Unrecognized action type '" + action.type + "'");
        return state;
    }
  })();

  return newState.sort(Object(_sort__WEBPACK_IMPORTED_MODULE_2__["getRecipientsCompare"])(currentYear, useOrgs));
};
/* Original

const recipients = (state = [], action, useOrgs) => {
  let currentYear = state[0] ? state[0].year: null;
  switch (action.type) {
    case actionTypes.Create:
      return sortedInsert(
        state,
        action.data,
        getRecipientsCompare(currentYear, useOrgs),
      );

    case actionTypes.Delete:
      return state
        .sort(getRecipientsCompare(currentYear, useOrgs))
        .filter( (x) => x.id !== action.id );

    case actionTypes.Edit:
      return sortedInsert(
        state.filter( (x) => x.id !== action.data.id ),
        action.data,
        getRecipientsCompare(currentYear, useOrgs),
      );

    case actionTypes.Sort:
      return state.sort(getRecipientsCompare(currentYear, useOrgs));

    default:
      //console.warn("recipients: Unrecognized action type '" + action.type + "'");
      return state;
  }
}
*/


const ids = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Create"]:
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

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Delete"]:
      return state.filter(x => x !== action.id);

    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"]:
      // just check the id exists
      if (!state.includes(action.data.id)) {
        console.error(_recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["Edit"] + ": id '" + action.data.id + "' not found");
      }

      return state;

    default:
      //console.warn("ids: Unrecognized action type '" + action.type + "'");
      return state;
  }
};

const useOrgs = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["SetUseOrgs"]:
      return action.useOrgs;

    default:
      //console.warn("useOrgs: Unrecognized action type '" + action.type + "'");
      return state;
  }
};

const organizations = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _recipientActionTypes__WEBPACK_IMPORTED_MODULE_1__["AddOrganization"]:
      if (!state.includes(action.organization)) {
        return [...state, action.organization];
      } else {
        return state;
      }

    default:
      //console.warn("organizations: Unrecognized action type '" + action.type + "'");
      return state;
  }
}; // Higher-order reducers


/* harmony default export */ __webpack_exports__["default"] = (combineReducersWithData({
  recipients: {
    reducer: recipients,
    stateReducer: state => state.useOrgs
  },
  ids,
  useOrgs,
  organizations
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
/*! exports provided: getRecipients, getState, getUsedIds, getUseOrgs, getOrganizations, hasId, createRecipientData, getNextId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipients", function() { return getRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsedIds", function() { return getUsedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseOrgs", function() { return getUseOrgs; });
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recipientSelectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipientSelectors */ "./src/recipientSelectors.js");
/* harmony import */ var _recipientActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipientActions */ "./src/recipientActions.js");
/* harmony import */ var _recipientActionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipientActionTypes */ "./src/recipientActionTypes.js");
/* harmony import */ var _recipientReducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipientReducers */ "./src/recipientReducers.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort */ "./src/sort.js");











const recipientStoreName = "ncs4/recipient-store";
const store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["createReduxStore"])(recipientStoreName, {
  selectors: _recipientSelectors__WEBPACK_IMPORTED_MODULE_6__,
  actions: _recipientActions__WEBPACK_IMPORTED_MODULE_7__,
  reducer: _recipientReducers__WEBPACK_IMPORTED_MODULE_9__["default"]
});
const defaultOrg = "Unaffiliated"; // create a default recipient and set it to editMode

function addRecipient(registry) {
  let {
    createRecipient
  } = registry.dispatch(recipientStoreName);
  createRecipient({
    year: new Date().getFullYear(),
    id: registry.select(recipientStoreName).getNextId(),
    editMode: true,
    cancelDisabled: true
  });
}
function initializeStore(registry, recipients, useOrgs) {
  let {
    createRecipient,
    setUseOrgs,
    addOrganization
  } = registry.dispatch(recipientStoreName);
  let organizations = registry.select(recipientStoreName).getOrganizations();
  setUseOrgs(useOrgs);
  recipients.forEach(r => {
    createRecipient({ ...r,
      id: registry.select(recipientStoreName).getNextId()
    });

    if (r.organization && !organizations.includes(r.organization)) {
      addOrganization(r.organization);
    }
  });
} // returns all data necessary to save recipients to DB

function getRecipientData(registry) {
  let recipients = registry.select(recipientStoreName).getRecipients();
  let fields = ["name", "position", "organization", "year"];
  var displayPrevious = false;
  var currentYear;
  return {
    recipients: recipients.reduce((arr, r) => {
      if (isRecipientValid(r)) {
        let data = {};

        if (isNaN(currentYear)) {
          currentYear = r.year;
        } else if (r.year < currentYear) {
          displayPrevious = true;
        }

        for (let attr of fields) {
          data[attr] = r[attr];
        }

        arr.push(data);
      }

      return arr;
    }, []),
    displayPrevious
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
} // Components


function divideRecipients(recipients, useOrgs, currentYear) {
  let currentRecipients = [];
  let previousRecipients = {};

  for (let i = 0; i < recipients.length; i++) {
    if (recipients[i].year === currentYear) {
      // current recipient
      currentRecipients.push(i);
    } else {
      // previous recipient
      let org = recipients[i].organization || defaultOrg;

      if (!previousRecipients[org]) {
        previousRecipients[org] = [];
      }

      previousRecipients[org].push(i);
    }
  }

  let previousRecipientsArray = [];

  for (let organization in previousRecipients) {
    previousRecipientsArray.push({
      organization,
      indices: previousRecipients[organization]
    });
  }

  return {
    currentRecipients,
    previousRecipients: previousRecipientsArray.sort(_sort__WEBPACK_IMPORTED_MODULE_10__["compareOrganizations"])
  };
} // wrapper component to connect recipientStore to component props


function Recipients(props) {
  const {
    createRecipient,
    deleteRecipient,
    editRecipient
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(recipientStoreName);

  let onChange = d => editRecipient(d);

  let rs = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
    let recipients = select(recipientStoreName).getRecipients();

    if (!recipients || !recipients[0]) {
      return null;
    }

    let useOrgs = select(recipientStoreName).getUseOrgs();
    let currentYear = recipients[0].year;
    let {
      currentRecipients,
      previousRecipients
    } = divideRecipients(recipients, useOrgs, currentYear);
    let hasPreviousRecipients = previousRecipients.length > 0; // create section components

    let commonProps = {
      recipients,
      onChange,
      currentYear,
      displayYear: !hasPreviousRecipients,
      useOrgs,
      awardId: props.awardId,
      backend: true
    };
    let CurrentRecipientsSection = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, commonProps, {
      indices: currentRecipients
    }));
    let PreviousRecipientsSections;

    if (!hasPreviousRecipients) {
      PreviousRecipientsSections = null;
    } else {
      PreviousRecipientsSections = previousRecipients.map((section, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, commonProps, {
        indices: section.indices,
        key: section.organization,
        displayPreviousRecipientsHeader: i === 0
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, CurrentRecipientsSection, PreviousRecipientsSections);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, rs);
}
function RecipientsSave(props) {
  let {
    currentRecipients,
    previousRecipients
  } = divideRecipients(props.recipients, props.useOrgs, props.recipients[0].year);
  let hasPreviousRecipients = previousRecipients.length > 0;
  let commonProps = {
    recipients: props.recipients,
    currentYear: props.recipients[0].year,
    displayYear: !hasPreviousRecipients,
    useOrgs: props.useOrgs,
    backend: false
  };
  let CurrentRecipientsSection = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, commonProps, {
    indices: currentRecipients
  }));
  let PreviousRecipientsSections;

  if (!hasPreviousRecipients) {
    PreviousRecipientsSections = null;
  } else {
    PreviousRecipientsSections = previousRecipients.map((section, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientsSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, commonProps, {
      indices: section.indices,
      key: section.organization,
      displayPreviousRecipientsHeader: i === 0
    })));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, CurrentRecipientsSection, PreviousRecipientsSections);
}

function RecipientsSection(props) {
  let header; // current recipients, previous recipients

  let orgHeader; // organization abbreviation

  let commonProps = {
    useOrgs: props.useOrgs,
    currentYear: props.currentYear,
    awardId: props.awardId,
    backend: props.backend
  };
  let rs = props.recipients.reduce((arr, r, index) => {
    if (props.indices.includes(index)) {
      arr.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, props.backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Recipient, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, r, commonProps, {
        key: r.id,
        actions: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(recipientStoreName),
        onChange: props.onChange,
        displayYear: props.displayYear || r.year !== props.currentYear
      })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientSave, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, r, commonProps, {
        key: r.id,
        displayYear: props.displayYear || r.year !== props.currentYear
      }))));
    }

    return arr;
  }, []); // set headers

  if (props.recipients[0].year === props.currentYear && props.recipients[props.recipients.length - 1].year !== props.currentYear) {
    // Divide into current and previous recipients
    if (props.recipients[props.indices[0]].year === props.currentYear) {
      // current recipients section
      header = props.currentYear + " Recipient";
    } else if (props.useOrgs) {
      orgHeader = props.recipients[props.indices[0]].organization || defaultOrg;
    }

    if (props.displayPreviousRecipientsHeader) {
      header = "Previous Recipient";
    }
  }

  if (header && props.indices[props.indices.length - 1] - props.indices[0]) {
    header = header + "s"; // make plural
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, header && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "ncs4-award-card__recipient-section-header"
  }, header), orgHeader && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "ncs4-award-card__recipient-section-org-header"
  }, orgHeader), rs);
}

function Recipient(props) {
  let [isEditing, setEditing] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Boolean(props.editMode));
  let {
    createRecipient,
    deleteRecipient,
    editRecipient
  } = props.actions;
  let orgs = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => select(recipientStoreName).getOrganizations());
  let {
    addOrganization
  } = props.actions;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isEditing ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientEditer, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    delete: () => deleteRecipient(props.id),
    cancel: () => setEditing(false),
    save: info => {
      setEditing(false);

      if (info.organization && !orgs.includes(info.organization)) {
        addOrganization(info.organization);
      }

      props.onChange(info);
    }
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RecipientSave, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    setEditing: setEditing
  })));
}

function RecipientSave(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "ncs4-award-recipient"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__name"
  }, props.name), props.position && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__position"
  }, props.position)), props.displayYear && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "ncs4-award-recipient__year"
  }, props.year)), props.useOrgs && props.organization && !props.displayYear && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, " (", props.organization, ")"), props.backend && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "dashicons dashicons-edit ncs4-award-recipient__edit",
    onClick: () => props.setEditing(true)
  }));
}

function RecipientEditer(props) {
  let [dataState, setDataState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    id: props.id,
    // keep constant
    name: props.name,
    position: props.position,
    organization: props.organization,
    year: props.year
  });
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

  let organizations = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => select(recipientStoreName).getOrganizations());
  const deleteClass = "dashicons dashicons-trash ncs4-award-recipient__edit-delete";
  const cancelClass = "dashicons dashicons-no ncs4-award-recipient__edit-cancel";
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
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    value: dataState.name,
    label: "Recipient name",
    placeholder: "John Deer",
    onChange: changeHandler("name")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    value: dataState.position,
    label: "Recipient position",
    placeholder: "Super-executive-vice-president of business operations",
    onChange: changeHandler("position")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "text",
    list: "organizations_" + props.awardId + "_" + props.id,
    value: dataState.organization,
    label: "Recipient organization",
    placeholder: "NCS\u2074",
    onChange: e => {
      changeHandler("organization")(e.target.value);
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("datalist", {
    id: "organizations_" + props.awardId + "_" + props.id
  }, organizations.map(org => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: org,
    key: org
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "ncs4-award-recipient__year-label",
    for: ""
  }, "Award Year"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    value: dataState.year,
    onChange: e => changeHandler("year")(e.target.value)
  }));
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
/*! exports provided: sortedInsert, getRecipientsCompare, compareIsEmptyRecipient, compareOrganizations, compareYears, compareNames, transposeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedInsert", function() { return sortedInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipientsCompare", function() { return getRecipientsCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareIsEmptyRecipient", function() { return compareIsEmptyRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareOrganizations", function() { return compareOrganizations; });
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
function getRecipientsCompare(currentYear, useOrgs) {
  return combineCompares(compareIsEmptyRecipient, getCurrentRecipientsCompare(currentYear, useOrgs), getPreviousRecipientsCompare(currentYear, useOrgs));
}

function getCurrentRecipientsCompare(currentYear, useOrgs) {
  return (x, y) => {
    if (useOrgs && (x.year !== currentYear || y.year !== currentYear)) {
      return 0; // pass sorting on to getPreviousRecipientsCompare()
    } // sorting when not using orgs & for "current recipients" always


    return combineCompares(compareYears, compareNames)(x, y);
  };
}

function getPreviousRecipientsCompare(currentYear, useOrgs) {
  if (!useOrgs) {
    return () => 0; // fall through
  }

  return combineCompares((x, y) => {
    if (x.year === currentYear) {
      return -1;
    } else if (y.year === currentYear) {
      return 1;
    }

    return 0;
  }, compareOrganizations, compareYears, compareNames);
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
function compareOrganizations(x, y) {
  if (x.organization && !y.organization) {
    return -1;
  } else if (!x.organization && y.organization) {
    return 1;
  } else if (!x.organization && !y.organization || x.organization === y.organization) {
    return 0;
  } else {
    return 2 * Number(x.organization.toUpperCase() > y.organization.toUpperCase()) - 1;
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