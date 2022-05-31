import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';
import { makeAttributes } from '../../popup/src/popup';

import Edit from './edit.js';
import Save from './save.js';

const defaults = {
  popupButtonTitle: "Read More",
  popupShadow: true,
}
const attributes = Object.assign(
  makeAttributes(defaults),
  {
    name: {
      type: 'string',
      default: 'Award',
    },
    desc: {
      type: 'string',
    },
    normalizedDesc: {
      type: 'string',
    },
    recipients: {
      type: 'object',
      default: {},
    },
    displayPrevious: {
      type: 'boolean',
      default: false,
    },
    useOrgs: {
      type: 'boolean',
      default: false,
    },
  },
)

registerBlockType( 'ncs4-custom-blocks/award-card', {
  apiVersion: 2,

  title: 'Award Card',
  icon: 'awards',
  category: 'layout',
  attributes,

  edit: (props) => (
    <Edit
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps() }
    />
  ),
  save: (props) => (
    <Save
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps.save() }
    />
  ),
});
