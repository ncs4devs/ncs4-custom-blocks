import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { AwardCardEdit } from './edit.js';
import { AwardCardSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/award-card', {
  apiVersion: 2,

  title: 'Award Card',
  icon: 'awards',
  category: 'layout',
  attributes: {
    overlayOpacity: {
      type: 'number',
      default: 0.9,
    },
    bgColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'white-bright',
      },
    },
    textColor: {
      type: 'object',
      default: {
        color: null,
        slug: 'secondary-1c',
      },
    },
    id: {
      type: 'number',
    },
    customId: {
      type: 'string',
    },
    optionSize: {
      type: 'string',
      default: 'size-body',
    },
    buttonTitle: {
      type: 'string',
      default: 'View Recipients',
    },
    name: {
      type: 'string',
      default: 'Award',
    },
    desc: {
      type: 'string',
    },
    recipients: {
      type: 'array',
      default: [],
    },
  },

  edit: (props) => (
    <AwardCardEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <AwardCardSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
