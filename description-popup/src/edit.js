import Save from './save';
import Interface from '../../js/edit-component';

import { useEffect } from 'react';
import { normalizeStringLength } from '../../js/utils';
import { withAttributes } from '../../js/hooks';
import { usePopup } from '../../popup/src/popup.js';

const normalizedDescLength = 400; // Number of chars for the short description

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      name: (s) => s.trim(),
      desc: (s) => s.trim(),
      buttonText: (s) => s.trim(),
    },
  );

  let disabledSettings = {
    popupOverlayOpacity: true,
  };

  let popupPanel = usePopup(
    props.blockProps.clientId,
    state,
    setAttribute,
    disabledSettings,
  );

  // Normalize the description
  useEffect( () => {
    if (!state.desc) {
      state.desc = "";
    }
    setAttribute("normalizedDesc")(normalizeStringLength(
      state.desc.trim(),
      normalizedDescLength,
    ));
  }, [state.desc]);

  return (
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
              type: "text",
              label: "Title",
              placeholder: "Best Practices Guide",
              attribute: "name",
            },
            {
              type: "image",
              label: "Footer image",
              attribute: "img",
            },
            {
              type: "choice",
              label: "Use footer button",
              help: state.showButton
                ? "Footer button visible"
                : "Footer button invisible",
              attribute: "showButton",
            },
            {
              type: "text",
              label: "Footer button text",
              help: "The text displayed by the button",
              attribute: "buttonText",
              disabled: !state.showButton,
            },
            {
              type: "text",
              label: "Footer button link",
              help: "The link for the button",
              attribute: "buttonLink",
              disabled: !state.showButton,
            },
          ]
        },
        popupPanel,
      ]}
    />
  );
}
