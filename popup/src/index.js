import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { PopupEdit } from './edit.js';
import { PopupSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/popup', {
  apiVersion: 2,

  title: 'Popup',
  icon: 'testimonial',
  category: 'layout',
  attributes: {
    overlayOpacity: {
      type: 'number',
      default: 0.9,
    },
    bgColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'white-bright',
      },
    },
    textColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'secondary-1c',
      },
    },
    buttonTitle: {
      type: 'string',
      default: 'Show',
    },
    id: {
      type: 'number',
    },
    optionSize: {
      type: 'string',
      default: 'size-body',
    },
  },

  edit: (props) => (
    <PopupEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <PopupSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
