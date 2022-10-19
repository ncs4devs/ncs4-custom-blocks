import Save from './save';

import Interface from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      "pageLink": (s) => s.trim(),
    },
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
              type: "text",
              label: "Twitter URL",
              attribute: "pageLink",
            },
          ]
        },
      ] }
    />
  );
}
