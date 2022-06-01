import Save from './save';
import Interface from '../../js/edit-component';

import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

import { withAttributes } from '../../js/hooks';
import { usePopup } from '../../popup/src/popup';

export default function Edit(props) {
  const trim = (s) => s.trim();
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      name: trim,
      fullName: trim,
      credentials: trim,
      position: trim,
      phone: trim,
      email: trim,
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

  return (
    <>
      <Interface
        { ...props }
        save = { Save }
        state = { state }
        setAttribute = { setAttribute }
        controlPanels = {[
          {
            label: "Personal info",
            controls: [
              {
                type: "image",
                label: "Bio image",
                attribute: "img",
              },
              {
                type: "text",
                label: "Name",
                help: "Name to display on page (not in popup)",
                placeholder: "Willy Wonka",
                attribute: "name",
                disabled: true,
              },
              {
                type: "text",
                label: "Full name",
                help: "Name to display in bio popup header",
                placeholder: "Dr. Willy H. Wonka",
                attribute: "fullName",
              },
              {
                type: "text",
                label: "Credentials",
                help: "Additional credentials, e.g. Ph.D.",
                placeholder: "Ph.D., Doctor of Chocolatiering",
                attribute: "credentials",
              },
              {
                type: "text",
                label: "Position",
                help: "The person's official job title",
                placeholder: "Director of Candy Research and Development",
                attribute: "position",
              },
            ],
          },
          {
            label: "Contact info",
            controls: [
              {
                type: "phone",
                attribute: "phone",
              },
              {
                type: "email",
                attribute: "email",
              },
            ],
          },
          popupPanel,
        ]}
      />
      <BlockControls>
        <AlignmentToolbar
          value = { state.alignment }
          onChange = { (a) => setAttribute("alignment")(
            (a === undefined) ? 'none' : a
          )}
        />
      </BlockControls>
    </>
  );
}
