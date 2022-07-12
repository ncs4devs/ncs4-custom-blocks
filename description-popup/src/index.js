import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';
import { makeAttributes } from '../../popup/src/popup';

import Edit from './edit';
import Save from './save';

const defaults = {
  popupButtonTitle: "Read More",
}
const attributes = Object.assign(
  makeAttributes(defaults),
  {
    name: {
      type: "string",
      source: "text",
      selector: ".ncs4-description-popup__name",
      default: "Title",
    },
    desc: {
      type: "string",
      source: "html",
      selector: ".ncs4-description-popup__popup-description",
      default: "Lorem ipsum dolor sit amet",
    },
    normalizedDesc: {
      type: "string",
      source: "html",
      selector: ".ncs4-description-popup__description",
    },
    img: {
      type: "image",
      source: "query",
      selector: ".component-image",
      default: [],
      query: {
        url: {
          type: "string",
          source: "attribute",
          attribute: "src",
        },
        alt: {
          type: "string",
          source: "attribute",
          attribute: "alt",
          default: "",
        },
        mime: {
          type: "string",
          source: "attribute",
          attribute: "type",
        },
        width: {
          type: "int",
          source: "attribute",
          attribute: "width",
          default: null,
        },
        height: {
          type: "int",
          source: "attribute",
          attribute: "height",
          default: null,
        },
      },
    },
    showButton: {
      type: "boolean",
      default: true,
    },
    buttonText: {
      type: "string",
      default: "More info",
    },
    buttonLink: {
      type: "string",
      default: "",
    },
    buttonStyle: {
      type: "string",
      default: "blue",
    },
  },
);

registerBlockType( 'ncs4-custom-blocks/description-popup', {
  apiVersion: 2,

  title: 'Description Popup',
  icon: 'format-aside',
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
