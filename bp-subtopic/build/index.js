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
/* harmony export */   "BPSubtopicEdit": function() { return /* binding */ BPSubtopicEdit; }
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
/* harmony import */ var _js_bp_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/bp-section.js */ "../js/bp-section.js");






class BPSubtopicEdit extends _js_bp_section_js__WEBPACK_IMPORTED_MODULE_5__.BPSectionEdit {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;
    this.updateTitle = this.updateTitle.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.updateLink = this.updateLink.bind(this);
    let superState = this.state;
    this.state = { ...superState,
      inheritedTitle: null,
      id: props.attributes.id,
      link: props.attributes.link
    };
    document.addEventListener("subtopicsUpdate", this.updateIndex);
  }

  createClassName(classes) {
    return ['ncs4-bp-subtopic'].join(' ') + ' ' + classes;
  }

  updateTitle(t) {
    super.updateTitle(t);
    document.dispatchEvent(new CustomEvent("titleUpdate", {
      detail: {
        id: this.clientId,
        index: this.state.id,
        oldTitle: this.state.title,
        newTitle: t
      }
    }));
    this.setState({
      title: t
    });
    this.setAttributes({
      title: t
    });
  }

  updateLink(t) {
    const str = this.dashEncode(t);
    this.setState({
      link: str
    });
    this.setAttributes({
      link: str
    });
  }

  updateIndex(_ref) {
    let {
      detail: {
        id,
        index
      }
    } = _ref;

    if (id == this.clientId) {
      this.setState({
        id: index
      }, () => {
        this.setAttributes({
          id: index
        });
      });
    }
  }

  dashEncode(str) {
    return str.replaceAll(/[^\w]+/g, "-").replaceAll(/_+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      id: "ncs4-bp-subtopic__" + this.attributes.id,
      className: this.createClassName(blockProps.className),
      style: {
        display: "block"
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
      className: "ncs4-bp-subtopic-title"
    }, this.state.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "General",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Title",
      placeholder: "Subtopic Title...",
      value: this.state.title,
      onChange: t => {
        this.updateTitle(t);
        this.updateLink(t);
      }
    }))));
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
/* harmony export */   "BPSubtopicSave": function() { return /* binding */ BPSubtopicSave; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




class BPSubtopicSave extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

  createClassName(classes) {
    return ["ncs4-bp-subtopic"].join(' ') + ' ' + classes;
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      id: "ncs4-bp-subtopic__" + this.attributes.id,
      className: this.createClassName(blockProps.className)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      id: this.attributes.link,
      className: "bp-subtopic-anchor"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
      className: "ncs4-bp-subtopic-title"
    }, this.attributes.title, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: "#" + this.attributes.link,
      className: "share-section",
      title: "Share this section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      class: "dashicons dashicons-share"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }

}

/***/ }),

/***/ "../js/bp-section.js":
/*!***************************!*\
  !*** ../js/bp-section.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BPIndustrySectionEdit": function() { return /* binding */ BPIndustrySectionEdit; },
/* harmony export */   "BPIndustrySectionSave": function() { return /* binding */ BPIndustrySectionSave; },
/* harmony export */   "BPSection": function() { return /* binding */ BPSection; },
/* harmony export */   "BPSectionEdit": function() { return /* binding */ BPSectionEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);



// Base class containing functions for all bp-sections
// Handles title inheritance, sanitization, etc




class BPSection extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(props) {
    super(props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "createClassName", function (classes) {
      let slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return ["ncs4-section", "ncs4-bp-content", slug ? "ncs4-bp-content__" + slug : null].join(' ') + ' ' + classes;
    });

    this.attributes = props.attributes;
  }

  // https://gist.github.com/spyesx/561b1d65d4afb595f295
  // Used in child class method for anchors
  sanitize_string(str) {
    if (typeof str !== 'string') {
      return;
    }

    str = str.replace(/^\s+|\s+$/g, ''); // trim

    str = str.toLowerCase(); // remove accents, swap ñ for n, etc

    var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
    var to = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace('.', '-') // replace a dot by a dash
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
    .replace(/-+/g, '-') // collapse dashes
    .replace(/\//g, ''); // collapse all forward-slashes

    return str;
  }

  render() {
    throw new Error("BPSection child has not implemented render()");
  }

}
class BPSectionEdit extends BPSection {
  constructor(props) {
    super(props);
    this.setAttributes = props.setAttributes;
    this.clientId = props.clientId;
    this.getBlockList = this.getBlockList.bind(this);
    this.signalChildren = this.signalChildren.bind(this);
    this.updateChildrenTitles = this.updateChildrenTitles.bind(this);
    this.onWPData = this.onWPData.bind(this);
    this.updateInheritedTitle = this.updateInheritedTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.setShowTitle = this.setShowTitle.bind(this);
    this.setOptionCreateAnchor = this.setOptionCreateAnchor.bind(this);
    this.setAnchorSlug = this.setAnchorSlug.bind(this);
    this.state = {
      title: this.attributes.title,
      inheritedTitle: this.attributes.inheritedTitle,
      showTitle: this.attributes.showTitle,
      optionCreateAnchor: this.attributes.optionCreateAnchor,
      anchorSlug: this.attributes.anchorSlug,
      blockList: this.getBlockList()
    };
  }

