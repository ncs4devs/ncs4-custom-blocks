import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { BioEdit } from './edit.js';
import { BioSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/bio', {
  apiVersion: 2,

  title: 'Bio',
  icon: 'id',
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
    buttonTitle: {
      type: 'string',
      default: 'View Bio',
    },
    id: {
      type: 'number',
    },
    optionSize: {
      type: 'string',
      default: 'size-body',
    },
    name: {
      type: 'string',
    },
    fullName: {
      type: 'string',
    },
    credentials: {
      type: 'string',
    },
    position: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    img: {
      type: 'object',
    },
    alignment: {
      type: 'string',
      default: 'none',
    },
  },

  edit: (props) => (
    <BioEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <BioSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
