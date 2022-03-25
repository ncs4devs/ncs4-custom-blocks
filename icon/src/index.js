import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'ncs4-custom-blocks/icon', {
  apiVersion: 2,

  title: 'Icon',
  icon: 'format-image',
  category: 'media',
  attributes: {
    useDashicons: {
      type: 'boolean',
      default: 'false',
    },
    dashicon: {
      type: 'string',
      source: 'attribute',
      selector: '.ncs4-icon-block',
      attribute: 'dashicon',
    },
    dashiconColor: {
      type: 'object',
      default: {
        color: null,
        slug: null,
      },
    },
    img: {
      type: 'object',
    },
    size: {
      type: 'object',
      default: {
        value: 16,
        unit: "px",
        asString: "16px",
      },
    },
    margin: {
      type: 'array',
      default: [0, 1, 0, 1],
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
