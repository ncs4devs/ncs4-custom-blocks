import Interface from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';
import { useState, useEffect } from 'react';
import { ServerSideRender } from '@wordpress/editor';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
  );

  return (
    <Interface
      { ...props }
      save = { Markup }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "General",
          controls: [
            {
              type: "text",
              label: "Course Code",
              help: "Specific Code for the Schedule to display",
              attribute: "courseCode",
            },
          ]
        },
      ] }
    />
  );
}



function Markup(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;

  return (
    <div { ...blockProps }
      { ...{
        "course-code": attributes.courseCode,
      } }
      className = {
        [
          "ncs4-course-schedule",
          blockProps.className,
        ].join(' ')
      }
    >
      <ServerSideRender
        block = { props.name }
        attributes = { props.attributes }
      />
    </div>
  )
}
