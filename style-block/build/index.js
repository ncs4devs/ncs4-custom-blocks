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

/***/ "../js/UIControls.js":
/*!***************************!*\
  !*** ../js/UIControls.js ***!
  \***************************/
/*! exports provided: ButtonControl, ListControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControl", function() { return ButtonControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControl", function() { return ListControl; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



 // unique props: label, dashicon (dashicon classname without `dashicons-`)

function ButtonControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: ["ncs4-component__button", props.className].join(" ")
  }), props.dashicon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "dashicons dashicons-" + props.dashicon
  }), " "), props.label);
} // unique props: options, selected, onSelect, reverse, getKey, getValue
// Functions as a single-select SelectControl which returns the selected index
// and whose options are [string, string, ...] instead of [{value: string, label: string}, ...]
//

function ListControl(props) {
  let options = props.options;

  let getKey = props.getKey || ((option, index, options) => index);

  let getValue = props.getValue || ((option, index, options) => String(option));

  if (props.reverse) {
    options = options.map((option, i, arr) => {
      let index = arr.length - 1 - i;
      return {
        value: getKey(option, i, arr),
        label: getValue(arr[index])
      };
    });
  } else {
    options = options.map((option, i, arr) => ({
      value: getKey(option, i, arr),
      label: getValue(option)
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    multiple: false,
    options: options,
    onChange: o => props.onSelect(o)
  }));
}

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
  let x = n - str.length;

  if (x < 0) {
    return addEllipses ? str.slice(0, n - 3) + "..." : str.slice(0, n);
  } else if (x > 0) {
    return useNbsp ? str + " " + "&nbsp;".repeat(x - 1) : str + " ".repeat(x);
  } else {
    return str;
  }
}

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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");
/* harmony import */ var _js_UIControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/UIControls */ "../js/UIControls.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/utils */ "../js/utils.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./save */ "./src/save.js");








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

class Edit extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.appendRule = this.appendRule.bind(this);
    this.changeRules = this.changeRules.bind(this);
    this.id = this.props.blockProps.id;

    this.getRuleId = (() => {
      let id = -1;
      return () => {
        id++;
        return this.id + "-" + id;
      };
    })();

    let initialRules = this.addIdsToRules(this.attributes.rules);
    this.state = {
      rules: initialRules,
      selectedRule: initialRules && initialRules[0] ? initialRules[0].id : null
    };
    this.setAttributes({
      id: this.id,
      style: this.createStyleFromRules(initialRules)
    });
  }

  setStateAttributes(attrs) {
    this.setState(attrs, () => {
      this.setAttributes(attrs);
    });
  }

  addIdsToRules(rules) {
    let out = [];

    for (let rule of rules) {
      out.push({ ...rule,
        id: this.getRuleId()
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
      let selectorString = selector.value.split(",").reduce((str, sel) => str !== "" ? str + "," + prefix + sel : str + prefix + sel, "");
      out += selector.value && selector.value !== "" ? selectorString : "";
    }

    return out;
  }

  createPropertiesFromRule(rule) {
    let properties = rule.properties;

    if (!properties || properties.length < 1) {
      return null;
    }

    let out = "";

    for (let property of properties) {
      out += property.value && property.value !== "" ? property.value : "";
    }

    return out;
  }

  appendRule() {
    let newRuleId = this.getRuleId();
    this.setStateAttributes({
      rules: [...this.state.rules, {
        id: newRuleId
      }]
    });
    this.setState({
      selectedRule: newRuleId
    });
  }

  changeRules(rules) {
    this.setStateAttributes({
      rules,
      style: this.createStyleFromRules(rules)
    });
  }

  render() {
    let blockProps = this.props.blockProps;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_save__WEBPACK_IMPORTED_MODULE_7__["default"], {
      blockProps: blockProps,
      attributes: this.state,
      backend: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Style rules",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RulesListControl, {
      onAppend: this.appendRule
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RulesList, {
      rules: this.state.rules,
      selected: this.state.selectedRule,
      blockId: this.id,
      onSelect: v => this.setState({
        selectedRule: v
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RuleSettings, {
      rules: this.state.rules,
      selected: this.state.selectedRule,
      onChange: this.changeRules
    }))));
  }

} // controls to display above RulesList; e.g. add rule

function RulesListControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__list-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ButtonControl"], {
    className: "ncs4-style-block__list-controller ncs4-style-block__append-rule",
    onClick: props.onAppend,
    dashicon: "plus",
    label: "Add rule"
  }));
} // displays all rules in a radio list, sends selected into onSelectChange()


