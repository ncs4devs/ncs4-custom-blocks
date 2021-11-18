import { registerBlockType, createBlock } from '@wordpress/blocks';
import {
  InnerBlocks,
  useBlockProps,
  InspectorControls,
  withColors,
  getColorClassName,
  BlockControls,
  AlignmentToolbar,
} from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  ToggleControl,
  RadioControl,
} from '@wordpress/components';

const allowed_inner_blocks = [
  'ncs4-custom-blocks/fluid-layout-item',
];

/* Note: If you see a ` number + ';' `, this is a workaround which prevents
  unitless numbers from being trasnformed into pixels by React. (For some
  reason, though, this seems to only happen on the front end and not in the
  editor)
*/

/* Option variables */
/*
  To add: Just add a new entry [value, label] to the array

  **** The first entry will be the default value. *****

  If you make a new option variable, add it to the "Add option functions"
  argument array (in no particular order)
*/

/* Class name is 'ncs4-fluid-layout__[value]' */
var layoutOptions = [
  [ 'equal-grid', 'Equal Grid' ],
  [ 'equal-columns', 'Equal Columns'],
  [ 'auto-grid', 'Auto Grid' ],
  //[ 'fixed-grid', 'Fixed Grid'], // Unsafe, causes shrinkage or overflow
  [ 'fixed-columns', 'Fixed Columns'],
  [ 'floated-image', 'Floated Image'],
];

var justifyOptions = [
  ['space-around', 'Space Around'],
  ['space-between', 'Space Between'],
  ['space-evenly', 'Space Evenly'],
  ['left', 'Left'],
  ['center', 'Center'],
  ['right', 'Right'],
  ['normal', 'None'],
];

var unitOptions = [
  ['%', '%'],
  ['vw', 'vw'],
  ['ch', 'ch'],
  ['em', 'em'],
  ['rem', 'rem'],
];

// These are RadioControls. If one gets a lot of options, make it a
// SelectControl instead (and move it up above this comment).
var colSizeOptions = [
  ['1fr', 'Equal Width'],
  ['auto', 'Auto Width'],
];

// Conditional rendering variables

// Layouts which should render max-width controls
const layoutUsesMaxWidth = [
  'equal-grid',
  'equal-columns',
  'floated-image',
];

// Layouts which should render controls related to a static column number
const layoutUsesFixedColumns = [
  'fixed-grid',
  'fixed-columns',
];

// Add option functions
[
  layoutOptions,
  justifyOptions,
  unitOptions,
  colSizeOptions,
].forEach( (arr) => {
  arr.values = () => arr.map(x => x[0]);
  arr.labels = () => arr.map(x => x[1]);
  arr.default = () => arr[0][0];
});

// Returns an array of objects suitable for SelectControl's options prop
function createOptions(ops) {
  var options = [];
  ops.forEach( op => {
    options.push( {value: op[0], label: op[1]} );
  });
  return options;
}

function colorSettingsEdit( bgColor, textColor ) {
  var colorSettings = {
    bgColor: {
      class: '',
      color: '',
    },
    textColor: {
      class: '',
      color: '',
    }
  }
  if (bgColor != undefined) {
    colorSettings.bgColor = (bgColor.class != undefined)
    ? { class: bgColor.class }
    : { color: bgColor.color };
  }
  if (textColor != undefined) {
    colorSettings.textColor = (textColor.class != undefined)
    ? { class: textColor.class }
    : { color: textColor.color };
  }
  return colorSettings;
}

function colorSettingsSave(
  bgColor,
  customBgColor,
  textColor,
  customTextColor,
) {
  var colorSettings = {
    bgColor: {
      class: '',
      color: '',
    },
    textColor: {
      class: '',
      color: '',
    }
  }
  colorSettings.bgColor = (bgColor != undefined)
    ? { class: getColorClassName('background-color', bgColor)}
    : { color: customBgColor };
  colorSettings.textColor = (textColor != undefined)
    ? { class: getColorClassName('color', textColor)}
    : { color: customTextColor };
  return colorSettings;
}

