import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit';
import Save from './save';

registerBlockType( 'ncs4-custom-blocks/margin', {
  apiVersion: 2,

  title: 'Site Margin',
  icon: 'editor-table',
  category: 'layout',
  attributes: {
    bgColor: {
      type: 'object',
      default: {
        color: null,
        slug: null,
      },
    },
    textColor: {
      type: 'object',
      default: {
        color: null,
        slug: null,
      },
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
      type: 'string',
      default: 'small',
    },
    verticalPadding: {
      type: 'array',
      default: [3, 3],
    },
    verticalMargin: {
      type: 'array',
      default: [3, 3],
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