function RulesList(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ListControl"], {
    className: "ncs4-style-block__rules-list",
    label: "Rule",
    options: props.rules,
    reverse: true,
    selected: props.selected,
    getKey: rule => rule.id,
    getValue: rule => {
      let chars = 15;
      let out = rule.selectors ? Object(_js_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeStringLength"])(rule.selectors.reduce((str, sel) => str + capitalize(sel.type) + ", ", "").slice(0, -2), chars, false) : Object(_js_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeStringLength"])("<No Selectors>", chars, false);
      out += " | ";
      out += rule.properties ? Object(_js_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeStringLength"])(rule.properties.reduce((str, prop) => str + capitalize(prop.type) + ", ", "").slice(0, -2), chars, false) : Object(_js_utils__WEBPACK_IMPORTED_MODULE_6__["normalizeStringLength"])("<No Properties>", chars, false);
      return out;
    },
    onSelect: props.onSelect
  });
} // displays settings for currently selected rule, sends action to onChange()


function RuleSettings(props) {
  let [selectedPane, selectPane] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("selectors");
  let panes = [{
    value: "selectors",
    text: "Selectors"
  }, {
    value: "properties",
    text: "Properties"
  }];

  if (!props.selected) {
    return null;
  }

  function handleSelectorUpdate(selectors) {
    let newRules = props.rules.map(rule => rule.id !== props.selected ? rule : { ...rule,
      selectors
    });
    props.onChange(newRules);
  }

  function handlePropertiesUpdate(properties) {
    let newRules = props.rules.map(rule => rule.id !== props.selected ? rule : { ...rule,
      properties
    });
    props.onChange(newRules);
  }

  let currentRule = (() => {
    for (let rule of props.rules) {
      if (rule.id === props.selected) {
        return rule;
      }
    }

    return {};
  })();

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__rule-settings-panes"
  }, panes.map(({
    value,
    text
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: ["ncs4-style-block__rule-settings-pane-selector", value === selectedPane ? "is-selected" : null].join(" "),
    onClick: () => selectPane(value),
    key: props.selected + "__" + value
  }, text))), selectedPane === "selectors" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectorsSettingsPane, {
    selectors: currentRule.selectors,
    onChange: handleSelectorUpdate
  }), selectedPane === "properties" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PropertiesSettingsPane, {
    properties: currentRule.properties,
    onChange: handlePropertiesUpdate
  }));
}

function SelectorsSettingsPane(props) {
  let [currentSelector, setSelector] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.selectors && props.selectors[0] ? 0 : null);
  let [customCss, setCustomCss] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  let selectors = props.selectors || [];
  let selectorTypes = ["text", "image", "all", "custom"];
  let selectorValues = {
    text: "p,h1,h2,h3,h4,h5,h6,span,button,input,a",
    image: "img,figure,svg",
    all: "*",
    custom: null
  };

  let reduceAction = action => {
    switch (action.type) {
      case "append":
        props.onChange([...selectors, {
          type: selectorTypes[0],
          onlyDirectChildren: false,
          value: selectorValues[selectorTypes[0]]
        }]);
        setSelector(selectors.length);
        break;

      case "delete":
        props.onChange(selectors.map((val, index) => index !== action.index ? val : null));
        setSelector(null);
        break;

      case "edit":
        props.onChange(selectors.map((val, index) => index !== action.index ? val : action.value));
        break;

      default:
        console.warn("SelectorsSettingsPane: unrecognized action '" + action.type + "'");
    }
  };

  let selectorData = selectors[currentSelector];

  let handleSelect = index => {
    if (selectors[index].type === "custom") {
      setCustomCss(selectors[index].value);
    }

    setSelector(index);
  };

  let handleEdit = field => value => reduceAction({
    type: "edit",
    index: currentSelector,
    value: { ...selectorData,
      [field]: value
    }
  });

  let handleTypeChange = value => reduceAction({
    type: "edit",
    index: currentSelector,
    value: { ...selectorData,
      type: value,
      value: selectorValues[value] || customCss
    }
  });

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__selectors-settings-pane"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ButtonControl"], {
    className: "ncs4-style-block__add-selector",
    onClick: () => reduceAction({
      type: "append"
    }),
    dashicon: "plus",
    label: "Add selector"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ListControl"], {
    className: "ncs4-style-block__selectors-list",
    label: "Selector",
    options: selectors,
    getValue: sel => capitalize(sel.type),
    onSelect: handleSelect
  }), currentSelector != null && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__selector-settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    multiple: false,
    label: "Selector type",
    options: selectorTypes.map(v => ({
      label: capitalize(v),
      value: v
    })),
    value: selectorData.type,
    onChange: handleTypeChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    disabled: !selectorData || selectorData.type !== "custom",
    value: customCss,
    onChange: setCustomCss,
    label: "Custom selector",
    help: "For advanced users only"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    label: "Select only direct children",
    help: selectorData.onlyDirectChildren ? "Only elements whose direct parent is this block will be selected" : "Any child elements will be selected",
    checked: selectorData.onlyDirectChildren,
    onChange: handleEdit("onlyDirectChildren")
  })));
}

