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

/***/ "../js/ImageControl.js":
/*!*****************************!*\
  !*** ../js/ImageControl.js ***!
  \*****************************/
/*! exports provided: Svg, ImageEdit, ImageSave, onImageChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEdit", function() { return ImageEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSave", function() { return ImageSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImageChange", function() { return onImageChange; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);




 // Be careful that you only use trusted SVGs as they are not secure!

function Svg(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: props.svg
    }
  });
} // Image object format:

/*
img: {
  mine = "image/svg+xml",
  url = "..."
  data = {svg data}
  ...
}
Basically, it's WP's image object + svg data (if applicable)
stored in a "data" attribute
*/

const imageStyle = props => ({
  marginLeft: props.align == "left" ? 0 : "auto",
  marginRight: props.align == "right" ? 0 : "auto"
}); // Edit-side image display


function ImageEdit(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
    onSelect: props.onChange,
    value: props.img ? props.img.id : null,
    allowedTypes: ['image'],
    render: ({
      open
    }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: props.img ? 'editor-post-featured-image__preview' : 'editor-post-featured-image__toggle',
      onClick: open
    }, props.img ? props.img.mime === "image/svg+xml" && props.img.data ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Svg, {
      svg: props.img.data,
      style: imageStyle(props)
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: props.img.url,
      style: imageStyle(props)
    }) : "Choose an image")
  }));
} // Front-end image display

function ImageSave(props) {
  let isSvg = props.img && props.img.mime === "image/svg+xml" && props.img.data;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, isSvg ? {
    dangerouslySetInnerHTML: {
      __html: props.img.data,
      style: imageStyle(props)
    }
  } : {}), props.img && !isSvg ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    src: props.img.url,
    style: imageStyle(props)
  }) : null);
} // Generic image change handler

