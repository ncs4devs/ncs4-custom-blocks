import React from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { OptionsControl, UnitControl } from '../../js/selectControls';
import { withAttributes } from '../../js/hooks';

import Save from './save.js';

function verifyLink(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "text": s => s.trim(),
      "link": (s, attrs) => verifyLink(s) ? s : attrs.link
    }
  );

  return <>
    <Save
      attributes = { state }
      blockProps = { props.blockProps }
      backend = { true }
    />
    <InspectorControls>
      <PanelBody
        title = "Button settings"
        initialOpen = { true }
      >
        <TextControl
          label = "Button text"
          value = { state.text }
          onChange = { setAttribute("text") }
          placeholder = "Click me!"
        />
        <TextControl
          label = "Button link"
          value = { state.link }
          onChange = { setAttribute("link")}
          placeholder = "https://ncs4.usm.edu/"
        />
        <OptionsControl
          options = {[
            {
              attribute: "doNewTab",
              label: "Open link in new tab",
              value: state.doNewTab,
            },
            {
              attribute: "style",
              label: "Button style",
              value: state.style,
              choices: [
                {value: "blue", label: "Blue"},
                {value: "yellow", label: "Yellow"},
                {value: "gold", label: "Gold"},
                {value: "link", label: "None"},
              ],
            }
          ]}
          onChange = { setState }
        />
      </PanelBody>
    </InspectorControls>
  </>
}
