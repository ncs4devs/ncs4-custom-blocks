import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { BPContentEdit } from './edit.js';
import { BPContentSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/bp-content', {
  apiVersion: 2,

  title: 'Best Practices Content',
  icon: 'media-document',
  category: 'layout',
  attributes: {
    subtopics: {
      type: 'array',
      default: [],
    },
  },

  edit: (props) => (
    <BPContentEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <BPContentSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
