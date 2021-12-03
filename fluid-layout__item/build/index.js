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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);






/* Option variables */

/*
  To add: Just add a new entry [value, label] to the array

  **** The first entry will be the default value. *****

  If you make a new option variable, add it to the "Add option functions"
  argument array (in no particular order)
*/

var unitOptions = [['%', '%'], ['vw', 'vw'], ['ch', 'ch'], ['em', 'em'], ['rem', 'rem']]; // These are RadioControls. If one gets a lot of options, make it a
// SelectControl instead (and move the options above this comment).

var floatOptions = [['none', 'Disabled'], ['left', 'Left'], ['right', 'Right']]; // Add option functions

[unitOptions, floatOptions].forEach(arr => {
  arr.values = () => arr.map(x => x[0]);

  arr.labels = () => arr.map(x => x[1]);

  arr.default = () => arr[0][0];
}); // Returns an array of objects suitable for SelectControl's options prop

function createOptions(ops) {
  var options = [];
  ops.forEach(op => {
    options.push({
      value: op[0],
      label: op[1]
    });
  });
  return options;
}

function colorSettingsEdit(bgColor, textColor) {
  var colorSettings = {
    bgColor: {
      class: '',
      color: ''
    },
    textColor: {
      class: '',
      color: ''
    }
  };

  if (bgColor != undefined) {
    colorSettings.bgColor = bgColor.class != undefined ? {
      class: bgColor.class
    } : {
      color: bgColor.color
    };
  }

  if (textColor != undefined) {
    colorSettings.textColor = textColor.class != undefined ? {
      class: textColor.class
    } : {
      color: textColor.color
    };
  }

  return colorSettings;
}

function colorSettingsSave(bgColor, customBgColor, textColor, customTextColor) {
  var colorSettings = {
    bgColor: {
      class: '',
      color: ''
    },
    textColor: {
      class: '',
      color: ''
    }
  };
  colorSettings.bgColor = bgColor != undefined ? {
    class: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', bgColor)
  } : {
    color: customBgColor
  };
  colorSettings.textColor = textColor != undefined ? {
    class: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor)
  } : {
    color: customTextColor
  };
  return colorSettings;
}
/*
  You can pass an array (or string) of classes to useBlockProps[.save](), but
  this makes them appear in the "additional CSS" field and causes undefined
  behavior to *all* blocks if the user deletes them.
  So instead, the custom classes are added to blockProps.className and manually
  set via className: createClassName().
*/


const createClassName = (colorSettings, useMaxWidth, classes) => ['ncs4-fluid-layout-item', colorSettings.bgColor.class, colorSettings.textColor.class, useMaxWidth ? "has-max-width" : null].join(' ') + ' ' + classes;

