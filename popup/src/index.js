import { registerBlockType } from '@wordpress/blocks';
import {
  useBlockProps,
  withColors,
  getColorClassName
} from '@wordpress/block-editor';

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
      default: 0.1,
    },
    bgColor: {
      type: 'string',
    },
    customBgColor: {
      type: 'string',
    },
    buttonTitle: {
      type: 'string',
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
