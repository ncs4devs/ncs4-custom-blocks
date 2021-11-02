import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { BPSubtopicEdit } from './edit.js';
import { BPSubtopicSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/bp-subtopic', {
  apiVersion: 2,

  title: 'Best Practices Subtopic',
  parent: [
    'ncs4-custom-blocks/bp-content',
  ],
  icon: 'admin-page',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      default: "Title",
    },
    link: {
      type: 'string',
      default: "",
    },
    id: {
      type: 'number',
      default: -1,
    },
  },

  edit: (props) => (
    <BPSubtopicEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <BPSubtopicSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
