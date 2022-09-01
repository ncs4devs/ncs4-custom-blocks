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
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _js_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/edit-component */ "../js/edit-component.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/hooks */ "../js/hooks.js");
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");







let allowed_inner_blocks = ['ncs4-custom-blocks/fluid-layout-item'];
let paddingMax = 5;
let paddingStep = 0.5;
let units = [{
  value: "%",
  label: "%",
  min: 0,
  max: 100,
  step: 1,
  markStep: 10
}, {
  value: "vw",
  label: "vw",
  min: 0,
  max: 100,
  markStep: 10
}, {
  value: "ch",
  label: "ch",
  min: 10,
  max: 50,
  step: 5
}, {
  value: "em",
  label: "em",
  min: 0,
  max: 100,
  markStep: 10
}, {
  value: "rem",
  label: "rem",
  min: 10,
  max: 100,
  markStep: 10
}];
let layoutUsesMaxWidth = ["equal-grid", "equal-columns", "floated-image", "inline-block"];
let layoutUsesFixedColumns = ["fixed-grid", "fixed-columns"];
let layoutOptions = [{
  value: "equal-grid",
  label: "Equal Grid"
}, {
  value: "equal-columns",
  label: "Equal Columns"
}, {
  value: "auto-grid",
  label: "Auto Grid"
}, //{ value: "fixed-grid", label: "Fixed Grid" }, // Unsafe, causes shrinkage or overflow
{
  value: "fixed-columns",
  label: "Fixed Columns"
}, {
  value: "floated-image",
  label: "Floated Image"
}, {
  value: "inline-block",
  label: "Inline Block"
}];
let justifyOptions = [{
  value: "space-around",
  label: "Space Around"
}, {
  value: "space-between",
  label: "Space Between"
}, {
  value: "space-evenly",
  label: "Space Evenly"
}, {
  value: "left",
  label: "Left"
}, {
  value: "center",
  label: "Center"
}, {
  value: "right",
  label: "Right"
}, {
  value: "normal",
  label: "None"
}];
let colSizeOptions = [{
  value: "1fr",
  label: "Equal Width"
}, {
  value: "auto",
  label: "Auto Width"
}];
function Edit(props) {
  let [state, setAttribute, setState] = (0,_js_hooks__WEBPACK_IMPORTED_MODULE_5__.withAttributes)(props.attributes, props.setAttributes, { ...props.attributes
  }, {});
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_js_edit_component__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
    state: state,
    setAttribute: setAttribute,
    allowed_inner_blocks: allowed_inner_blocks,
    controlPanels: [{
      label: "Color",
      initialOpen: false,
      controls: [{
        type: "color",
        label: "Background color",
        attribute: "bgColor"
      }, {
        type: "color",
        label: "Text color",
        attribute: "textColor"
      }]
    }, {
      label: "Layout settings",
      controls: [{
        type: "choice",
        label: "Layout type",
        attribute: "optionLayout",
        choices: layoutOptions
      }, // Inline-Block controls
      {
        type: "choice",
        label: "Vertical align",
        help: "How items should be aligned vertically with one another",
        attribute: "optionVerticalAlign",
        disabled: state.optionLayout !== "inline-block",
        choices: [{
          value: "top",
          label: "Top"
        }, {
          value: "middle",
          label: "Middle"
        }, {
          value: "bottom",
          label: "Bottom"
        }]
      }, // Max width controls
      {
        type: "unit",
        label: "Maximum width settings",
        help: "The max width that the entire content block can have",
        attribute: "maxWidth",
        useToggle: true,
        toggleLabel: "Use max width",
        toggleHelp: state.maxWidth.enabled ? "The block has a max width" : "The block will take up as much space as possible",
        selectorLabel: "Units",
        selectorChoices: units,
        sliderLabel: "Max width",
        disabled: !layoutUsesMaxWidth.includes(state.optionLayout)
      }, // Min width controls
      {
        type: "unit",
        label: "Minimum width settings",
        help: "The minimum width the content block can have",
        attribute: "minWidth",
        selectorLabel: "Units",
        selectorChoices: units,
        sliderLabel: "Min width"
      }, // Fised Column controls
      {
        type: "choice",
        label: "Columns",
        min: 2,
        max: 10,
        attribute: "numColumns",
        disabled: !layoutUsesFixedColumns.includes(state.optionLayout)
      }, {
        type: "choice",
        label: "Column width",
        attribute: "optionColSize",
        choices: colSizeOptions,
        disabled: !layoutUsesFixedColumns.includes(state.optionLayout)
      }]
    }, {
      label: "Spacings",
      controls: [{
        type: "choice",
        label: "Justify items",
        attribute: "optionJustify",
        choices: justifyOptions
      }, {
        type: "choice",
        label: "Row gap (rem)",
        min: 0,
        max: paddingMax,
        step: paddingStep,
        attribute: "rowGap"
      }, {
        type: "choice",
        label: "Column gap (rem)",
        min: 0,
        max: paddingMax,
        step: paddingStep,
        attribute: "columnGap"
      }, {
        type: "choice",
        label: ["Padding Top (rem)", "Padding Right (rem)", "Padding Bottom (rem)", "Padding Left (rem)"],
        min: 0,
        max: paddingMax,
        step: paddingStep,
        tooltipRender: v => String(v) + "rem",
        attribute: "padding"
      }, {
        type: "choice",
        label: ["Margin Top (rem)", "Margin Right (rem)", "Margin Bottom (rem)", "Margin Left (rem)"],
        min: 0,
        max: paddingMax,
        step: paddingStep,
        tooltipRender: v => String(v) + "rem",
        attribute: "margin"
      }]
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.AlignmentToolbar, {
    value: state.alignment,
    onChange: a => setAttribute("alignment")(state.alignment === undefined ? "none" : a)
  })));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/ColorSelector.js */ "../js/ColorSelector.js");




