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

/***/ "../js/bp-section.js":
/*!***************************!*\
  !*** ../js/bp-section.js ***!
  \***************************/
/*! exports provided: BPSection, BPSectionEdit, BPIndustrySectionEdit, BPIndustrySectionSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPSection", function() { return BPSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPSectionEdit", function() { return BPSectionEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPIndustrySectionEdit", function() { return BPIndustrySectionEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPIndustrySectionSave", function() { return BPIndustrySectionSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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




class BPSection extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "createClassName", (classes, slug = null) => ["ncs4-section", "ncs4-bp-content", slug ? "ncs4-bp-content__" + slug : null].join(' ') + ' ' + classes);

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
    return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])("core/block-editor").getBlockOrder(this.clientId);
  }

  signalChild(eventName, details, id) {
    document.dispatchEvent(new CustomEvent(eventName + "_" + id, {
      detail: details
    }));
  }

  signalChildren(eventName, details) {
    for (let bid of Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])("core/block-editor").getBlockOrder(this.clientId)) {
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: this.createClassName(blockProps.className, this.slug)
    }), this.state.showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title" + " ncs4-custom-blocks-section-title",
      onChange: this.updateTitle,
      value: this.state.title,
      placeholder: this.state.inheritedTitle ? this.state.inheritedTitle : "Section Title"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "General",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: "Show section title",
      help: this.state.showTitle ? "Section title shown" : "Section title hidden",
      checked: this.state.showTitle,
      onChange: this.setShowTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: this.createClassName(blockProps.className, this.slug)
    }), this.attributes.showTitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title-area" + " ncs4-custom-blocks-section-title-area"
    }, this.attributes.title ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      class: "section-title"
    }, this.attributes.title) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      class: "section-title_inherited"
    }, this.attributes.inheritedTitle)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-" + this.slug + "-section-title-area" + " ncs4-custom-blocks-section-title-area" + " ncs4-custom-blocks-" + this.slug + "-section-title-area__hidden" + " ncs4-custom-blocks-section-title-area__hidden"
    }), (this.attributes.optionCreateAnchor == 'enable' || this.attributes.optionCreateAnchor == 'inherit' && this.attributes.title && this.attributes.showTitle) && this.attributes.anchorSlug ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      id: this.sanitize_string(this.attributes.anchorSlug)
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      id: this.sanitize_string(this.attributes.title)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null));
  }

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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: SectionMixedEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionMixedEdit", function() { return SectionMixedEdit; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_bp_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/bp-section.js */ "../js/bp-section.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







