import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { DescriptionPopupEdit } from './edit.js';
import { DescriptionPopupSave } from './save.js';

registerBlockType( 'ncs4-custom-blocks/description-popup', {
  apiVersion: 2,

  title: 'Description Popup',
  icon: 'format-aside',
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
      default: 'Read More',
    },
    name: {
      type: 'string',
      default: 'Title',
    },
    desc: {
      type: 'string',
      default: "Lorem ipsum dolor sit amet",
    },
    normalizedDesc: {
      type: 'string',
    },
    img: {
      type: 'object',
    },
    showButton: {
      type: 'boolean',
      default: true,
    },
    buttonText: {
      type: 'string',
      default: "More info",
    },
    buttonLink: {
      type: 'string',
      default: ""
    },
    buttonStyle: {
      type: 'string',
      default: "blue",
    },
  },

  edit: (props) => (
    <DescriptionPopupEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <DescriptionPopupSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
