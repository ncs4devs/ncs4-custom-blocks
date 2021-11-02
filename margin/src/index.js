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
  ToggleControl,
  RadioControl,
  RangeControl,
} from '@wordpress/components';

/* To add new sizes:
  Add an identifier to the enum `optionSize` attribute
  Add an option to the options field of the RadioControl element in edit()
  Add css rule for nsc4-site-margin__size-{optionSize} in margin.scss
*/

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
const createClassName = (colorSettings, noPadding, optionSize, classes) => [
    'ncs4-site-margin',
    colorSettings.bgColor.class,
    colorSettings.textColor.class,
    (noPadding) ? "no-padding" : null,
    "ncs4-site-margin__size-" + optionSize,
].join(' ') + ' ' + classes

const BlockWithColorSettings = (props) => {
    const {
      bgColor,
      textColor,
      attributes: {
        alignment,
        noPadding,
        optionSize,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom,
      },
      setAttributes,
      clientId,
    } = props;
    const blockProps = useBlockProps();

    /* Check for color classes */
    const colorSettings = colorSettingsEdit(bgColor, textColor);
    const paddingMax = 4;
    const paddingStep = 0.5;

    return (
      <>
        <InspectorControls>
          <PanelBody
            title = "General"
            initialOpen = { true }
          >
            <ToggleControl
              label = "Padding (Left & Right)"
              help = {
                noPadding
                  ? "Left-Right Padding disabled (Use for layout)"
                  : "Left-Right Padding enabled (Use for text)"
              }
              checked = { !noPadding }
              onChange = { (b) => { setAttributes( { noPadding: !b } ) } }
            />
            <RadioControl
              label = "Content size (width)"
              help = "Max width of content area"
              selected = { optionSize }
              options = { [
                {
                  label: "Max (Full width, no margin)",
                  value: "max",
                },
                {
                  label: "Large (Use for layout)",
                  value: "large",
                },
                {
                  label: "Small (Use for body text)",
                  value: "small",
                },
              ]}
              onChange = { (v) => { setAttributes( { optionSize: v } ) } }
            />
            <RangeControl
              label = "Padding Top (rem)"
              value = { paddingTop }
              onChange = { (v) => { setAttributes( { paddingTop: v } ) } }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Padding Bottom (rem)"
              value = { paddingBottom }
              onChange = { (v) => { setAttributes( { paddingBottom: v } ) } }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Margin Top (rem)"
              value = { marginTop }
              onChange = { (v) => { setAttributes( { marginTop: v } ) } }
              min = { 0 }
              max = { paddingMax }
              step = { paddingStep }
              marks = { true }
            />
            <RangeControl
              label = "Margin Bottom (rem)"
              value = { marginBottom }
              onChange = { (v) => { setAttributes( { marginBottom: v } ) } }
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
            noPadding,
            optionSize,
            blockProps.className
          ) }
          style = {{
            backgroundColor: colorSettings.bgColor.color,
            color: colorSettings.textColor.color,
            textAlign: (alignment != "none") ? alignment : null,
            paddingTop: paddingTop + "rem",
            paddingBottom: paddingBottom + "rem",
            marginTop: marginTop + "rem",
            marginBottom: marginBottom + "rem",
          }}
        >
          <InnerBlocks/>
        </div>
      </>
    );
} /* BlockWithColorSettings */

registerBlockType( 'ncs4-custom-blocks/margin', {
  apiVersion: 2,

  title: 'Site Margin',
  icon: 'editor-table',
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
    noPadding: {
      type: 'boolean',
      default: false,
    },
    optionSize: {
      enum: [ 'max', 'large', 'small' ],
      default: 'small',
    },
    paddingTop: {
      type: 'number',
      default: 3,
    },
    paddingBottom: {
      type: 'number',
      default: 3,
    },
    marginTop: {
      type: 'number',
      default: 3,
    },
    marginBottom: {
      type: 'number',
      default: 3,
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
      noPadding,
      optionSize,
      alignment,
      paddingTop,
      paddingBottom,
      marginTop,
      marginBottom,
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
          noPadding,
          optionSize,
          blockProps.className
        ) }
        style = {{
          backgroundColor: colorSettings.bgColor.color,
          color: colorSettings.textColor.color,
          textAlign: (alignment != "none") ? alignment : null,
          paddingTop: paddingTop + "rem",
          paddingBottom: paddingBottom + "rem",
          marginTop: marginTop + "rem",
          marginBottom: marginBottom + "rem",
        }}
      >
        <InnerBlocks.Content/>
      </div>
    );
  },
});
