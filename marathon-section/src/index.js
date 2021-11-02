import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionMarathonEdit } from './edit.js';
import { SectionMarathonSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/marathon-section', {
  apiVersion: 2,

  title: 'Marathon Section',
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
    <SectionMarathonEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionMarathonSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