class SectionMixedEdit extends _js_bp_section_js__WEBPACK_IMPORTED_MODULE_4__["BPSectionEdit"] {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "createClassName", (classes, isPro = false, isCollege = false, isHs = false, isMarathon = false) => ["ncs4-section", isPro ? "ncs4-bp-content__pro" : null, isCollege ? "ncs4-bp-content__college" : null, isHs ? "ncs4-bp-content__hs" : null, isMarathon ? "ncs4-bp-content__marathon" : null].join(' ') + ' ' + classes);

    this.attributes = props.attributes;
    this.setPro = this.setPro.bind(this);
    this.setCollege = this.setCollege.bind(this);
    this.setHs = this.setHs.bind(this);
    this.setMarathon = this.setMarathon.bind(this);
    let superState = this.state;
    this.state = { ...superState,
      isProChecked: props.attributes.isProChecked,
      isCollegeChecked: props.attributes.isCollegeChecked,
      isHsChecked: props.attributes.isHsChecked,
      isMarathonChecked: props.attributes.isMarathonChecked
    };
  }

  setPro(b) {
    this.setStateAttributes({
      isProChecked: b
    });
  }

  setCollege(b) {
    this.setStateAttributes({
      isCollegeChecked: b
    });
  }

  setHs(b) {
    this.setStateAttributes({
      isHsChecked: b
    });
  }

  setMarathon(b) {
    this.setStateAttributes({
      isMarathonChecked: b
    });
  } // Must be an arrow function to override parent method


  render() {
    let blockProps = this.props.blockProps;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: this.createClassName(blockProps.className, this.attributes.isProChecked, this.attributes.isCollegeChecked, this.attributes.isHsChecked, this.attributes.isMarathonChecked)
    }), this.state.showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      className: "ncs4-custom-blocks-mixed-section-title" + " ncs4-custom-blocks-section-title",
      onChange: this.updateTitle,
      value: this.state.title,
      placeholder: this.state.inheritedTitle ? this.state.inheritedTitle : "Section Title"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "General",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: "Show section title",
      help: this.state.showTitle ? "Section title shown" : "Section title hidden",
      checked: this.state.showTitle,
      onChange: this.setShowTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: "Anchor slug",
      help: "Leave blank to use the section title (not inherited title)",
      placeholder: this.sanitize_string(this.state.title),
      value: this.state.anchorSlug,
      onChange: this.setAnchorSlug
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: "Industries",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: "Professional",
      help: "Should this display as Professional-related content?",
      checked: this.state.isProChecked,
      onChange: this.setPro
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: "Intercollegiate",
      help: "Should this display as Intercollegiate-related content?",
      checked: this.state.isCollegeChecked,
      onChange: this.setCollege
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: "Interscholastic",
      help: "Should this display as Interscholastic-related content?",
      checked: this.state.isHsChecked,
      onChange: this.setHs
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: "Marathon & Endurance Events",
      help: "Should this display as Marathon-related content?",
      checked: this.state.isMarathonChecked,
      onChange: this.setMarathon
    }))));
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






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/mixed-section', {
  apiVersion: 2,
  title: 'Mixed Section',
  icon: 'editor-table',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title'
    },
    inheritedTitle: {
      type: 'string'
    },
    showTitle: {
      type: 'boolean',
      default: true
    },
    optionCreateAnchor: {
      enum: ['inherit', 'disable', 'enable'],
      default: 'inherit'
    },
    anchorSlug: {
      type: 'string'
    },
    isProChecked: {
      type: 'boolean',
      default: false
    },
    isCollegeChecked: {
      type: 'boolean',
      default: false
    },
    isHsChecked: {
      type: 'boolean',
      default: false
    },
    isMarathonChecked: {
      type: 'boolean',
      default: false
    }
  },
  edit: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_js__WEBPACK_IMPORTED_MODULE_4__["SectionMixedEdit"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])()
  })),
  save: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_5__["SectionMixedSave"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()
  }))
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: SectionMixedSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionMixedSave", function() { return SectionMixedSave; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_bp_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/bp-section.js */ "../js/bp-section.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






class SectionMixedSave extends _js_bp_section_js__WEBPACK_IMPORTED_MODULE_4__["BPSection"] {
  constructor(props) {
    super(props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "createClassName", (classes, isPro = false, isCollege = false, isHs = false, isMarathon = false) => ["ncs4-section", isPro ? "ncs4-bp-content__pro" : null, isCollege ? "ncs4-bp-content__college" : null, isHs ? "ncs4-bp-content__hs" : null, isMarathon ? "ncs4-bp-content__marathon" : null].join(' ') + ' ' + classes);
  } // Must be an arrow function to override parent method


  render() {
    let blockProps = this.props.blockProps;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: this.createClassName(blockProps.className, this.attributes.isProChecked, this.attributes.isCollegeChecked, this.attributes.isHsChecked, this.attributes.isMarathonChecked)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "ncs4-custom-blocks-mixed-section-beam-area"
    }, this.attributes.showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-mixed-section-title-area" + " ncs4-custom-blocks-section-title-area"
    }, this.attributes.title ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      class: "section-title"
    }, this.attributes.title) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      class: "section-title_inherited"
    }, this.attributes.inheritedTitle)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "ncs4-custom-blocks-mixed-section-beam-area__inner"
    }, this.attributes.isProChecked && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__pro ncs4-bp-content ncs4-bp-content__pro"
    }), this.attributes.isCollegeChecked && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__college ncs4-bp-content ncs4-bp-content__college"
    }), this.attributes.isHsChecked && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__hs ncs4-bp-content ncs4-bp-content__hs"
    }), this.attributes.isMarathonChecked && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h6", {
      className: "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__marathon ncs4-bp-content ncs4-bp-content__marathon"
    }))), " ", (this.attributes.optionCreateAnchor == 'enable' || this.attributes.optionCreateAnchor == 'inherit' && this.attributes.title && this.attributes.showTitle) && this.attributes.anchorSlug ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      id: this.sanitize_string(this.attributes.anchorSlug)
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      id: this.sanitize_string(this.attributes.title)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null));
  }

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