function onImageChange(img, callback, embedSvg = true) {
  if (embedSvg && img.mime === "image/svg+xml") {
    fetch(img.url).then(res => res.text()).then(text => {
      img.data = text;
      callback(img);
    });
  } else {
    callback(img);
  }
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

/***/ "../js/utils.js":
/*!**********************!*\
  !*** ../js/utils.js ***!
  \**********************/
/*! exports provided: normalizeStringLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeStringLength", function() { return normalizeStringLength; });
function normalizeStringLength(str, n, useNbsp = true, addEllipses = true) {
  let richText = parseRichText(str);

  if (richText.length === n) {
    return richText.toString(); // no shortening or lengthening needed
  }

  let outStr;

  if (richText.length <= n) {
    let spaces = addEllipses ? n - 3 - richText.length : n - richText.length;
    outStr = richText.toString();
    outStr += useNbsp ? " " + "&nbsp;".repeat(spaces - 1) : " ".repeat(spaces);
  } else {
    richText = richText.slice(0, addEllipses ? n - 3 : n);
    outStr = richText.toString();
    outStr += addEllipses ? "..." : "";
  }

  return outStr;
}
/*
  Takes a rich text string and returns an object of the form
  {
    length: <int>,
    tag: <html element name>, // e.g. "em", "strong"
    hasEndTag: <false | true>,
    text: [string | rich text object],
    slice: (min, max) => <rich text object>,
    toString: () => <string>,
  }
*/

function parseRichText(str, rootTag = null) {
  // tag: charValue,
  const voidTags = {
    br: 30,
    hr: 30
  };

  const traverse = (root, visit) => {
    root.text.forEach((leaf, index) => typeof leaf === "object" ? leaf.tag && !leaf.hasEndTag ? visit(leaf, root, index) // "visit" void tags
    : traverse(leaf, visit) : visit(leaf, root, index));
  };

  const prototype = {
    slice(min, max) {
      if (min < 0) {
        slice(this.length + min);
      }

      if (max < 0) {
        slice(this.length + max);
      }

      max = max == null ? this.length : max;
      let out = Object.assign(Object.create(prototype), this);
      out.text = [];
      let i = 0;

      const addLeaf = (leaf, root) => {
        let isVoidTag = typeof leaf === "object" && leaf.tag && !leaf.hasEndTag; // leaf is a rich text object

        if (isVoidTag) {
          if (i < min || i + leaf.length > max) {
            // skip tag
            i += leaf.length;
          } else {
            // add tag
            i += leaf.length;
            out.text.push(leaf);
            out.length += leaf.length;
          }

          return; // leaf is a string
        } else {
          let value = Object.assign(Object.create(prototype), root);
          let text = "";
          let chars = 0;

          if (leaf.length === 0) {
            return; // empty string
          }

          if (i < min) {
            // skip characters until i == min
            if (i + leaf.length >= min) {
              let skip = min - i;
              i += skip;
              chars = Math.min(leaf.length, max - min);
              text = leaf.slice(skip, skip + chars);
            } else {
              // leaf doesn't reach up to the min index
              i += leaf.length;
            }
          } else if (i < max) {
            // min <= i < max
            chars = Math.min(leaf.length, max - i);
            text = leaf.slice(0, chars);
            i += chars;
          }

          if (text !== "") {
            value.text = [text];
            value.length = chars;
            out.text.push(value);
            out.length = Math.max(0, i - min);
          }
        }
      };

      traverse(this, addLeaf);
      return out;
    },

    toString() {
      let out = "";

      const addLeaf = (leaf, root, index) => {
        if (typeof leaf === "object" && leaf.tag && !leaf.hasEndTag) {
          // void tag
          out += "<" + leaf.tag + ">";
          return;
        }

        if (root.tag && index === 0) {
          out += "<" + root.tag + ">";
        }

        out += leaf;

        if (root.tag && root.hasEndTag && index === root.text.length - 1) {
          out += "</" + root.tag + ">";
        }
      };

      traverse(this, addLeaf);
      return out;
    }

  };
  let out = Object.create(prototype);
  out = Object.assign(out, {
    length: 0,
    tag: rootTag,
    hasEndTag: false,
    text: []
  }); // tokenize string

  let tokens = [];
  let workingStr = str;
  let a = workingStr.search("<");
  let b = workingStr.search(">");

  while (a !== -1 && b !== -1) {
    let token = workingStr.slice(0, a);

    if (token !== "") {
      // there is a string token
      tokens.push(token);
    } // handle html token


    tokens.push(workingStr.slice(a, b + 1));
    workingStr = workingStr.slice(b + 1);
    a = workingStr.search("<");
    b = workingStr.search(">");
  } // handle the rest of the string


  if (workingStr !== "") {
    tokens.push(workingStr);
  }

  const reduceTokens = (textObj, token, index, arr) => {
    const next = (acc, index) => () => reduceTokens(Object.assign(Object.create(prototype), acc), arr[index + 1], index + 1, arr);

    const recur = (arr, init) => dynamicReduce(arr, reduceTokens, init);

    if (textObj.hasEndTag || index >= arr.length) {
      return textObj;
    }

    if (/^<\/.*>$/.test(token)) {
      // HTML end tag
      a = token.search("<") + 1;
      b = token.search(">");
      let tag = token.slice(a + 1, b);

      if (tag === textObj.tag) {
        // exit reduce
        textObj.hasEndTag = true;
        return textObj;
      }
    } else if (/^<.*>$/.test(token)) {
      // HTML start tag
      a = token.search("<");
      b = token.search(">");
      let htmlOut = Object.create(prototype);
      htmlOut = Object.assign(htmlOut, {
        length: 0,
        tag: token.slice(a + 1, b),
        hasEndTag: false,
        text: []
      });

      if (voidTags[htmlOut.tag]) {
        htmlOut.length = voidTags[htmlOut.tag];
      } else {
        htmlOut = recur(arr.slice(index + 1), htmlOut);
        index += 1 + htmlOut.text.length; // prevent going over the same entries twice
      }

      textObj.text.push(htmlOut);
      textObj.length += htmlOut.length;
    } else {
      // normal string
      textObj.text.push(token);
      textObj.length += token.length;
    }

    if (textObj.tag && index + 1 === arr.length && !textObj.hasEndTag) {
      console.error("EOL reached: Expected closing tag for <" + textObj.tag + ">");
    }

    return next(textObj, index);
  };

  out = dynamicReduce(tokens, reduceTokens, out);
  return out;
}

function dynamicReduce(arr, reduceFunc, init) {
  let value = reduceFunc(init, arr[0], 0, arr);

  while (typeof value === "function") {
    value = value();
  }

  return value;
}

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
      className: "ncs4-popup-button " + this.props.className,
      href: "#"
    }, attrs.buttonTitle) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "ncs4-popup-button " + this.props.className,
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

const popupReducer = (state = {
  ids: []
}, {
  id,
  type
}) => {
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

function reserveId(callback, id = -1) {
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

    if (i + 1 < state.ids.length && state.ids[i + 1] - 1 > id || i + 1 >= state.ids.length // end of array
    ) {
      return id + 1;
    }
  }

  return 0;
};

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: DescriptionPopupEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPopupEdit", function() { return DescriptionPopupEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/utils */ "../js/utils.js");
/* harmony import */ var _js_ImageControl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/ImageControl.js */ "../js/ImageControl.js");
/* harmony import */ var _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../popup/src/popup.js */ "../popup/src/popup.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save.js */ "./src/save.js");









const normalizedDescLength = 400; // Number of chars for the short description

