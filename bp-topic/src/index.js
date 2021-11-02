import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { BPTopicEdit } from './edit.js';
import { BPTopicSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/bp-topic', {
  apiVersion: 2,

  title: 'Best Practices Topic',
  icon: 'links',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    img: {
      type: 'object',
    },
    svg: {
      type: 'string',
    },
  },

  edit: (props) => (
    <BPTopicEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <BPTopicSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
