import Save from './save';

import { usePopup } from './popup.js';
import Interface from '../../js/edit-component';
import { withAttributes } from '../../js/hooks';

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      popupButtonTitle: (s) => s.trim(),
      popupTitle: (s) => s.trim(),
    },
  );

  let disabledSettings = {};
  let popupPanel = usePopup(
    props.blockProps.clientId,
    state,
    setAttribute,
    disabledSettings
  );

  return (
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = {[
        popupPanel,
      ]}
    />
  );
}
