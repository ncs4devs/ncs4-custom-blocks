import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'ncs4-custom-blocks/style-block', {
  apiVersion: 2,

  title: 'Style',
  icon: 'admin-appearance',
  category: 'design',
  attributes: {
    id: {
      type: 'string',
    },
    rules: {
      type: 'array',
      default: [],
    },
    style: {
      type: 'string',
    },
  },

  edit: (props) => (
    <Edit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <Save
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
