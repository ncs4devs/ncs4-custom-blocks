import Save from './save.js';

import Interface, { colorToAttribute } from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {},
  );

  return (
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = { [
        {
          label: "General",
          controls: [
            {
              type: "choice",
              label: [
                "Margin Top (rem)",
                "Margin Right (rem)",
                "Margin Bottom (rem)",
                "Margin Left (rem)",
              ],
              attribute: "margin",
              min: 0,
              max: 5,
              step: 0.5,
              toolTipRender: (v) => String(v) + "rem",
            },
            {
              type: "choice",
              label: [
                "Padding Top (rem)",
                "Padding Right (rem)",
                "Padding Bottom (rem)",
                "Padding Left (rem)",
              ],
              attribute: "padding",
              min: 0,
              max: 5,
              step: 0.5,
              toolTipRender: (v) => String(v) + "rem",
            },
            {
              type: "color",
              label: "Background color",
              attribute: "bgColor",
            },
            {
              type: "color",
              label: "Text color",
              attribute: "color",
            },
          ]
        },
      ] }
    />
  );
}
