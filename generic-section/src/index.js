import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionGenericEdit } from './edit.js';
import { SectionGenericSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/generic-section', {
  apiVersion: 2,

  title: 'Generic Section',
  icon: 'editor-table',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title',
    },
    inheritedTitle: {
      type: 'string'
    },
    showTitle: {
      type: 'boolean',
      default: true,
    },
    optionCreateAnchor: {
      enum: [ 'inherit', 'disable', 'enable' ],
      default: 'inherit',
    },
    anchorSlug: {
      type: 'string',
    },
  },

  edit: (props) => (
    <SectionGenericEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionGenericSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
