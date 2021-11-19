import { registerBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

import { PopupEdit } from './edit.js';
import { PopupSave } from './save.js';

let colors = select("core/block-editor").getSettings().colors;
const getColorBySlug = (slug) => {
  let color = colors.filter( (obj) => obj.slug === slug )[0]
  return color ? color.color : null;
}

registerBlockType( 'ncs4-custom-blocks/popup', {
  apiVersion: 2,

  title: 'Popup',
  icon: 'testimonial',
  category: 'layout',
  attributes: {
    overlayOpacity: {
      type: 'number',
      default: 0.9,
    },
    bgColor: {
      type: 'object',
      default: {
        color: getColorBySlug('white-bright'),
        slug: 'white-bright',
      },
    },
    textColor: {
      type: 'object',
      default: {
        color: getColorBySlug('secondary-1c'),
        slug: 'secondary-1c',
      },
    },
    buttonTitle: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    optionSize: {
      type: 'string',
      default: 'size-body',
    },
  },

  edit: (props) => (
    <PopupEdit
      { ...props }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <PopupSave
      { ...props }
      blockProps = { useBlockProps.save() }
    />
  ),
});
