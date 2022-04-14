import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit.js';
import Save from './save.js';

registerBlockType( 'ncs4-custom-blocks/button', {
  apiVersion: 2,

  title: 'Button',
  icon: 'button',
  category: 'layout',
  attributes: {
    text: {
      type: "string",
      default: "Click me!",
      source: "text",
      selector: "a",
    },
    link: {
      type: "string",
      default: "",
      source: "attribute",
      attribute: "href",
      selector: "a",
    },
    doNewTab: {
      type: "boolean",
      default: false,
      source: "attribute",
      attribute: "data-new-tab",
      selector: "a",
    },
    style: {
      type: "string",
      default: "blue",
      source: "attribute",
      attribute: "data-style",
      selector: "a",
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
