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
/* harmony import */ var _js_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/hooks */ "../js/hooks.js");
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");






function Edit(props) {
  let [state, setAttribute, setState] = (0,_js_hooks__WEBPACK_IMPORTED_MODULE_4__.withAttributes)(props.attributes, props.setAttributes, { ...props.attributes
  }, {
    "bannerText": s => s.trim()
  });
  (0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_5__.useColor)((0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_5__.fromColorAttribute)(state.bannerBg, true), setAttribute("bannerBg"));
  (0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_5__.useColor)((0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_5__.fromColorAttribute)(state.bannerColor, false), setAttribute("bannerColor"));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_js_edit_component__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
    state: state,
    setAttribute: setAttribute,
    controlPanels: [{
      label: "General",
      controls: [{
        type: "choice",
        label: "Use icon",
        attribute: "useImg"
      }, {
        type: "image",
        label: "Icon",
        attribute: "img",
        disabled: !state.useImg
      }, {
        type: "choice",
        label: "Icon size",
        attribute: "imgSize",
        min: 32,
        max: 256,
        markStep: 32,
        step: 16,
        toolTipRender: v => String(v) + "px"
      }, {
        type: "color",
        label: "Banner background color",
        attribute: "bannerBg"
      }, {
        type: "color",
        label: "Banner text color",
        attribute: "bannerColor"
      }, {
        type: "choice",
        label: "Banner tag",
        attribute: "bannerTag",
        choices: [{
          value: "p",
          label: "p"
        }, {
          value: "h6",
          label: "h6"
        }, {
          value: "h5",
          label: "h5"
        }, {
          value: "h4",
          label: "h4"
        }, {
          value: "h3",
          label: "h3"
        }, {
          value: "h2",
          label: "h2"
        }, {
          value: "h1",
          label: "h1"
        }]
      }, {
        type: "choice",
        label: ["Margin Top (rem)", "Margin Right (rem)", "Margin Bottom (rem)", "Margin Left (rem)"],
        attribute: "margin",
        min: 0,
        max: 5,
        step: 0.5,
        toolTipRender: v => String(v) + "rem"
      }]
    }]
  }));
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
/* harmony import */ var _js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/ColorSelector */ "../js/ColorSelector.js");
/* harmony import */ var _js_ImageControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/ImageControl */ "../js/ImageControl.js");





function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;
  let bgColor = (0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__.fromColorAttribute)(attributes.bannerBg, true);
  let textColor = (0,_js_ColorSelector__WEBPACK_IMPORTED_MODULE_3__.fromColorAttribute)(attributes.bannerColor, false);
  let imgResolution = attributes.img ? attributes.img.height / attributes.img.width : 9;
  let imgHeight = imgResolution * attributes.imgSize;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    "data-backend": props.backend ? "true" : null,
    "data-margin": JSON.stringify(attributes.margin),
    style: { ...props.style,
      margin: attributes.margin.map(v => String(v) + "rem").join(" ")
    },
    className: ["ncs4-card", blockProps.className].join(' ')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    "data-banner-background": JSON.stringify(attributes.bannerBg),
    "data-banner-color": JSON.stringify(attributes.bannerColor),
    "data-banner-tag": attributes.bannerTag,
    "data-use-image": attributes.useImg,
    "data-image": JSON.stringify(attributes.img),
    "data-icon-width": attributes.imgSize,
    className: ["ncs4-card__banner", bgColor.className, textColor.className].join(' '),
    style: {
      ["--icon-width"]: attributes.useImg ? attributes.imgSize + "px" : null,
      ["--icon-height"]: attributes.useImg ? imgHeight + "px" : null,
      ...bgColor.style,
      ...textColor.style
    }
  }, attributes.useImg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_js_ImageControl__WEBPACK_IMPORTED_MODULE_4__.ImageSave, {
    className: "ncs4-card__icon",
    img: attributes.img
  }), props.backend ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "ncs4-card__banner-text",
    tagName: attributes.bannerTag,
    value: attributes.bannerText,
    onChange: props.setAttribute("bannerText"),
    placeholder: "Banner heading"
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: attributes.bannerTag,
    className: "ncs4-card__banner-text",
    value: attributes.bannerText
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ncs4-card__content"
  }, props.backend ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
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