function Save(props) {
  let attrs = props.attributes;
  let bgColor = (0,_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_3__.fromColorAttribute)(attrs.bgColor, true);
  let textColor = (0,_js_ColorSelector_js__WEBPACK_IMPORTED_MODULE_3__.fromColorAttribute)(attrs.textColor, false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.blockProps, {
    className: ["ncs4-fluid-layout", bgColor.className, textColor.className, "ncs4-fluid-layout__" + attrs.optionLayout, attrs.useMaxWidth ? "has-max-width" : null, props.blockProps.className].join(' '),
    style: { ...bgColor.style,
      ...textColor.style,
      ['--vertical-align']: attrs.optionVerticalAlign || null,
      ['--min-width']: attrs.minWidth.asString,
      ['--max-width']: attrs.maxWidth.useMaxWidth ? attrs.maxWidth.asString : null,
      ['--columns']: attrs.numColumns + ';',
      ['--column-size']: attrs.optionColSize,
      textAlign: attrs.alignment && attrs.alignment != "none" ? attrs.alignment : null,
      padding: attrs.padding.join("rem ") + "rem",
      margin: attrs.margin.join("rem ") + "rem",
      gap: attrs.rowGap + "rem " + attrs.columnGap + "rem",
      justifyContent: attrs.optionJustify
    }
  }), props.backend ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: props.allowed_inner_blocks
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "../js/ColorSelector.js":
/*!******************************!*\
  !*** ../js/ColorSelector.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromColorAttribute": function() { return /* binding */ fromColorAttribute; },
/* harmony export */   "useColor": function() { return /* binding */ useColor; }
/* harmony export */ });
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


function createColorStyle(colorData, isBg) {
  let style = {};

  if (colorData.slug) {
    return style; // color is not custom, so no need for inline style
  }

  if (isBg) {
    style.backgroundColor = colorData.color;
    style["--palette-bg-color"] = colorData.color;
  } else {
    style.color = colorData.color;
    style["--palette-color"] = colorData.color;
  }

  return style;
}

