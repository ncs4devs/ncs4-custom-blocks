import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionProEdit } from './edit.js';
import { SectionProSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/pro-section', {
  apiVersion: 2,

  title: 'Professional Section',
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
    <SectionProEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionProSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
