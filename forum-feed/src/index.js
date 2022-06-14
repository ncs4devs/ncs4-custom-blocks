import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';

import Edit from './edit.js';
import Save from './save.js';

const attributes = {
  ref: {
    type: "int",
  },
  maxPosts: {
    type: "int",
    default: 5,
  },
  showNewTopicLink: {
    type: "bool",
    default: true,
  },
};

registerBlockType( "ncs4-custom-blocks/forum-feed", {
  apiVersion: 2,

  title: 'Forum Feed',
  icon: 'rss',
  category: 'widget',
  attributes,

  edit: (props) => (
    <Edit
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps() }
    />
  ),
});