function getColorBySlug(slug, colors) {
  let color = colors.filter(obj => obj.slug === slug)[0];
  return color ? color.color : null;
}

function getSlugByColor(color, colors) {
  let c = colors.filter(obj => obj.color === color)[0];
  return c ? c : null;
}

function matchColor(color, colors) {
  if (!color || typeof color !== "object") {
    console.warn("Malformed color");
    return {
      color: null,
      slug: null
    };
  }

  for (let c of colors) {
    if (color.color && c.color === color.color || color.slug && c.slug === color.slug) {
      return {
        color: c.color,
        slug: c.slug
      };
    }
  }

  if (color.color && !color.slug) {
    return color; // this is a custom color
  }

  console.warn("Unknown color:", color);
  return {
    color: null,
    slug: null
  };
}

const ColorSelector = props => {
  let settings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getSettings();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, props.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: settings.colors,
    disableCustomColors: settings.disableCustomColors,
    value: props.value,
    onChange: c => {
      let color = getSlugByColor(c, settings.colors);
      props.onChange({
        color: c,
        slug: color ? color.slug : null
      });
    }
  }));
}; // adds additional color data, e.g. classes, styles, etc


const fromColorAttribute = (colorAttr, isBg) => ({
  data: colorAttr,
  className: isBg ? createColorClass(colorAttr.slug, "background-color") : createColorClass(colorAttr.slug, "color"),
  style: createColorStyle(colorAttr, isBg)
});
function useColor(colorAttr, isBg, callback) {
  let data = {};
  let colors = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getSettings().colors;
  let [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}); // rich color data

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // reconstruct color slug and code from retrieved value
    data = matchColor(colorAttr, colors);

    if (typeof callback === "function") {
      callback(data); // save to state
    } // Add extra data for classes, styles, etc


    setColor(fromColorAttribute(data, isBg));
  }, [colorAttr.color, colorAttr.slug]);
  return color;
}
/* harmony default export */ __webpack_exports__["default"] = (ColorSelector);

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

/***/ "../js/SelectControls.js":
/*!*******************************!*\
  !*** ../js/SelectControls.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxGroup": function() { return /* binding */ CheckboxGroup; },
/* harmony export */   "EmailControl": function() { return /* binding */ EmailControl; },
/* harmony export */   "OptionControl": function() { return /* binding */ OptionControl; },
/* harmony export */   "OptionGroup": function() { return /* binding */ OptionGroup; },
/* harmony export */   "OptionsControl": function() { return /* binding */ OptionsControl; },
/* harmony export */   "PhoneControl": function() { return /* binding */ PhoneControl; },
/* harmony export */   "SliderControl": function() { return /* binding */ SliderControl; },
/* harmony export */   "UnitControl": function() { return /* binding */ UnitControl; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
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

class OptionsControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  // Returns attr: value pairs currently selected
  getChoices(options) {
    let choices = [];
    options.forEach((o, i) => {
      choices[i] = {
        attribute: o.attribute,
        value: o.value == NaN || o.value == null ? o.default : o.value
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
    let maxRadioOptions = isNaN(this.props.maxRadioOptions) ? 5 : this.props.maxRadioOptions;
    let options = this.props.options;
    let onChange = this.props.onChange; // array of {attribute: attr, value: val}}

    let choices = this.getChoices(options);
    let optionControls = [...Array(options.length).keys()].map(i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(OptionControl, {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, optionControls);
  }

}
class OptionControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, Array.isArray(value) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(OptionGroup, this.props) : !choices ? !(isNaN(min) || isNaN(max)) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SliderControl, {
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
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: label,
      help: help,
      checked: invertValue != Boolean(value) // != <-> XOR
      ,
      onChange: b => callback(invertValue != b),
      disabled: disabled
    }) : multiple ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(CheckboxGroup, {
      label: label,
      help: help,
      options: choices,
      value: value,
      callback: callback,
      disabled: disabled
    }) : choices.length <= maxRadioOptions ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      label: label,
      help: help,
      selected: value,
      onChange: callback,
      options: choices,
      disabled: disabled
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
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

class OptionGroup extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
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
    let options = [...Array(values.length).keys()].map(i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(OptionControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.getProps(this.props, i), {
      key: i,
      callback: v => {
        let vs = [...values];
        vs[i] = v;
        callback(vs);
      }
    })));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, options);
  }

} // Creates multiple CheckboxControls from a group of attributes

