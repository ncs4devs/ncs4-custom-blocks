import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { parseAttributes } from '../../js/utils';

import Edit from './edit.js';

const attributes = {
  courseCode: {
    type: "string",
    default: '',
  },
};

registerBlockType( "ncs4-custom-blocks/course-schedule", {
  apiVersion: 2,

  title: 'Course Schedule',
  icon: 'index-card',
  category: 'widget',
  attributes,

  edit: (props) => (
    <Edit
      { ...props }
      attributes = { parseAttributes(attributes, props.attributes) }
      blockProps = { useBlockProps() }
    />
  ),
});
