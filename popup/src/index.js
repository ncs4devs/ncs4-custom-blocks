import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';
import { makeAttributes } from './popup';

import Edit from './edit.js';
import Save from './save.js';

const attributes = Object.assign(
  makeAttributes(),
  {
    popupTitle: {
      type: "string",
      source: "html",
      selector: ".ncs4-popup__popup-title",
    },
  },
);

registerBlockType( 'ncs4-custom-blocks/popup', {
  apiVersion: 2,

  title: 'Popup',
  icon: 'testimonial',
  category: 'layout',
  attributes,

  edit: (props) => (
    <Edit
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <Save
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps.save() }
    />
  ),
});