class CheckboxGroup extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
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
    let boxes = [...Array(options.length).keys()].map(i => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      className: "ncs4-components-checkboxgroup"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("label", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2",
      for: this.id
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help), boxes);
  }

} // Handles number selects (RangeControl)

class SliderControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
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

class UnitControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  getUnitSettings(props) {
    for (let unit of props.units) {
      if (unit.value === props.value) {
        return unit;
      }
    }

    return props.units[0];
  }

  render() {
    let label = this.props.label;
    let help = this.props.help;
    let disabled = this.props.disabled;
    let toggleProps = this.props.toggleSelector; // may be undefined

    let unitProps = this.props.unitSelector;
    let sliderProps = this.props.slider;
    let toggleAttr = toggleProps && toggleProps.attribute;
    let toggleValue = toggleProps == null || Object.keys(toggleProps).length === 0 ? true : toggleProps.value || toggleProps.default;
    let unitValue = unitProps.value || unitProps.default;
    let sliderValue = !isNaN(sliderProps.value) ? sliderProps.value : sliderProps.default;

    let setAttributes = attrs => this.props.onChange(Object.assign({
      [toggleAttr]: toggleValue,
      unit: unitValue,
      value: sliderValue,
      asString: String(sliderValue) + unitValue
    }, attrs)); // Set default values


    if (toggleAttr != undefined && toggleProps && typeof toggleProps.value === "undefined") {
      setAttributes({
        [toggleAttr]: toggleValue
      });
    }

    if (typeof unitProps.value === "undefined") {
      setAttributes({
        unit: unitValue
      });
    }

    if (isNaN(sliderProps.value)) {
      setAttributes({
        value: sliderValue
      });
      setAttributes({
        asString: String(sliderValue) + unitValue
      });
    }

    let selectorsDisabled = disabled || !toggleValue;
    let unitSettings = this.getUnitSettings(unitProps);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "components-base-control__label css-pezhm9-StyledLabel e1puf3u2"
    }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, toggleAttr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(OptionControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, toggleProps, {
      value: toggleValue,
      callback: v => setAttributes({
        [toggleAttr]: v
      }),
      disabled: disabled
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(OptionControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, unitProps, {
      multiple: false,
      choices: unitProps.units,
      disabled: selectorsDisabled,
      callback: v => {
        let unitSettings = this.getUnitSettings({ ...unitProps,
          value: v
        });
        let value = this.clamp(sliderValue, unitSettings.min, unitSettings.max);
        setAttributes({
          unit: v,
          value,
          asString: String(value) + v
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(SliderControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sliderProps, {
      value: sliderValue,
      min: unitSettings.min,
      max: unitSettings.max,
      step: unitSettings.step,
      markStep: unitSettings.markStep || unitSettings.step,
      tooltipRender: v => String(v) + (unitSettings.label || unitSettings.value),
      disabled: selectorsDisabled,
      callback: v => {
        let value = this.clamp(v, unitSettings.min, unitSettings.max);
        setAttributes({
          value,
          asString: String(value) + unitValue
        });
      }
    })), help && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
      className: "components-base-control__help css-1gbp77-StyledHelp e1puf3u3"
    }, help));
  }

}
class PhoneControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  validateNumber(num) {
    return !Boolean(num) || PhoneControl.reg.test(num);
  }

  render() {
    let valid = this.validateNumber(this.props.value);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      value: this.props.value,
      onChange: n => {
        this.props.onChange(n);
      },
      label: "Phone",
      help: valid ? null : "Unrecognized phone number format (perhaps you've made a typo?)"
    });
  }

}

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneControl, "reg", /^(\+?[0-9]{1,4})?[ \-.]*[0-9]{3}[ \-.]*[0-9]{3}[ \-.]*[0-9]{4}$/);

