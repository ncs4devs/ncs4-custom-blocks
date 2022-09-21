/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BPTopicEdit": function() { return /* binding */ BPTopicEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/save.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_ImageControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/ImageControl.js */ "../js/ImageControl.js");








class BPTopicEdit extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {
      editMode: false,
      title: props.attributes.title,
      link: props.attributes.link,
      img: props.attributes.img
    };
    wp.data.subscribe(this.handleSelected);
  }

  createClassName(classes) {
    return ['ncs4-bp-topic'].join(' ') + ' ' + classes;
  }

  setStateAttributes(attrs) {
    this.setState(attrs, () => {
      this.setAttributes(attrs);
    });
  }

  handleSelected() {
    let selectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getSelectedBlock();

    if (!selectedBlock) {
      return;
    }

    if (!this.state.editMode && selectedBlock.clientId === this.clientId) {
      this.setState({
        editMode: true
      });
    } else if (this.state.editMode && selectedBlock.clientId !== this.clientId) {
      this.setState({
        editMode: false
      });
    }
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "ncs4-bp-topic__wrapper"
    }, blockProps), this.state.editMode ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BPTopicEditMode, {
      attributes: this.state,
      onChange: this.setStateAttributes
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save_js__WEBPACK_IMPORTED_MODULE_3__.BPTopicSave, {
      attributes: this.state,
      blockProps: blockProps
    }));
  }

}

class BPTopicEditMode extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    let attrs = this.props.attributes;
    let onChange = this.props.onChange;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Topic",
      placeholder: "Best Practices Topic",
      value: attrs.title,
      onChange: v => onChange({
        title: v
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Topic page link",
      help: "Link to the topic page",
      placeholder: "/resources/best-practices/my-topic",
      value: attrs.link,
      onChange: v => onChange({
        link: v
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_7__.ImageEdit, {
      onChange: img => (0,_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_7__.onImageChange)(img, v => onChange({
        img: v
      })),
      img: attrs.img
    }));
  }

}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BPTopicSave": function() { return /* binding */ BPTopicSave; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_ImageControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/ImageControl.js */ "../js/ImageControl.js");




class BPTopicSave extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

  createClassName(classes) {
    return ['ncs4-bp-topic'].join(' ') + ' ' + classes;
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: this.createClassName(blockProps.className),
      href: this.attributes.link
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TopicTextArea, {
      text: this.attributes.title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TopicIconArea, {
      img: this.attributes.img,
      svg: this.attributes.svg
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ncs4-bp-topic__overlay"
    }));
  }

}

class TopicTextArea extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "ncs4-bp-topic__text-area"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, this.text));
  }

}

class TopicIconArea extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    let renderSvg = this.img && this.img.mime === "image/svg+xml" && this.svg;
    let img = this.props.img || {};
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_js_ImageControl_js__WEBPACK_IMPORTED_MODULE_3__.ImageSave, {
      className: "ncs4-bp-topic__icon-area",
      img: img
    });
  }

}

/***/ }),

/***/ "../js/ImageControl.js":
/*!*****************************!*\
  !*** ../js/ImageControl.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageEdit": function() { return /* binding */ ImageEdit; },
/* harmony export */   "ImageSave": function() { return /* binding */ ImageSave; },
/* harmony export */   "Svg": function() { return /* binding */ Svg; },
/* harmony export */   "imageAttribute": function() { return /* binding */ imageAttribute; },
/* harmony export */   "onImageChange": function() { return /* binding */ onImageChange; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const imageAttribute = selector => ({
  type: "image",
  source: "query",
  selector,
  default: [],
  query: {
    url: {
      type: "string",
      source: "attribute",
      attribute: "src"
    },
    alt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      default: ""
    },
    mime: {
      type: "string",
      source: "attribute",
      attribute: "type"
    },
    width: {
      type: "int",
      source: "attribute",
      attribute: "width",
      default: null
    },
    height: {
      type: "int",
      source: "attribute",
      attribute: "height",
      default: null
    }
  }
}); // Be careful that you only use trusted SVGs as they are not secure!

function Svg(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.useInlineSvg ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: props.img.data
    }
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("embed", {
    type: props.img.mime,
    src: props.img.url
  }));
} // Image object format:

/*
img: {
  mime = "image/svg+xml",
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
  props.useInlineSvg = props.useInlineSvg == null ? true : props.useInlineSvg;

  const onSelect = media => {
    let img = {
      url: media.url,
      mime: media.mime,
      inline: media.mime === "image/svg+xml" && props.useInlineSvg ? true : undefined,
      width: media.width,
      height: media.height
    };
    props.onChange(img);
  };

  const noImage = !props.img || typeof props.img == "object" && Object.keys(props.img).length == 0;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelect,
    value: props.img ? props.img.id : null,
    allowedTypes: ['image'],
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: noImage ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        style: {
          marginBottom: "24px"
        },
        onClick: open
      }, noImage ? "Choose an image" : props.img.mime === "image/svg+xml" && props.img.data ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Svg, {
        img: props.img,
        useInlineSvg: props.useInlineSvg,
        style: imageStyle(props)
      }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: props.img.url,
        style: imageStyle(props)
      }));
    }
  }));
} // Front-end image display

function ImageSave(props) {
  let isSvg = props.img && props.img.mime === "image/svg+xml";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isSvg && !props.img.inline ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("embed", {
    className: "component-image",
    type: props.img.mime,
    src: props.img.url
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: [props.className, "component-image"].join(' '),
    type: props.img.mime,
    src: props.img.url
  }, isSvg ? {
    dangerouslySetInnerHTML: {
      __html: props.img.data,
      style: imageStyle(props)
    }
  } : {}), props.img && !isSvg ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "component-image",
    type: props.img.mime,
    src: props.img.url,
    style: imageStyle(props),
    width: props.img.width,
    height: props.img.height
  }) : null));
} // Generic image change handler

function onImageChange(img, callback) {
  let embedSvg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save.js */ "./src/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('ncs4-custom-blocks/bp-topic', {
  apiVersion: 2,
  title: 'Best Practices Topic',
  icon: 'links',
  category: 'layout',
  attributes: {
    title: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    img: {
      type: 'object'
    },
    svg: {
      type: 'string'
    }
  },
  edit: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit_js__WEBPACK_IMPORTED_MODULE_4__.BPTopicEdit, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  })),
  save: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save_js__WEBPACK_IMPORTED_MODULE_5__.BPTopicSave, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()
  }))
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map