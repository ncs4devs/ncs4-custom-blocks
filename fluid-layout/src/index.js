import { registerBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

import { FluidLayoutEdit } from './edit.js';
import { FluidLayoutSave } from './save.js';

let colors = select("core/block-editor").getSettings().colors;
const getColorBySlug = (slug) => {
  let color = colors.filter( (obj) => obj.slug === slug )[0]
  return color ? color.color : null;
}

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
      default: [ 3, 3, 3, 3 ],
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
        useMaxWidth: false,
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
  },

  edit: (props) => (
    <FluidLayoutEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <FluidLayoutSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