class EmailControl extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  // https://stackoverflow.com/a/201378
  validateEmail(s) {
    return !Boolean(s) || EmailControl.reg.test(s);
  }

  render() {
    let valid = this.validateEmail(this.props.value);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(EmailControl, "reg", /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);

/***/ }),

/***/ "../js/edit-component.js":
/*!*******************************!*\
  !*** ../js/edit-component.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorToAttribute": function() { return /* binding */ colorToAttribute; },
/* harmony export */   "default": function() { return /* binding */ Interface; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectControls */ "../js/SelectControls.js");
/* harmony import */ var _ColorSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSelector */ "../js/ColorSelector.js");
/* harmony import */ var _ImageControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageControl */ "../js/ImageControl.js");



/* High-level abstraction for common block patterns
 * Assumes that the edit block calls the save block for markup
 * and just adds on some backend logic and controls for handling attributes
 */





/* Example usage:

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "text": s => s.trim(),
      "link": (s, attrs) => verifyLink(s) ? s : attrs.link,
    },
  );

  return (
    <Interface
      { ...props }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "Panel Label",
          controls: [
            {
              type: "text",
              label: "Text input",
              attribute: "textAttr",
              placeholder: "Type here...",
            },
            {
              type: "unit",
              label: "Unit input",
              help: "Use the slider below to... "
              attribute: "unitAttr",
              useToggle: true,
              toggleLabel: "Use unit",
              toggleHelp: "Help text",
              selectorLabel: "Units",
              selectorChoices: [
                { value: "%", label: "%", min: 0, max: 100, step: 1, markStep: 10 },
              ],
              sliderLabel: "Value",
              sliderHelp: "Help text",
            },
            {
              type: "choice",
              label: "Enumerable input",
              attribute: "choiceAttr",
              min: 2,
              max: 10,
              step: 1, // defaults to 1
            },
            {
              type: "choice",
              label: "Enumerable input 2",
              attribute: "choiceAttr2",
              choices: [
                { value: "1fr", label: "Equal Width" },
                { value: "auto", label: "Auto Width" },
              ],
              multiple: false,
            },
            {
              type: "choice", // creates a toggle option
              label: "Enumerable input 3",
              attribute: "choiceAttr3",
              default: false,
              invertValue: false,
            },
          ],
        },
        {
          label: "Panel 2",
          controls: [
            ...
          ],
        },
      ] }
    />
  );

}

*/

function Interface(props) {
  let Save = props.save;

  if (!Save) {
    console.error("Prop 'save' is null or undefined. React component expected");
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Save, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    style: { ...props.style,
      flex: "0 1 840px"
    },
    attributes: props.state,
    blockProps: props.blockProps,
    backend: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, props.controlPanels.map((panel, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ControlPanel, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, panel, {
    state: props.state,
    setAttribute: props.setAttribute,
    key: key
  })))));
} // removes extra editor-side color data

function colorToAttribute(colorObj) {
  return {
    color: colorObj.color,
    slug: colorObj.slug
  };
}

