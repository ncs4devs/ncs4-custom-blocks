import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionMixedEdit } from './edit.js';
import { SectionMixedSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/mixed-section', {
  apiVersion: 2,

  title: 'Mixed Section',
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
    isProChecked: {
      type: 'boolean',
      default: false,
    },
    isCollegeChecked: {
      type: 'boolean',
      default: false,
    },
    isHsChecked: {
      type: 'boolean',
      default: false,
    },
    isMarathonChecked: {
      type: 'boolean',
      default: false,
    },
  },

  edit: (props) => (
    <SectionMixedEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionMixedSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