/***/ "../js/utils.js":
/*!**********************!*\
  !*** ../js/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeStringLength": function() { return /* binding */ normalizeStringLength; },
/* harmony export */   "parseAttributes": function() { return /* binding */ parseAttributes; }
/* harmony export */ });
// ensures loaded attributes from the database are cast to their correct type
function parseAttributes(table, data) {
  let out = {};

  for (let attr in data) {
    if ((typeof data[attr] === "string" || table[attr].type === "image") && table[attr] && typeof table[attr] === "object" && table[attr].type) {
      switch (table[attr].type) {
        case "string":
          {
            out[attr] = data[attr];
            break;
          }

        case "image":
          {
            out[attr] = data[attr][0] || data[attr];
            break;
          }

        case "bool":
        case "int":
        case "integer":
        case "number":
        case "json":
          {
            out[attr] = JSON.parse(data[attr]);
            break;
          }

        case "null":
          {
            if (data[attr] !== null && data[attr] !== "" && data[attr] !== "null") {
              console.warn("Attribute '" + attr + "': expected null, got '" + data[attr] + "'");
            }

            out[attr] = null;
            break;
          }

        default:
          {
            console.warn("Attribute '" + attr + "': Unknown type '" + table[attr].type + "'");
          }
      }
    } else {
      out[attr] = data[attr];
    }
  }

  return out;
}
function normalizeStringLength(str, n) {
  let useNbsp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let addEllipses = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
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

function parseRichText(str) {
  let rootTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/utils */ "../js/utils.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save.js */ "./src/save.js");







const attributes = {
  bannerBg: {
    type: "json",
    source: "attribute",
    attribute: "data-banner-background",
    selector: ".ncs4-card__banner",
    default: {
      color: "#18243E",
      slug: "primary-1"
    }
  },
  bannerColor: {
    type: "json",
    source: "attribute",
    attribute: "data-banner-color",
    selector: ".ncs4-card__banner",
    default: {
      color: "#e6e6e6",
      slug: "white-dark"
    }
  },
  bannerText: {
    type: "string",
    source: "html",
    selector: ".ncs4-card__banner-text"
  },
  bannerTag: {
    type: "string",
    source: "attribute",
    attribute: "data-banner-tag",
    selector: ".ncs4-card__banner",
    default: "p"
  },
  margin: {
    type: "json",
    source: "attribute",
    attribute: "data-margin",
    selector: ".ncs4-card",
    default: [3, 0, 3, 0]
  },
  useImg: {
    type: "bool",
    source: "attribute",
    attribute: "data-use-image",
    selector: ".ncs4-card__banner",
    default: false
  },
  img: {
    type: 'json',
    source: "attribute",
    attribute: "data-image",
    selector: ".ncs4-card__banner",
    default: {}
  },
  imgSize: {
    type: 'number',
    source: "attribute",
    attribute: "data-icon-width",
    selector: ".ncs4-card__banner",
    default: 64
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("ncs4-custom-blocks/card", {
  apiVersion: 2,
  title: 'Card',
  icon: 'index-card',
  category: 'layout',
  attributes,
  edit: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_edit_js__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    attributes: (0,_js_utils__WEBPACK_IMPORTED_MODULE_4__.parseAttributes)(attributes, props.attributes),
    blockProps: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  })),
  save: props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_save_js__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    attributes: (0,_js_utils__WEBPACK_IMPORTED_MODULE_4__.parseAttributes)(attributes, props.attributes),
    blockProps: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()
  }))
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map