function ControlPanel(props) {
  let initialOpen = props.initialOpen != null ? props.initialOpen : true;
  let setAttribute = props.setAttribute;
  let state = props.state;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: props.label,
    initialOpen: initialOpen
  }, props.controls.map((control, key) => {
    if (control.disabled) {
      return null;
    }

    switch (control.type) {
      case "text":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            key: key,
            value: state[control.attribute],
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "unit":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectControls__WEBPACK_IMPORTED_MODULE_4__.UnitControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            key: key,
            toggleSelector: control.useToggle ? {
              attribute: "enabled",
              label: control.toggleLabel,
              help: control.toggleHelp,
              value: state[control.attribute].enabled
            } : {},
            unitSelector: {
              label: control.selectorLabel,
              value: state[control.attribute].unit,
              units: control.selectorChoices
            },
            slider: {
              label: control.sliderLabel,
              help: control.sliderHelp,
              value: state[control.attribute].value
            },
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "color":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ColorSelector__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            key: key,
            value: state[control.attribute].color,
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "image":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ImageControl__WEBPACK_IMPORTED_MODULE_6__.ImageEdit, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            onChange: i => (0,_ImageControl__WEBPACK_IMPORTED_MODULE_6__.onImageChange)(i, setAttribute(control.attribute)),
            img: state[control.attribute]
          }));
          break;
        }

      case "choice":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectControls__WEBPACK_IMPORTED_MODULE_4__.OptionsControl, {
            options: [{ ...control,
              value: state[control.attribute]
            }],
            maxRadioOptions: control.maxRadioOptions,
            key: key,
            type: control.type,
            onChange: obj => setAttribute(control.attribute)(obj[control.attribute])
          });
          break;
        }

      case "phone":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectControls__WEBPACK_IMPORTED_MODULE_4__.PhoneControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            key: key,
            value: state[control.attribute],
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      case "email":
        {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectControls__WEBPACK_IMPORTED_MODULE_4__.EmailControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, control, {
            key: key,
            value: state[control.attribute],
            onChange: setAttribute(control.attribute)
          }));
          break;
        }

      default:
        {
          console.error("ControlPanel: Invalid control type '" + control.type + "'");
        }
    }
  }));
}

/***/ }),

/***/ "../js/hooks.js":
/*!**********************!*\
  !*** ../js/hooks.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": function() { return /* binding */ useStore; },
/* harmony export */   "useToggle": function() { return /* binding */ useToggle; },
/* harmony export */   "withAttributes": function() { return /* binding */ withAttributes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const toggler = state => !state;

function useToggle() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(toggler, initialState);
} // shallow merges objects into a state object
// React's setState(Object) does NOT work for this, despite what the docs say.

const setStore = setState => value => {
  setState((state, _props) => Object.assign({}, state, value));
};

function useStore() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  return [state, setStore(setState)];
} // functions as useStore/useState but updates attributes at the same time
// Takes an optional "reducer" function for any attribute.
// The reducer takes the current attributes and a value and should return a new
// value to be written to the attribute, the state will always be written directly.

function withAttributes(attributes, setAttributes) {
  let initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let reducers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let [state, setState] = useStore(initialState);

  let setAttribute = attr => value => {
    setState({
      [attr]: value
    });
    setAttributes({
      [attr]: typeof reducers[attr] === "function" && reducers[attr].length <= 2 ? reducers[attr](value, attributes) : value
    });
  };

  return [state, setAttribute, newState => {
    for (let attr in newState) {
      setAttribute(attr)(newState[attr]);
    }
  }];
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
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('ncs4-custom-blocks/fluid-layout', {
  apiVersion: 2,
  title: 'Fluid Layout',
  icon: 'columns',
  category: 'layout',
  attributes: {
    bgColor: {
      type: 'object',
      default: {
        color: null,
        slug: null
      }
    },
    textColor: {
      type: 'object',
      default: {
        color: null,
        slug: null
      }
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
    optionLayout: {
      type: "string",
      default: "equal-grid"
    },
    minWidth: {
      type: "object",
      default: {
        value: 0,
        unit: "%",
        asString: "0%"
      }
    },
    maxWidth: {
      type: "object",
      default: {
        enabled: false,
        value: 0,
        unit: "%",
        asString: "0%"
      }
    },
    rowGap: {
      type: 'number',
      default: 3
    },
    columnGap: {
      type: 'number',
      default: 3
    },
    optionJustify: {
      type: "string",
      default: "space-around"
    },
    numColumns: {
      type: "number",
      default: 3
    },
    optionColSize: {
      type: "string",
      default: "1fr"
    },
    optionVerticalAlign: {
      type: "string",
      default: ""
    }
  },
  edit: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  })),
  save: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()
  }))
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map