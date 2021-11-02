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
  ToggleControl,
  SelectControl,
  RadioControl,
} from '@wordpress/components';
import { select } from '@wordpress/data';

/* Option variables */
/*
  To add: Just add a new entry [value, label] to the array

  **** The first entry will be the default value. *****

  If you make a new option variable, add it to the "Add option functions"
  argument array (in no particular order)
*/

var unitOptions = [
  ['%', '%'],
  ['vw', 'vw'],
  ['ch', 'ch'],
  ['em', 'em'],
  ['rem', 'rem'],
];

// These are RadioControls. If one gets a lot of options, make it a
// SelectControl instead (and move the options above this comment).

var floatOptions = [
  ['none', 'Disabled'],
  ['left', 'Left'],
  ['right', 'Right'],
];

// Add option functions
[
  unitOptions,
  floatOptions,
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
const createClassName = (colorSettings, useMaxWidth, classes) => [
    'ncs4-fluid-layout-item',
    colorSettings.bgColor.class,
    colorSettings.textColor.class,
    (useMaxWidth) ? "has-max-width" : null,
].join(' ') + ' ' + classes

const BlockWithColorSettings = (props) => {
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
        optionFloat,
      },
      setAttributes,
      clientId,
    } = props;
    const blockProps = useBlockProps();
    // Get parent's attributes
    const parentArr = select("core/block-editor").getBlockParents(clientId);
    const parent =
       select("core/block-editor")
      .getBlocksByClientId( parentArr[parentArr.length - 1] )[0];
    const optionLayout = parent.attributes.optionLayout;

    /* Check for color classes */
    const colorSettings = colorSettingsEdit(bgColor, textColor);

    // Create sidebar panel for layout-specific settings (null if panel is empty)
    function createLayoutSettings() {
      var content = [];

      if (optionLayout === 'floated-image') {
        content.push( (
          <RadioControl
            label = "Float"
            selected = { optionFloat }
            onChange = { (v) => { setAttributes( { optionFloat: v } ) } }
            options = { createOptions(floatOptions) }
          />
        ));
      }

      if (content.length > 0) {
        return (
          <PanelBody
            title = "Layout Settings"
            initialOpen = { true }
          >
            { content.map(e => e) }
          </PanelBody>
        );
      }
    }

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
      setAttributes( { maxWidthUnity: v } );
    }}

    return (
      <>
        <InspectorControls>
          { createLayoutSettings() }
          <PanelBody
            title = "Dimensions"
            initialOpen = { true }
          >
          {/* Max Width controls */}
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
              renderTooltipContent = { x => x + minWidthUnit }
            />

            {/* End Max Width controls */}
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
          </PanelBody>
          <PanelBody
            title = "Spacings"
            initialOpen = { true }
          >

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
            useMaxWidth,
            blockProps.className
          ) }
          style = {{
            ['--min-width']: minWidth + minWidthUnit,
            ['--max-width']: (useMaxWidth) ? maxWidth + maxWidthUnit : null,

            backgroundColor: colorSettings.bgColor.color,
            color: colorSettings.textColor.color,
            textAlign: (alignment != "none") ? alignment : null,
            padding: padding.join("rem ") + "rem",
            margin: margin.join("rem ") + "rem",
            float: optionFloat,
          }}
        >
          <InnerBlocks/>
        </div>
      </>
    );
} /* BlockWithColorSettings */

registerBlockType( 'ncs4-custom-blocks/fluid-layout-item', {
  apiVersion: 2,

  title: 'Fluid Layout Item',
  parent: [
    'ncs4-custom-blocks/fluid-layout',
  ],
  icon: 'grid-view',
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
      default: [ 0, 0, 0, 0 ],
    },
    minWidth: {
      type: 'number',
      default: 0,
    },
    minWidthUnit: {
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
    optionFloat: {
      enum: floatOptions.values(),
      default: floatOptions.default(),
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
      minWidth,
      minWidthUnit,
      maxWidth,
      useMaxWidth,
      maxWidthUnit,
      optionFloat,
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
          useMaxWidth,
          blockProps.className
        ) }
        style = {{
          ['--min-width']: minWidth + minWidthUnit,
          ['--max-width']: (useMaxWidth) ? maxWidth + maxWidthUnit : null,

          backgroundColor: colorSettings.bgColor.color,
          color: colorSettings.textColor.color,
          textAlign: (alignment != "none") ? alignment : null,
          padding: padding.join("rem ") + "rem",
          margin: margin.join("rem ") + "rem",
          float: optionFloat,
        }}
      >
        <InnerBlocks.Content/>
      </div>
    );
  },
});
