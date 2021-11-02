import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionCollegeEdit } from './edit.js';
import { SectionCollegeSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/college-section', {
  apiVersion: 2,

  title: 'Intercollegiate Section',
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
    <SectionCollegeEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionCollegeSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