const BlockWithColorSettings = props => {
  const {
    bgColor,
    textColor,
    attributes: {
      alignment,
      padding,
      margin,
      minWidth,
      minWidthUnit,
      maxWidth,
      useMaxWidth,
      maxWidthUnit,
      optionFloat
    },
    setAttributes,
    clientId
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])(); // Get parent's attributes

  const parentArr = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])("core/block-editor").getBlockParents(clientId);
  const parent = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])("core/block-editor").getBlocksByClientId(parentArr[parentArr.length - 1])[0];
  const optionLayout = parent.attributes.optionLayout;
  /* Check for color classes */

  const colorSettings = colorSettingsEdit(bgColor, textColor); // Create sidebar panel for layout-specific settings (null if panel is empty)

  function createLayoutSettings() {
    var content = [];

    if (optionLayout === 'floated-image') {
      content.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RadioControl"], {
        label: "Float",
        selected: optionFloat,
        onChange: v => {
          setAttributes({
            optionFloat: v
          });
        },
        options: createOptions(floatOptions)
      }));
    }

    if (content.length > 0) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: "Layout Settings",
        initialOpen: true
      }, content.map(e => e));
    }
  }

  function createMarks(min, max, step) {
    var output = [];

    while (min <= max) {
      output.push({
        value: min,
        label: String(min)
      });
      min += step;
    }

    return output;
  }

  const paddingMax = 5;
  const paddingStep = 0.5;
  const maxWidthRange = {
    '%': {
      'min': 0,
      'max': 100,
      'step': 1,
      'marks': createMarks(0, 100, 10)
    },
    'vw': {
      'min': 0,
      'max': 100,
      'step': 1,
      'marks': createMarks(0, 100, 10)
    },
    'ch': {
      'min': 10,
      'max': 50,
      'step': 5,
      'marks': createMarks(10, 50, 5)
    },
    'em': {
      'min': 0,
      'max': 100,
      'step': 1,
      'marks': createMarks(0, 100, 10)
    },
    'rem': {
      'min': 10,
      'max': 100,
      'step': 1,
      'marks': createMarks(10, 100, 10)
    }
  };
  const minWidthRange = maxWidthRange;

  function setPadding(i) {
    return v => {
      var p = [...padding];
      p[i] = v;
      setAttributes({
        padding: p
      });
    };
  }

  function setMargin(i) {
    return v => {
      var m = [...margin];
      m[i] = v;
      setAttributes({
        margin: m
      });
    };
  }

  const clampWidth = (attr, range) => unit => {
    if (attr < range[unit].min) {
      setAttributes({
        [attr]: range[unit].min
      });
    } else if (attr > range[unit].max) {
      setAttributes({
        [attr]: range[unit].max
      });
    }
  };

  const clampMaxWidth = clampWidth(maxWidth, maxWidthRange);
  const clampMinWidth = clampWidth(minWidth, minWidthRange);

  function setWidthUnit() {
    return v => {
      clampMaxWidth(v);
      setAttributes({
        maxWidthUnity: v
      });
    };
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, createLayoutSettings(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: "Dimensions",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: "Use max width",
    checked: useMaxWidth,
    help: useMaxWidth ? "Content has a max width" : "Content does not have a max width",
    onChange: b => {
      setAttributes({
        useMaxWidth: b
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: "Units",
    value: maxWidthUnit,
    onChange: v => {
      clampMaxWidth(v);
      setAttributes({
        maxWidthUnit: v
      });
    },
    options: createOptions(unitOptions),
    disabled: !useMaxWidth
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Max width",
    value: maxWidth,
    onChange: v => {
      setAttributes({
        maxWidth: v
      });
    },
    min: maxWidthRange[maxWidthUnit].min,
    max: maxWidthRange[maxWidthUnit].max,
    step: maxWidthRange[maxWidthUnit].step,
    marks: maxWidthRange[maxWidthUnit].marks,
    disabled: !useMaxWidth,
    renderTooltipContent: x => x + minWidthUnit
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: "Units",
    value: minWidthUnit,
    onChange: v => {
      clampMinWidth(v);
      setAttributes({
        minWidthUnit: v
      });
    },
    options: createOptions(unitOptions)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Min width",
    value: minWidth,
    onChange: v => {
      setAttributes({
        minWidth: v
      });
    },
    min: minWidthRange[minWidthUnit].min,
    max: minWidthRange[minWidthUnit].max,
    step: minWidthRange[minWidthUnit].step,
    marks: minWidthRange[minWidthUnit].marks,
    renderTooltipContent: x => x + minWidthUnit
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: "Spacings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Padding Top (rem)",
    value: padding[0],
    onChange: setPadding(0),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Padding Right (rem)",
    value: padding[1],
    onChange: setPadding(1),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Padding Bottom (rem)",
    value: padding[2],
    onChange: setPadding(2),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Padding Left (rem)",
    value: padding[3],
    onChange: setPadding(3),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Margin Top (rem)",
    value: margin[0],
    onChange: setMargin(0),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Margin Right (rem)",
    value: margin[1],
    onChange: setMargin(1),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Margin Bottom (rem)",
    value: margin[2],
    onChange: setMargin(2),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: "Margin Left (rem)",
    value: margin[3],
    onChange: setMargin(3),
    min: 0,
    max: paddingMax,
    step: paddingStep,
    marks: true
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
    value: alignment,
    onChange: a => setAttributes({
      alignment: a === undefined ? 'none' : a
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    className: createClassName(colorSettings, useMaxWidth, blockProps.className),
    style: {
      ['--min-width']: minWidth + minWidthUnit,
      ['--max-width']: useMaxWidth ? maxWidth + maxWidthUnit : null,
      backgroundColor: colorSettings.bgColor.color,
      color: colorSettings.textColor.color,
      textAlign: alignment != "none" ? alignment : null,
      padding: padding.join("rem ") + "rem",
      margin: margin.join("rem ") + "rem",
      float: optionFloat
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], null)));
};
/* BlockWithColorSettings */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/fluid-layout-item', {
  apiVersion: 2,
  title: 'Fluid Layout Item',
  parent: ['ncs4-custom-blocks/fluid-layout'],
  icon: 'grid-view',
  category: 'layout',
  supports: {
    color: {
      gradients: true
    }
  },
  attributes: {
    bgColor: {
      type: 'string'
    },
    customBgColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    alignment: {
      type: 'string',
      default: 'none'
    },
    padding: {
      type: 'array',
      default: [0, 0, 0, 0]
    },
    margin: {
      type: 'array',
      default: [0, 0, 0, 0]
    },
    minWidth: {
      type: 'number',
      default: 0
    },
    minWidthUnit: {
      enum: unitOptions.values(),
      default: unitOptions.default()
    },
    useMaxWidth: {
      type: 'boolean',
      default: false
    },
    maxWidth: {
      type: 'number',
      default: 0
    },
    maxWidthUnit: {
      enum: unitOptions.values(),
      default: unitOptions.default()
    },
    optionFloat: {
      enum: floatOptions.values(),
      default: floatOptions.default()
    }
  },
  edit: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"])({
    bgColor: 'background-color',
    textColor: 'color'
  })(BlockWithColorSettings),
  save: ({
    attributes
  }) => {
    const {
      bgColor,
      customBgColor,
      textColor,
      customTextColor,
      alignment,
      padding,
      margin,
      minWidth,
      minWidthUnit,
      maxWidth,
      useMaxWidth,
      maxWidthUnit,
      optionFloat
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
    const colorSettings = colorSettingsSave(bgColor, customBgColor, textColor, customTextColor);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: createClassName(colorSettings, useMaxWidth, blockProps.className),
      style: {
        ['--min-width']: minWidth + minWidthUnit,
        ['--max-width']: useMaxWidth ? maxWidth + maxWidthUnit : null,
        backgroundColor: colorSettings.bgColor.color,
        color: colorSettings.textColor.color,
        textAlign: alignment != "none" ? alignment : null,
        padding: padding.join("rem ") + "rem",
        margin: margin.join("rem ") + "rem",
        float: optionFloat
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
});

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map