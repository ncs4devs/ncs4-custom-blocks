import Save from './save';
import Interface from '../../js/edit-component';

import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

import { withAttributes } from '../../js/hooks';
import { useColor } from '../../js/ColorSelector';

let allowed_inner_blocks = [
  'ncs4-custom-blocks/fluid-layout-item',
];

let paddingMax = 5;
let paddingStep = 0.5;
let units = [
  {
    value: "%",
    label: "%",
    min: 0,
    max: 100,
    step: 1,
    markStep: 10,
  },
  {
    value: "vw",
    label: "vw",
    min: 0,
    max: 100,
    markStep: 10,
  },
  {
    value: "ch",
    label: "ch",
    min: 10,
    max: 50,
    step: 5,
  },
  {
    value: "em",
    label: "em",
    min: 0,
    max: 100,
    markStep: 10,
  },
  {
    value: "rem",
    label: "rem",
    min: 10,
    max: 100,
    markStep: 10,
  },
];

let layoutUsesMaxWidth = [
  "equal-grid",
  "equal-columns",
  "floated-image",
  "inline-block",
];

let layoutUsesFixedColumns = [
  "fixed-grid",
  "fixed-columns",
];

let layoutOptions = [
  { value: "equal-grid", label: "Equal Grid" },
  { value: "equal-columns", label: "Equal Columns" },
  { value: "auto-grid", label: "Auto Grid" },
  //{ value: "fixed-grid", label: "Fixed Grid" }, // Unsafe, causes shrinkage or overflow
  { value: "fixed-columns", label: "Fixed Columns" },
  { value: "floated-image", label: "Floated Image" },
  { value: "inline-block", label: "Inline Block" },
];

let justifyOptions = [
  { value: "space-around", label: "Space Around" },
  { value: "space-between", label: "Space Between" },
  { value: "space-evenly", label: "Space Evenly" },
  { value: "left", label: "Left", },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
  { value: "normal", label: "None" },
];

let colSizeOptions = [
  { value: "1fr", label: "Equal Width" },
  { value: "auto", label: "Auto Width" },
];

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {},
  );

  return <>
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      allowed_inner_blocks = { allowed_inner_blocks }
      controlPanels = {[
        {
          label: "Color",
          initialOpen: false,
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
          ],
        },
        {
          label: "Layout settings",
          controls: [
            {
              type: "choice",
              label: "Layout type",
              attribute: "optionLayout",
              choices: layoutOptions,
            },
            // Inline-Block controls
            {
              type: "choice",
              label: "Vertical align",
              help: "How items should be aligned vertically with one another",
              attribute: "optionVerticalAlign",
              disabled: state.optionLayout !== "inline-block",
              choices: [
                { value: "top", label: "Top" },
                { value: "middle", label: "Middle" },
                { value: "bottom", label: "Bottom" },
              ],
            },
            // Max width controls
            {
              type: "unit",
              label: "Maximum width settings",
              help: "The max width that the entire content block can have",
              attribute: "maxWidth",
              useToggle: true,
              toggleLabel: "Use max width",
              toggleHelp: state.maxWidth.enabled
                ? "The block has a max width"
                : "The block will take up as much space as possible",
              selectorLabel: "Units",
              selectorChoices: units,
              sliderLabel: "Max width",
              disabled: !layoutUsesMaxWidth.includes(state.optionLayout),
            },
            // Min width controls
            {
              type: "unit",
              label: "Minimum width settings",
              help: "The minimum width the content block can have",
              attribute: "minWidth",
              selectorLabel: "Units",
              selectorChoices: units,
              sliderLabel: "Min width",
            },
            // Fised Column controls
            {
              type: "choice",
              label: "Columns",
              min: 2,
              max: 10,
              attribute: "numColumns",
              disabled: !layoutUsesFixedColumns.includes(state.optionLayout),
            },
            {
              type: "choice",
              label: "Column width",
              attribute: "optionColSize",
              choices: colSizeOptions,
              disabled: !layoutUsesFixedColumns.includes(state.optionLayout),
            }
          ],
        },
        {
          label: "Spacings",
          controls: [
            {
              type: "choice",
              label: "Justify items",
              attribute: "optionJustify",
              choices: justifyOptions,
            },
            {
              type: "choice",
              label: "Row gap (rem)",
              min: 0,
              max: paddingMax,
              step: paddingStep,
              attribute: "rowGap",
            },
            {
              type: "choice",
              label: "Column gap (rem)",
              min: 0,
              max: paddingMax,
              step: paddingStep,
              attribute: "columnGap",
            },
            {
              type: "choice",
              label: [
                "Padding Top (rem)",
                "Padding Right (rem)",
                "Padding Bottom (rem)",
                "Padding Left (rem)",
              ],
              min: 0,
              max: paddingMax,
              step: paddingStep,
              tooltipRender: v => String(v) + "rem",
              attribute: "padding",
            },
            {
              type: "choice",
              label: [
                "Margin Top (rem)",
                "Margin Right (rem)",
                "Margin Bottom (rem)",
                "Margin Left (rem)",
              ],
              min: 0,
              max: paddingMax,
              step: paddingStep,
              tooltipRender: v => String(v) + "rem",
              attribute: "margin",
            }
          ],
        }
      ]}
    />
    <BlockControls>
      <AlignmentToolbar
        value = { state.alignment }
        onChange = { (a) => setAttribute("alignment")(
          state.alignment === undefined ? "none" : a
        )}
      />
    </BlockControls>
  </>
}
