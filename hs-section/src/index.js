import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps} from '@wordpress/block-editor';

import { SectionHsEdit } from './edit.js';
import { SectionHsSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/hs-section', {
  apiVersion: 2,

  title: 'Interscholastic Section',
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
    <SectionHsEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),

  save: (props) => (
    <SectionHsSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