  componentDidMount() {
    document.addEventListener("sectionTitleUpdate_" + this.clientId, e => {
      this.updateInheritedTitle(e.detail.title);
    });
    document.addEventListener("requestTitle", e => {
      let bl = this.getBlockList();

      if (bl.includes(e.detail.id)) {
        this.signalChild("sectionTitleUpdate", {
          title: this.state.title || this.state.inheritedTitle
        }, e.detail.id);
        this.setState({
          blockList: bl
        });
      }
    });
    wp.data.subscribe(this.onWPData); // Request inherited title on new block creation (doesn't mount fast enough)

    if (!this.state.inheritedTitle) {
      document.dispatchEvent(new CustomEvent("requestTitle", {
        detail: {
          id: this.clientId
        }
      }));
    }
  }

  componentWillUnmount() {
    document.removeEventListener("sectionTitleUpdate_" + this.clientId, e => {
      this.updateInheritedTitle(e.detail.title);
    });
  } // Title inheritance functions


  getBlockList() {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlockOrder(this.clientId);
  }

  signalChild(eventName, details, id) {
    document.dispatchEvent(new CustomEvent(eventName + "_" + id, {
      detail: details
    }));
  }

  signalChildren(eventName, details) {
    for (let bid of (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)("core/block-editor").getBlockOrder(this.clientId)) {
      this.signalChild(eventName, details, bid);
    }
  }

  updateChildrenTitles(t) {
    this.signalChildren("sectionTitleUpdate", {
      title: t
    });
  } // update blockList


  onWPData() {
    let newBlockList = this.getBlockList();

    if (newBlockList != this.state.blockList) {
      this.setState({
        blockList: newBlockList
      });
    }
  } // Update handlers


  updateInheritedTitle(t) {
    this.setState({
      inheritedTitle: t
    }, () => {
      this.setAttributes({
        inheritedTitle: t
      });
    }); // pass t down to children

    if (!this.state.title) {
      this.updateChildrenTitles(t);
    }
  }

  updateTitle(t) {
    this.setState({
      title: t
    }, () => {
      this.setAttributes({
        title: t
      });
    });

    if (!t) {
      this.updateChildrenTitles(this.state.inheritedTitle);
    } else {
      this.updateChildrenTitles(t);
    }
  }

  setStateAttributes(attrs) {
    this.setState(attrs, () => {
      this.setAttributes(attrs);
    });
  }

  setShowTitle(b) {
    this.setStateAttributes({
      showTitle: b
    });
  }

  setOptionCreateAnchor(v) {
    this.setStateAttributes({
      optionCreateAnchor: v
    });
  }

  setAnchorSlug(v) {
    this.setStateAttributes({
      anchorSlug: v
    });
  }

}
class BPIndustrySectionEdit extends BPSectionEdit {
  constructor(props) {
    super(props);
    this.slug = props.industry;
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: this.createClassName(blockProps.className, this.slug)
    }), this.state.showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title" + " ncs4-custom-blocks-section-title",
      onChange: this.updateTitle,
      value: this.state.title,
      placeholder: this.state.inheritedTitle ? this.state.inheritedTitle : "Section Title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: "General",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
      label: "Show section title",
      help: this.state.showTitle ? "Section title shown" : "Section title hidden",
      checked: this.state.showTitle,
      onChange: this.setShowTitle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
      label: "Generate section anchor",
      help: "When should a section anchor be generated",
      selected: this.state.optionCreateAnchor,
      options: [{
        label: "An anchor will be be generated when the section has a defined title (not inherited)",
        value: 'inherit'
      }, {
        label: "An anchor will always be generated",
        value: 'enable'
      }, {
        label: "An anchor will never be generated",
        value: "disable"
      }],
      onChange: this.setOptionCreateAnchor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
      label: "Anchor slug",
      help: "Leave blank to use the section title (not inherited title)",
      placeholder: this.sanitize_string(this.state.title),
      value: this.state.anchorSlug,
      onChange: this.setAnchorSlug
    }))));
  }

}
class BPIndustrySectionSave extends BPSection {
  constructor(props) {
    super(props);
    this.slug = props.industry;
  }

  render() {
    let blockProps = this.props.blockProps;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: this.createClassName(blockProps.className, this.slug)
    }), this.attributes.showTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h6", {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title-area" + " ncs4-custom-blocks-section-title-area"
    }, this.attributes.title ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
      class: "section-title"
    }, this.attributes.title) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
      class: "section-title_inherited"
    }, this.attributes.inheritedTitle)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h6", {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title-area" + " ncs4-custom-blocks-section-title-area" + " ncs4-custom-blocks-" + this.slug + "-section-title-area__hidden" + " ncs4-custom-blocks-section-title-area__hidden"
    }), (this.attributes.optionCreateAnchor == 'enable' || this.attributes.optionCreateAnchor == 'inherit' && this.attributes.title && this.attributes.showTitle) && this.attributes.anchorSlug ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
      id: this.sanitize_string(this.attributes.anchorSlug)
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("a", {
      id: this.sanitize_string(this.attributes.title)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null));
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

/***/ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('ncs4-custom-blocks/bp-subtopic', {
  apiVersion: 2,
  title: 'Best Practices Subtopic',
  parent: ['ncs4-custom-blocks/bp-content'],
  icon: 'admin-page',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: "Title"
    },
    link: {
      type: 'string',
      default: ""
    },
    id: {
      type: 'number',
      default: -1
    }
  },
  edit: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit_js__WEBPACK_IMPORTED_MODULE_4__.BPSubtopicEdit, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  })),
  save: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save_js__WEBPACK_IMPORTED_MODULE_5__.BPSubtopicSave, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()
  }))
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map