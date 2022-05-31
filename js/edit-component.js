/* High-level abstraction for common block patterns
 * Assumes that the edit block calls the save block for markup
 * and just adds on some backend logic and controls for handling attributes
 */

import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { UnitControl, OptionsControl } from './SelectControls';
import ColorSelector from './ColorSelector';
import { ImageEdit, onImageChange } from './ImageControl';

/* Example usage:

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "text": s => s.trim(),
      "link": (s, attrs) => verifyLink(s) ? s : attrs.link,
    },
  );

  return (
    <Interface
      { ...props }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "Panel Label",
          controls: [
            {
              type: "text",
              label: "Text input",
              attribute: "textAttr",
              placeholder: "Type here...",
            },
            {
              type: "unit",
              label: "Unit input",
              help: "Use the slider below to... "
              attribute: "unitAttr",
              useToggle: true,
              toggleLabel: "Use unit",
              toggleHelp: "Help text",
              selectorLabel: "Units",
              selectorChoices: [
                { value: "%", label: "%", min: 0, max: 100, step: 1, markStep: 10 },
              ],
              sliderLabel: "Value",
              sliderHelp: "Help text",
            },
            {
              type: "choice",
              label: "Enumerable input",
              attribute: "choiceAttr",
              min: 2,
              max: 10,
              step: 1, // defaults to 1
            },
            {
              type: "choice",
              label: "Enumerable input 2",
              attribute: "choiceAttr2",
              choices: [
                { value: "1fr", label: "Equal Width" },
                { value: "auto", label: "Auto Width" },
              ],
              multiple: false,
            },
            {
              type: "choice", // creates a toggle option
              label: "Enumerable input 3",
              attribute: "choiceAttr3",
              default: false,
              invertValue: false,
            },
          ],
        },
        {
          label: "Panel 2",
          controls: [
            ...
          ],
        },
      ] }
    />
  );

}

*/

export default function Interface(props) {
  let Save = props.save;
  if (!Save) {
    console.error("Prop 'save' is null or undefined. React component expected");
  }

  return <>
    <div
      style = {{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Save
        { ...props }
        style = {{
          ...props.style,
          flex: "0 1 840px",
        }}
        attributes = { props.state }
        blockProps = { props.blockProps }
        backend = { true }
      />
    </div>
    <InspectorControls>
      { props.controlPanels.map(
        (panel, key) =>
          <ControlPanel
            { ...panel }
            state = { props.state }
            setAttribute = { props.setAttribute }
            key = { key }
          />
      )}
    </InspectorControls>
  </>
}

// removes extra editor-side color data
export function colorToAttribute(colorObj) {
  return {
    color: colorObj.color,
    slug: colorObj.slug,
  }
}

function ControlPanel(props) {
  let initialOpen = props.initialOpen != null ? props.initialOpen : true;
  let setAttribute = props.setAttribute;
  let state = props.state;

  return (
    <PanelBody
      title = { props.label }
      initialOpen = { initialOpen }
    >
      { props.controls.map( (control, key) => {
        if (control.disabled) {
          return null;
        }
        switch (control.type) {
          case "text": {
            return (
              <TextControl
                { ...control }
                key = { key }
                value = { state[control.attribute] }
                onChange = { setAttribute(control.attribute) }
              />
            );

            break;
          }

          case "unit": {
            return (
              <UnitControl
                { ...control }
                key = { key }
                toggleSelector = { control.useToggle
                  ? {
                    attribute: "enabled",
                    label: control.toggleLabel,
                    help: control.toggleHelp,
                    value: state[control.attribute.enabled],
                  }
                  : {}
                }
                unitSelector = {{
                  label: control.selectorLabel,
                  value: state[control.attribute.unit],
                  units: control.selectorChoices,
                }}
                slider = {{
                  label: control.sliderLabel,
                  help: control.sliderHelp,
                  value: state[control.attribute.value],
                }}
                onChange = { (obj) =>
                  setAttribute(control.attribute)(obj[control.attribute])
                }
              />
            );

            break;
          }

          case "color": {
            return (
              <ColorSelector
                { ...control }
                key = { key }
                value = { state[control.attribute].color }
                onChange = { setAttribute(control.attribute) }
              />
            );

            break;
          }

          case "image": {
            return (
              <ImageEdit
                { ...control }
                onChange = { (i) => onImageChange(
                  i,
                  setAttribute(control.attribute),
                )}
                img = { state[control.attribute] }
              />
            );

            break;
          }

          case "choice": {
            return (
              <OptionsControl
                options = { [
                  {
                    ...control,
                    value: state[control.attribute],
                  }
                ] }
                key = { key }
                type = { control.type }
                onChange = { (obj) =>
                  setAttribute(control.attribute)(obj[control.attribute])
                }
              />
            );
          }

          default: {
            console.error("ControlPanel: Invalid control type '" + control.type + "'");
          }
        }
      } ) }
    </PanelBody>
  );
}
