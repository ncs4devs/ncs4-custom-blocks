import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit';
import Save from './save';

registerBlockType( 'ncs4-custom-blocks/fluid-layout', {
  apiVersion: 2,

  title: 'Fluid Layout',
  icon: 'columns',
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
    padding: {
      type: 'array',
      default: [ 0, 0, 0, 0 ],
    },
    margin: {
      type: 'array',
      default: [ 0, 0, 0, 0 ],
    },
    optionLayout: {
      type: "string",
      default: "equal-grid",
    },
    minWidth: {
      type: "object",
      default: {
        value: 0,
        unit: "%",
        asString: "0%",
      },
    },
    maxWidth: {
      type: "object",
      default: {
        enabled: false,
        value: 0,
        unit: "%",
        asString: "0%",
      },
    },
    rowGap: {
      type: 'number',
      default: 3,
    },
    columnGap: {
      type: 'number',
      default: 3,
    },
    optionJustify: {
      type: "string",
      default: "space-around"
    },
    numColumns: {
      type: "number",
      default: 3,
    },
    optionColSize: {
      type: "string",
      default: "1fr",
    },
    optionVerticalAlign: {
      type: "string",
      default: ""
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
