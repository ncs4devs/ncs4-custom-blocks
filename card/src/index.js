import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';

import Edit from './edit.js';
import Save from './save.js';

const attributes = {
  bannerBg: {
    type: "json",
    source: "attribute",
    attribute: "data-banner-background",
    selector: ".ncs4-card__banner",
    default: {
      color: "#18243E",
      slug: "primary-1",
    },
  },
  bannerColor: {
    type: "json",
    source: "attribute",
    attribute: "data-banner-color",
    selector: ".ncs4-card__banner",
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
  bannerTag: {
    type: "string",
    source: "attribute",
    attribute: "data-banner-tag",
    selector: ".ncs4-card__banner",
    default: "p",
  },
  margin: {
    type: "json",
    source: "attribute",
    attribute: "data-margin",
    selector: ".ncs4-card",
    default: [3, 0, 3, 0],
  },
  useImg: {
    type: "bool",
    source: "attribute",
    attribute: "data-use-image",
    selector: ".ncs4-card__banner",
    default: false,
  },
  img: {
    type: 'json',
    source: "attribute",
    attribute: "data-image",
    selector: ".ncs4-card__banner",
    default: {},
  },
  imgSize: {
    type: 'number',
    source: "attribute",
    attribute: "data-icon-width",
    selector: ".ncs4-card__banner",
    default: 64,
  },
};

registerBlockType( "ncs4-custom-blocks/card", {
  apiVersion: 2,

  title: 'Card',
  icon: 'index-card',
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
