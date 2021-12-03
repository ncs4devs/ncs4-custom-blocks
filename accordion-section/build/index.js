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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);








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
    class: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('background-color', bgColor)
  } : {
    color: customBgColor
  };
  colorSettings.textColor = textColor != undefined ? {
    class: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["getColorClassName"])('color', textColor)
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


const createClassName = (colorSettings, classes) => ['ncs4-accordion', colorSettings.bgColor.class, colorSettings.textColor.class].join(' ') + ' ' + classes;

const BlockWithColorSettings = props => {
  var {
    bgColor,
    textColor,
    attributes: {
      title,
      inheritedTitle,
      checkboxId,
      alignment
    },
    setAttributes,
    clientId
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"])();
  const colorSettings = colorSettingsEdit(bgColor, textColor); // Set checkbox id to ClientId

  if (checkboxId == undefined) {
    setAttributes({
      checkboxId: "ncs4-accordion-toggle_" + clientId
    });
  } // Attribute setters and title inheritance


  const onTitleChange = t => {
    setAttributes({
      title: t
    });
  }; // Passes title to children. Gets laggy with many children if put in onChange


  const onTitleChangeComplete = t => {
    onTitleChange(t); // Pass title to children

    var children = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
    children.forEach(child => {
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/block-editor').updateBlockAttributes(child.clientId, {
        inheritedTitle: t
      });
    });
  }; // Grab title from parents


  if (!title) {
    var parentArr = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlockParents(clientId);
    var parent; // Iterate up through parents until you find a section

    for (let i = parentArr.length - 1; i >= 0; i--) {
      if (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlocksByClientId(parentArr[i])[0].name.match(/^ncs4-custom-blocks\/[\w]+-section$/)) {
        parent = parentArr[i];
        break;
      }
    }

    const parentAtts = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlockAttributes(parent);

    if (parentAtts != null && typeof parentAtts === 'object' && typeof parentAtts.title === 'string') {
      if (parentAtts.title != null && parentAtts.title != "") {
        setAttributes({
          inheritedTitle: parentAtts.title
        });
      } else {
        setAttributes({
          inheritedTitle: parentAtts.inheritedTitle
        });
      }
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["AlignmentToolbar"], {
    value: alignment,
    onChange: a => setAttributes({
      alignment: a === undefined ? 'none' : a
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    className: createClassName(colorSettings, blockProps.className),
    style: {
      backgroundColor: colorSettings.bgColor.color,
      color: colorSettings.textColor.color,
      textAlign: alignment
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextControl"], {
    className: "ncs4-custom-blocks-accordion-section-title ncs4-custom-blocks-section-title",
    onChange: onTitleChange,
    onChangeComplete: onTitleChangeComplete,
    value: title,
    placeholder: "Section Title"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], null)));
};

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/accordion-section', {
  apiVersion: 2,
  title: 'Accordion Section',
  icon: 'editor-ul',
  category: 'layout',
  supports: {
    color: {
      gradients: true
    }
  },
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title'
    },
    inheritedTitle: {
      type: 'string'
    },
    checkboxId: {
      type: 'string'
    },
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
    }
  },
  edit: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["withColors"])({
    bgColor: 'background-color',
    textColor: 'color'
  })(BlockWithColorSettings),
  save: ({
    attributes
  }) => {
    const {
      title,
      inheritedTitle,
      checkboxId,
      bgColor,
      customBgColor,
      textColor,
      customTextColor,
      alignment
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"].save();
    const colorSettings = colorSettingsSave(bgColor, customBgColor, textColor, customTextColor);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: createClassName(colorSettings, blockProps.className),
      style: {
        backgroundColor: colorSettings.bgColor.color,
        color: colorSettings.textColor.color,
        textAlign: alignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
      id: checkboxId,
      className: "ncs4-accordion-toggle",
      type: "checkbox"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      id: "btn-" + checkboxId,
      className: "ncs4-custom-blocks-accordion-section-title-area ncs4-custom-blocks-section-title-area",
      onClick: "toggleChecked('" + checkboxId + "')",
      title: "Expand topic"
    }, title ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "section-title"
    }, title) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "section-title_inherited"
    }, inheritedTitle)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "ncs4-accordion-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
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