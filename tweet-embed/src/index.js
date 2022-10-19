import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';

import Edit from './edit.js';
import Save from './save.js';

const attributes = {
  pageLink: {
    type: "string",
    source: "attribute",
    attribute: "data-page-link",
    selector: ".ncs4-tweet-embed",
    default: "",
  },
};

registerBlockType( "ncs4-custom-blocks/tweet-embed", {
  apiVersion: 2,

  title: 'Tweet Embed',
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
