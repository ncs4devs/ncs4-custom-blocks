import Save from './save';
import Interface from '../../js/edit-component';

import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

import { useColor } from '../../js/ColorSelector.js';
import { withAttributes } from '../../js/hooks';

let paddingMax = 5;
let paddingStep = 0.5;

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {},
  );
  useColor(state.bgColor, setAttribute("bgColor"));
  useColor(state.textColor, setAttribute("textColor"));

  return <>
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = {[
        {
          label: "Block settings",
          controls: [
            {
              type: "color",
              label: "Background color",
              attribute: "bgColor",
            },
            {
              type: "color",
              label: "Text color",
              attribute: "textColor",
            },
            {
              type: "choice",
              label: "Content size (width)",
              help: "Max width of content area",
              attribute: "optionSize",
              choices: [
                { value: "max", label: "Max (Full width, no margin)" },
                { value: "large", label: "Large (Use for layout)" },
                { value: "small", label: "Small (Use for body text)" },
              ],
            },
            {
              type: "choice",
              label: "Padding (Left & Right)",
              help: state.noPadding
                ? "Left-Right padding disabled (Use for layout)"
                : "Left-Right padding enabled (Use for text)",
              invertValue: true,
              attribute: "noPadding",
            },
            {
              type: "choice",
              label: [
                "Padding top (rem)",
                "Padding bottom (rem)",
              ],
              min: 0,
              max: paddingMax,
              step: paddingStep,
              tooltipRender: v => String(v) + "rem",
              attribute: "verticalPadding",
            },
            {
              type: "choice",
              label: [
                "Margin top (rem)",
                "Margin bottom (rem)",
              ],
              min: 0,
              max: paddingMax,
              step: paddingStep,
              tooltipRender: v => String(v) + "rem",
              attribute: "verticalMargin",
            },
          ]
        }
      ]}
    />
    <BlockControls>
      <AlignmentToolbar
        value = { state.alignment }
        onChange = { a => setAttribute("alignment")(
          a === undefined ? "none" : a
        )}
      />
    </BlockControls>
  </>
}
