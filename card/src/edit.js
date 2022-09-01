import Save from './save';

import Interface from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';
import { useColor, fromColorAttribute } from '../../js/ColorSelector';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "bannerText": (s) => s.trim(),
    },
  );

  useColor(
    fromColorAttribute(state.bannerBg, true),
    setAttribute("bannerBg")
  );
  useColor(
    fromColorAttribute(state.bannerColor, false),
    setAttribute("bannerColor")
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
              label: "Use icon",
              attribute: "useImg",
            },
            {
              type: "image",
              label: "Icon",
              attribute: "img",
              disabled: !state.useImg,
            },
            {
              type: "choice",
              label: "Icon size",
              attribute: "imgSize",
              min: 32,
              max: 256,
              markStep: 32,
              step: 16,
              toolTipRender: (v) => String(v) + "px",
            },
            {
              type: "color",
              label: "Banner background color",
              attribute: "bannerBg",
            },
            {
              type: "color",
              label: "Banner text color",
              attribute: "bannerColor",
            },
            {
              type: "choice",
              label: "Banner tag",
              attribute: "bannerTag",
              choices: [
                { value: "p", label: "p" },
                { value: "h6", label: "h6" },
                { value: "h5", label: "h5" },
                { value: "h4", label: "h4" },
                { value: "h3", label: "h3" },
                { value: "h2", label: "h2" },
                { value: "h1", label: "h1" },
              ],
            },
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
          ]
        },
      ] }
    />
  );
}
