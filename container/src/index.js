import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'ncs4-custom-blocks/container', {
  apiVersion: 2,

  title: 'Container',
  icon: 'editor-table',
  category: 'layout',
  attributes: {
    margin: {
      type: "array",
      default: [0, 0, 0, 0],
    },
    padding: {
      type: "array",
      default: [0, 0, 0, 0],
    },
    color: {
      type: "object",
      default: {
        color: "#171717",
        slug: "secondary-1c"
      }
    },
    bgColor: {
      type: "object",
      default: {
        color: null,
        slug: null,
      },
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
