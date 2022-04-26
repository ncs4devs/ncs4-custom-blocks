import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'ncs4-custom-blocks/card', {
  apiVersion: 2,

  title: 'Card',
  icon: 'index-card',
  category: 'layout',
  attributes: {
    bannerBg: {
      type: "object",
      default: {
        color: "#18243E",
        slug: "primary-1",
      },
    },
    bannerColor: {
      type: "object",
      default: {
        color: "#e6e6e6",
        slug: "white-dark",
      },
    },
    bannerText: {
      type: "string",
      source: "html",
      selector: ".ncs4-card__banner-text",
    },
    margin: {
      type: "array",
      default: [0, 0, 0, 0],
    },
    useImg: {
      type: "boolean",
      source: "attribute",
      attribute: "data-use-image",
      selector: ".ncs4-card__banner",
      default: false,
    },
    img: {
      type: 'object',
    },
    imgSize: {
      type: 'number',
      source: "attribute",
      attribute: "data-icon-width",
      selector: ".ncs4-card__banner",
      default: 64,
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