class DescriptionPopupEdit extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);
    this.handleDescription = this.handleDescription.bind(this); // normalize description if length is wrong or it doesn't exist

    if (this.attributes.desc && (!this.attributes.normalizedDesc || this.attributes.normalizedDesc.length !== normalizedDescLength)) {
      this.handleDescription(this.attributes.desc);
    }

    this.state = { ...this.attributes
    };
  }

  componentDidMount() {
    Object(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["reserveId"])(x => this.setStateAttributes({
      id: x
    }), this.state.id);
    this.setStateAttributes({
      bgColor: {
        color: Object(_js_ColorSelector__WEBPACK_IMPORTED_MODULE_4__["verifyColor"])(this.state.bgColor),
        slug: this.state.bgColor.slug
      }
    });
    this.setStateAttributes({
      textColor: {
        color: Object(_js_ColorSelector__WEBPACK_IMPORTED_MODULE_4__["verifyColor"])(this.state.textColor),
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

  handleDescription(str) {
    str = str.trim();
    this.setStateAttributes({
      "desc": str
    });
    this.setAttributes({
      "normalizedDesc": Object(_js_utils__WEBPACK_IMPORTED_MODULE_5__["normalizeStringLength"])(str, normalizedDescLength)
    });
  }

  render() {
    let blockProps = this.props.blockProps;
    let ImageEditor = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_6__["ImageEdit"], {
      onChange: i => Object(_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_6__["onImageChange"])(i, this.setStateAttributes({
        img: i
      })),
      img: this.state.img
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_8__["DescriptionPopupSave"], {
      blockProps: blockProps,
      attributes: { ...this.attributes,
        ...this.state,
        normalizedDesc: this.state.desc
      },
      backend: true,
      imageEdit: ImageEditor,
      onDescChange: this.handleDescription,
      setAttributes: this.setAttributes
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "General info",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      value: this.state.name,
      label: "Title",
      placeholder: "Best Practices Guide",
      onChange: this.trimStateAttribute("name")
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
      label: "Use footer button",
      checked: this.state.showButton,
      help: this.state.showButton ? "Footer button visible" : "Footer button invisible",
      onChange: b => this.setStateAttributes({
        showButton: b
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: "Footer button text",
      value: this.state.buttonText,
      disabled: !this.state.showButton,
      onChange: this.trimStateAttribute("buttonText"),
      help: "The text displayed by the button"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: "Footer button link",
      value: this.state.buttonLink,
      disabled: !this.state.showButton,
      onChange: this.trimStateAttribute("buttonLink"),
      help: "The link for the button"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_7__["PopupSettings"], {
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save.js */ "./src/save.js");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/description-popup', {
  apiVersion: 2,
  title: 'Description Popup',
  icon: 'format-aside',
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
      default: 'Title'
    },
    desc: {
      type: 'string',
      default: "Lorem ipsum dolor sit amet"
    },
    normalizedDesc: {
      type: 'string'
    },
    img: {
      type: 'object'
    },
    showButton: {
      type: 'boolean',
      default: true
    },
    buttonText: {
      type: 'string',
      default: "More info"
    },
    buttonLink: {
      type: 'string',
      default: ""
    },
    buttonStyle: {
      type: 'string',
      default: "blue"
    }
  },
  edit: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_js__WEBPACK_IMPORTED_MODULE_4__["DescriptionPopupEdit"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])()
  })),
  save: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_5__["DescriptionPopupSave"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()
  }))
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: DescriptionPopupSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPopupSave", function() { return DescriptionPopupSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_ImageControl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/ImageControl.js */ "../js/ImageControl.js");
/* harmony import */ var _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../popup/src/popup.js */ "../popup/src/popup.js");
/* harmony import */ var _img_dismiss_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/dismiss.svg */ "../img/dismiss.svg");









class DescriptionPopupSave extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;
    let backend = this.props.backend === true;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: ["ncs4-description-popup", _popup_src_popup_js__WEBPACK_IMPORTED_MODULE_6__["Popup"].classType, blockProps.className].join(' ')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "ncs4-description-popup__name"
    }, attributes.name), backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "ncs4-description-popup__description",
      tagName: "p",
      value: attributes.desc,
      onChange: this.props.onDescChange,
      placeHolder: "Description"
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "ncs4-description-popup__description",
      tagName: "p",
      value: attributes.normalizedDesc
    }), !backend && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_popup_src_popup_js__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
      attributes: attributes,
      backend: this.props.backend
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-description-popup__popup-header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", {
      className: "ncs4-description-popup__popup-name"
    }, attributes.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "#!",
      className: "ncs4-description-popup__popup-dismiss-link",
      title: "Dismiss"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_img_dismiss_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {
      className: "ncs4-description-popup__popup-dismiss",
      viewBox: "0 52.67 43 43"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-description-popup__popup-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: "ncs4-description-popup__popup-description",
      tagName: "p",
      value: attributes.desc
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PopupFooter, {
      backend: backend,
      img: attributes.img,
      showButton: attributes.showButton,
      buttonLink: attributes.buttonLink,
      buttonStyle: attributes.buttonStyle,
      buttonText: attributes.buttonText
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PopupFooter, {
      backend: backend,
      imageEdit: this.props.imageEdit,
      img: attributes.img,
      showButton: attributes.showButton,
      buttonLink: attributes.buttonLink,
      buttonStyle: attributes.buttonStyle,
      buttonText: attributes.buttonText
    }));
  }

}

function PopupFooter(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ncs4-description-popup__footer"
  }, props.backend ? props.imageEdit : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_5__["ImageSave"], {
    className: "ncs4-description-popup__img",
    img: props.img,
    align: "left"
  }), props.showButton && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: props.buttonLink,
    className: "ncs4-button ncs4-button__" + props.buttonStyle
  }, props.buttonText));
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