import Save from './save';
import Interface from '../../js/edit-component';

import { useEffect } from 'react';
import {
  RegistryProvider,
  createRegistry,
  useRegistry,
  useSelect,
  useDispatch,
} from '@wordpress/data';

import { normalizeStringLength } from '../../js/utils';
import { usePopup } from '../../popup/src/popup';
import { withAttributes, useOnce } from '../../js/hooks';
import {
  registerStore,
  getRecipientData,
  storeName,
  initializeStore,
}  from './recipients';

const normalizedDescLength = 400; // Number of chars for the short description

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      name: (s) => s.trim(),
      desc: (s) => s.trim(),
    }
  );

  let disabledSettings = {
    popupBgColor: true,
    popupTextColor: true,
    popupShadow: true,
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

  // Award recipients store
  let registry = useRegistry();
  let name = storeName(props.blockProps.id);
  useEffect( () => {
    registerStore(name);

    initializeStore(
      name,
      registry,
      props.attributes.recipients,
      props.attributes.useOrgs,
    );

    // using wo.data.subscribe calls the function when
    // *any* registered store updates

    registry.stores[name].subscribe(
      () => setAttribute("recipients")(getRecipientData(registry, name))
    );
  }, []);

  return (
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = {[
        {
          label: "Award info",
          controls: [
            {
              type: "text",
              label: "Award name",
              help: "Name of the award",
              placeholder: "World's Best Web Dev",
              attribute: "name",
            },
            {
              type: "choice",
              label: "Split past recipients by organization",
              help: "Leave checked to organize past recipients by their organization",
              attribute: "useOrgs",
            },
          ],
        },
        popupPanel,
      ]}
    />
  );
}
