import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';
import { makeAttributes } from '../../popup/src/popup';

import Edit from './edit';
import Save from './save';

const defaults = {
  popupButtonTitle: "View Bio",
  popupLinkStyle: "ncs4-button ncs4-button__blue",
}
const attributes = Object.assign(
  makeAttributes(defaults),
  {
    name: {
      type: "string",
    },
    fullName: {
      type: "string",
    },
    credentials: {
      type: "string",
    },
    position: {
      type: "string",
      source: "html",
      selector: ".ncs4-bio-position",
    },
    phone: {
      type: "string",
    },
    email: {
      type: "string",
    },
    img: {
      type: "object",
    },
    alignment: {
      type: "string",
      default: "none",
    },
  },
);

registerBlockType( 'ncs4-custom-blocks/bio', {
  apiVersion: 2,

  title: 'Bio',
  icon: 'id',
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