function PropertiesSettingsPane(props) {
  // just meant to keep randos from using custom styling
  const cssAdminPass = "IKnowCSS";
  let [currentProperty, setProperty] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.properties && props.properties[0] ? 0 : null);
  let [customCss, setCustomCss] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  let [knowsCss, setKnowsCss] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); // 1 is success, -3 is max tries

  let [cssPassword, setCssPassword] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  let properties = props.properties || [];
  let propertyTypes = ["no margin", "no all-caps text", "use all-caps text", "custom"];
  let propertyValues = {
    ["no margin"]: "margin:0;",
    ["no all-caps text"]: "text-transform:none;",
    ["use all-caps text"]: "text-transform:uppercase;"
  };

  let reduceAction = action => {
    switch (action.type) {
      case "append":
        props.onChange([...properties, {
          type: propertyTypes[0],
          value: propertyValues[propertyTypes[0]]
        }]);
        setProperty(properties.length);
        break;

      case "delete":
        props.onChange(properties.map((val, index) => index !== action.index ? val : null));
        setProperty(null);
        break;

      case "edit":
        props.onChange(properties.map((val, index) => index !== action.index ? val : action.value));
        break;

      default:
        console.warn("PropertiesSettingsPane: unrecognized action '" + action.type + "'");
    }
  };

  let propertyData = properties[currentProperty];

  let handleSelect = index => {
    if (properties[index].type === "custom") {
      setCustomCss(properties[index].value);
    }

    setProperty(index);
  };

  let handleEdit = field => value => reduceAction({
    type: "edit",
    index: currentProperty,
    value: { ...propertyData,
      [field]: value
    }
  });

  let handleTypeChange = value => reduceAction({
    type: "edit",
    index: currentProperty,
    value: { ...propertyData,
      type: value,
      value: propertyValues[value] || customCss
    }
  });

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__properties-settings-pane"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ButtonControl"], {
    className: "ncs4-style-block__add-property",
    onClick: () => reduceAction({
      type: "append"
    }),
    dashicon: "plus",
    label: "Add property"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ListControl"], {
    className: "ncs4-style-block__properties-list",
    label: "Property",
    options: properties,
    getValue: prop => capitalize(prop.type),
    onSelect: handleSelect
  }), currentProperty != null && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ncs4-style-block__property-settings"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    multiple: false,
    label: "Property type",
    options: propertyTypes.map(v => ({
      label: capitalize(v),
      value: v
    })),
    value: propertyData.type,
    onChange: handleTypeChange
  }), propertyData && propertyData.type === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: "Advanced user authentication",
    help: "To use custom CSS properties, input password (if you don't know it, you shouldn't use this). DO NOT SUBMIT YOUR ACCOUNT PASSWORD",
    type: "password",
    value: cssPassword,
    onChange: setCssPassword
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_js_UIControls__WEBPACK_IMPORTED_MODULE_5__["ButtonControl"], {
    label: "Submit",
    onClick: () => {
      if (knowsCss > -3 && cssAdminPass === cssPassword) {
        setKnowsCss(1);
      } else {
        setKnowsCss(knowsCss - 1);
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, (() => {
    if (knowsCss <= 0) {
      return String(3 + knowsCss) + " tries remaining";
    } else {
      return "Password accepted";
    }
  })())), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    disabled: knowsCss !== 1,
    value: customCss,
    onChange: setCustomCss,
    label: "Custom property",
    help: "For advanced users only"
  })));
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






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('ncs4-custom-blocks/style-block', {
  apiVersion: 2,
  title: 'Style',
  icon: 'admin-appearance',
  category: 'design',
  attributes: {
    id: {
      type: 'string'
    },
    rules: {
      type: 'array',
      default: []
    },
    style: {
      type: 'string'
    }
  },
  edit: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])()
  })),
  save: props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_save_js__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save()
  }))
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




class Save extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let attrs = this.props.attributes;
    let backend = this.props.backend || false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props.blockProps, {
      id: attrs.id,
      className: ["ncs4-style-block", this.props.blockProps.className].join(' ')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", null, attrs.style), backend ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
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