/*
  You can pass an array (or string) of classes to useBlockProps[.save](), but
  this makes them appear in the "additional CSS" field and causes undefined
  behavior to *all* blocks if the user deletes them.
  So instead, the custom classes are added to blockProps.className and manually
  set via className: createClassName().
*/
const createClassName = (
    colorSettings,
    optionLayout,
    useMaxWidth,
    classes,
) => [
  'ncs4-fluid-layout',
  colorSettings.bgColor.class,
  colorSettings.textColor.class,
  'ncs4-fluid-layout__' + optionLayout,
  (useMaxWidth) ? "has-max-width" : null,
].join(' ') + ' ' + classes;

const BlockWithColorSettings = (props) => {
    const {
      bgColor,
      textColor,
      attributes: {
        alignment,
        padding,
        margin,
        optionLayout,
        minWidth,
        minWidthUnit,
        minWidth2,
        minWidth2Unit,
        maxWidth,
        useMaxWidth,
        maxWidthUnit,
        rowGap,
        columnGap,
        optionJustify,
        numColumns,
        optionColSize,
      },
      setAttributes,
      clientId,
    } = props;
    const blockProps = useBlockProps();

    /* Check for color classes */
    const colorSettings = colorSettingsEdit(bgColor, textColor);

    function createMarks(min, max, step) {
      var output = [];
      while (min <= max) {
        output.push( {
          value: min,
          label: String(min),
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
        'marks': createMarks(0, 100, 10),
      },
      'vw': {
        'min': 0,
        'max': 100,
        'step': 1,
        'marks': createMarks(0, 100, 10),
      },
      'ch': {
        'min': 10,
        'max': 50,
        'step': 5,
        'marks': createMarks(10, 50, 5),
      },
      'em': {
        'min': 0,
        'max': 100,
        'step': 1,
        'marks': createMarks(0, 100, 10),
      },
      'rem': {
        'min': 10,
        'max': 100,
        'step': 1,
        'marks': createMarks(10, 100, 10),
      },
    }
    const minWidthRange = maxWidthRange;

    function setPadding( i ) { return (v) => {
      var p = [...padding];
      p[i] = v;
      setAttributes( { padding: p } );
    }}

    function setMargin( i ) { return (v) => {
      var m = [...margin];
      m[i] = v;
      setAttributes( { margin: m } );
    }}

    const clampWidth = (attr, range) => (unit) => {
      if (attr < range[unit].min) {
        setAttributes( { [attr]: range[unit].min } );
      } else if (attr > range[unit].max) {
        setAttributes( { [attr]: range[unit].max } );
      }
    }
    const clampMaxWidth = clampWidth(maxWidth, maxWidthRange);
    const clampMinWidth = clampWidth(minWidth, minWidthRange);


    function setWidthUnit() { return (v) => {
      clampMaxWidth(v);
      setAttributes( { maxWidthUnit: v } );
    }}

    return (
      <>
        <InspectorControls>
          <PanelBody
            title = "Layout Settings"
            initialOpen = { true }
          >

            <SelectControl
              label = "Layout Type"
              value = { optionLayout }
              onChange = { (v) => { setAttributes( { optionLayout: v } ) } }
              options = { createOptions(layoutOptions) }
            />
            {/* Max Width controls */}
            {layoutUsesMaxWidth.includes(optionLayout) &&
              <>
                <PanelRow>
                  <ToggleControl
                    label = "Use max width"
                    checked = { useMaxWidth }
                    help = {
                      useMaxWidth
                        ? "Content has a max width"
                        : "Content does not have a max width"
                    }
                    onChange = { (b) => { setAttributes( { useMaxWidth: b } ) } }
                  />
                  <SelectControl
                    label = "Units"
                    value = { maxWidthUnit }
                    onChange = { (v) => {
                      clampMaxWidth(v);
                      setAttributes( { maxWidthUnit: v } );
                    }}
                    options = { createOptions(unitOptions) }
                    disabled = { !useMaxWidth }
                  />
                </PanelRow>
                <RangeControl
                  label = "Max width"
                  value = { maxWidth }
                  onChange = { (v) => { setAttributes( { maxWidth: v } ) } }
                  min = { maxWidthRange[maxWidthUnit].min }
                  max = { maxWidthRange[maxWidthUnit].max }
                  step = { maxWidthRange[maxWidthUnit].step }
                  marks = { maxWidthRange[maxWidthUnit].marks }
                  disabled = { !useMaxWidth }
                  renderTooltipContent = { x => x + maxWidthUnit }
                />
              </>
            }
            {/* End Max Width controls */}
            {/* Fixed Column controls */}
            {layoutUsesFixedColumns.includes(optionLayout) &&
              <>
                <RangeControl
                  label = "Columns"
                  value = { numColumns }
                  onChange = { (v) => { setAttributes( { numColumns: v } ) } }
                  min = { 2 }
                  max = { 10 }
                  step = { 1 }
                  marks = { createMarks(2, 10, 1) }
                />
                <RadioControl
                  label = "Column Width"
                  selected = { optionColSize }
                  onChange = { (v) => { setAttributes( { optionColSize: v } ) } }
                  options = { createOptions(colSizeOptions) }
                />
              </>
            }
            {/* End Fixed Column controls */}

            {/* Min Width controls */}
            <SelectControl
              label = "Units"
              value = { minWidthUnit }
              onChange = { (v) => {
                clampMinWidth(v);
                setAttributes( { minWidthUnit: v } );
              }}
              options = { createOptions(unitOptions) }
            />
            <RangeControl
              label = "Min width"
              value = { minWidth }
              onChange = { (v) => { setAttributes( { minWidth: v } ) } }
              min = { minWidthRange[minWidthUnit].min }
              max = { minWidthRange[minWidthUnit].max }
              step = { minWidthRange[minWidthUnit].step }
              marks = { minWidthRange[minWidthUnit].marks }
              renderTooltipContent = { x => x + minWidthUnit }
            />
            {/* End Min Width controls */}
            <SelectControl
              label = "Justify items"
              value = { optionJustify }
              onChange = { (v) => { setAttributes( { optionJustify: v } ) } }
              options = { createOptions(justifyOptions) }
            />
          </PanelBody>
          <PanelBody
            title = "Spacings"
            initialOpen = { true }
          >

            <RangeControl
              label = "Row Gap (rem)"
              value = { rowGap }
              onChange = { (v) => { setAttributes( { rowGap: v } ) } }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Column Gap (rem)"
              value = { columnGap }
              onChange = { (v) => { setAttributes( { columnGap: v } ) } }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />

            {/* Paddings */}

            <RangeControl
              label = "Padding Top (rem)"
              value = { padding[0] }
              onChange = { setPadding(0) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Padding Right (rem)"
              value = { padding[1] }
              onChange = { setPadding(1) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Padding Bottom (rem)"
              value = { padding[2] }
              onChange = { setPadding(2) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Padding Left (rem)"
              value = { padding[3] }
              onChange = { setPadding(3) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />

            {/* Margins */}

            <RangeControl
              label = "Margin Top (rem)"
              value = { margin[0] }
              onChange = { setMargin(0) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Margin Right (rem)"
              value = { margin[1] }
              onChange = { setMargin(1) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Margin Bottom (rem)"
              value = { margin[2] }
              onChange = { setMargin(2) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Margin Left (rem)"
              value = { margin[3] }
              onChange = { setMargin(3) }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />

          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar
            value = { alignment }
            onChange = { (a) => setAttributes( {
              alignment: (a === undefined) ? 'none' : a,
            }) }
          />
        </BlockControls>
        {/*
          Put ...blockProps in the root editor tag
          Otherwise copy/paste, selecting, and the block toolbar
          will not work
        */}
        <div { ...blockProps }
          className = { createClassName(
            colorSettings,
            optionLayout,
            useMaxWidth,
            blockProps.className
          ) }
          style = {{
            ['--min-width']: minWidth + minWidthUnit,
            ['--max-width']: (useMaxWidth) ? maxWidth + maxWidthUnit : null,
            ['--columns']: numColumns,
            ['--column-size']: optionColSize,

            backgroundColor: colorSettings.bgColor.color,
            color: colorSettings.textColor.color,
            textAlign: (alignment != "none") ? alignment : null,
            padding: padding.join("rem ") + "rem",
            gap: rowGap + "rem " + columnGap + "rem",
            justifyContent: optionJustify,
          }}
        >
          <InnerBlocks
            allowedBlocks = { allowed_inner_blocks }
          />
        </div>
      </>
    );
} /* BlockWithColorSettings */

registerBlockType( 'ncs4-custom-blocks/fluid-layout', {
  apiVersion: 2,

  title: 'Fluid Layout',
  icon: 'columns',
  category: 'layout',
  supports: {
    color: {
      gradients: true,
    },
  },
  attributes: {
    bgColor: {
      type: 'string',
    },
    customBgColor: {
      type: 'string',
    },
    textColor: {
      type: 'string',
    },
    customTextColor: {
      type: 'string',
    },
    alignment: {
      type: 'string',
      default: 'none',
    },
    padding: {
      type: 'array',
      default: [ 0, 0, 0, 0 ],
    },
    margin: {
      type: 'array',
      default: [ 3, 3, 3, 3 ],
    },
    optionLayout: {
      enum: layoutOptions.values(),
      default: layoutOptions.default(),
    },
    minWidth: {
      type: 'number',
      default: 0,
    },
    minWidthUnit: {
      enum: unitOptions.values(),
      default: unitOptions.default(),
    },
    minWidth2: {
      type: 'number',
      default: 0,
    },
    minWidth2Unit: {
      enum: unitOptions.values(),
      default: unitOptions.default(),
    },
    useMaxWidth: {
      type: 'boolean',
      default: false,
    },
    maxWidth: {
      type: 'number',
      default: 0,
    },
    maxWidthUnit: {
      enum: unitOptions.values(),
      default: unitOptions.default(),
    },
    rowGap: {
      type: 'number',
      default: 3,
    },
    columnGap: {
      type: 'number',
      default: 3,
    },
    optionJustify: {
      enum: justifyOptions.values(),
      default: justifyOptions.default(),
    },
    numColumns: {
      type: "number",
      default: 3,
    },
    optionColSize: {
      enum: colSizeOptions.values(),
      default: colSizeOptions.default(),
    },
  },

  edit: withColors({
    bgColor: 'background-color',
    textColor: 'color',
  })(BlockWithColorSettings),

  save: ( {attributes} ) => {
    const {
      bgColor,
      customBgColor,
      textColor,
      customTextColor,
      alignment,
      padding,
      margin,
      optionLayout,
      minWidth,
      minWidthUnit,
      maxWidth,
      useMaxWidth,
      maxWidthUnit,
      rowGap,
      columnGap,
      optionJustify,
      numColumns,
      optionColSize,
      floatOptions,
    } = attributes;
    const blockProps = useBlockProps.save();

    const colorSettings = colorSettingsSave(
      bgColor,
      customBgColor,
      textColor,
      customTextColor,
    );
    return (
      <div
        className = { createClassName(
          colorSettings,
          optionLayout,
          useMaxWidth,
          blockProps.className
        ) }
        style = {{
          ['--min-width']: minWidth + minWidthUnit,
          ['--max-width']: (useMaxWidth) ? maxWidth + maxWidthUnit : null,
          ['--columns']: numColumns + ';',
          ['--column-size']: optionColSize,

          backgroundColor: (attributes.bgColor.slug)
            ? null
            : attributes.bgColor.color,
          color: (attributes.textColor.slug)
            ? null
            : attributes.textColor.color,
          textAlign: (alignment != "none") ? alignment : null,
          padding: padding.join("rem ") + "rem",
          margin: margin.join("rem ") + "rem",
          gap: rowGap + "rem " + columnGap + "rem",
          justifyContent: optionJustify,
        }}
      >
        <InnerBlocks.Content/>
      </div>
    );
  },
});
