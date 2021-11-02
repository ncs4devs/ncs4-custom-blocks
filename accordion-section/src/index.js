import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import { dispatch, select } from '@wordpress/data';
import {
  InnerBlocks,
  useBlockProps,
  withColors,
  getColorClassName,
  BlockControls,
  AlignmentToolbar,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

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
const createClassName = (colorSettings, classes) => [
    'ncs4-accordion',
    colorSettings.bgColor.class,
    colorSettings.textColor.class,
].join(' ') + ' ' + classes

const BlockWithColorSettings = (props) => {
  var {
    bgColor,
    textColor,
    attributes: {
      title,
      inheritedTitle,
      checkboxId,
      alignment,
    },
    setAttributes,
    clientId,
  } = props;
  const blockProps = useBlockProps();

  const colorSettings = colorSettingsEdit(bgColor, textColor);

  // Set checkbox id to ClientId
  if (checkboxId == undefined) {
    setAttributes( {checkboxId: "ncs4-accordion-toggle_" + clientId} );
  }

  // Attribute setters and title inheritance

  const onTitleChange = (t) => { setAttributes( {title: t} ) }

  // Passes title to children. Gets laggy with many children if put in onChange
  const onTitleChangeComplete = (t) => {
    onTitleChange(t);
    // Pass title to children
    var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
    children.forEach( (child) => {
      dispatch('core/block-editor').updateBlockAttributes(child.clientId, {inheritedTitle: t})
    });
  }

  // Grab title from parents
  if (!title) {
    var parentArr = select('core/block-editor').getBlockParents(clientId);
    var parent;
    // Iterate up through parents until you find a section
    for (let i = parentArr.length - 1; i >= 0; i--) {
      if ( select('core/block-editor').getBlocksByClientId(parentArr[i])[0].name.match(/^ncs4-custom-blocks\/[\w]+-section$/) ) {
        parent = parentArr[i];
        break;
      }
    }

    const parentAtts = select('core/block-editor').getBlockAttributes(parent);
    if (
           parentAtts != null
        && typeof parentAtts === 'object'
        && typeof parentAtts.title === 'string'
      ) {
      if ( parentAtts.title != null && parentAtts.title != "" ) {
        setAttributes( {inheritedTitle: parentAtts.title} )
      } else {
        setAttributes( {inheritedTitle: parentAtts.inheritedTitle} )
      }
    }
  }

  return (
    <>
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
        className = { createClassName(colorSettings, blockProps.className) }
        style = {{
          backgroundColor: colorSettings.bgColor.color,
          color: colorSettings.textColor.color,
          textAlign: alignment,
        }}
      >
        <TextControl
          className = "ncs4-custom-blocks-accordion-section-title ncs4-custom-blocks-section-title"
          onChange = { onTitleChange }
          onChangeComplete = { onTitleChangeComplete }
          value = { title }
          placeholder = "Section Title"
        />
        <InnerBlocks/>
      </div>
    </>
  );
}

registerBlockType( 'ncs4-custom-blocks/accordion-section', {
  apiVersion: 2,

  title: 'Accordion Section',
  icon: 'editor-ul',
  category: 'layout',
  supports: {
    color: {
      gradients: true,
    },
  },
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title',
    },
    inheritedTitle: {
      type: 'string'
    },
    checkboxId: {
      type: 'string'
    },
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
  },

  edit: withColors({
    bgColor: 'background-color',
    textColor: 'color',
  })(BlockWithColorSettings),

  save: ( {attributes} ) => {
    const {
      title,
      inheritedTitle,
      checkboxId,
      bgColor,
      customBgColor,
      textColor,
      customTextColor,
      alignment,
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
        className = { createClassName(colorSettings, blockProps.className) }
        style = {{
          backgroundColor: colorSettings.bgColor.color,
          color: colorSettings.textColor.color,
          textAlign: alignment,
        }}
      >
        <input
          id = { checkboxId }
          className = "ncs4-accordion-toggle"
          type = "checkbox"
        />
        <button
          id = { "btn-" + checkboxId }
          className = "ncs4-custom-blocks-accordion-section-title-area ncs4-custom-blocks-section-title-area"
          onClick = { "toggleChecked('" + checkboxId + "')" }
          title = "Expand topic"
        >
        { title
          ? <span class="section-title">{ title }</span>
          : <span class="section-title_inherited">{ inheritedTitle }</span>
        }
        </button>
        <div className = "ncs4-accordion-inner">
          <InnerBlocks.Content/>
        </div>
      </div>
    );
  },
});
