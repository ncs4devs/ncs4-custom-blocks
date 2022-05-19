import { InnerBlocks, RichText } from '@wordpress/block-editor';

import Popup from './popup.js';

export default function Save(props) {
  return (
    <div { ...props.blockProps }
      className = { [
        props.blockProps.className,
        "ncs4-popup",
        Popup.className,
      ].join(' ')}
    >
      <Popup
        backend = { props.backend }
        attributes = { props.attributes }
      >
        { props.backend
          ?
          <>
            <RichText
              tagName="h1"
              value = { props.attributes.popupTitle }
              onChange = { props.setAttribute("popupTitle") }
              placeholder = "Popup"
            />
            <InnerBlocks/>
          </>
          :
          <>
            <Popup.Header>
              <Popup.Title title={ props.attributes.popupTitle }/>
            </Popup.Header>
            <Popup.Body>
              <InnerBlocks.Content/>
            </Popup.Body>
          </>
        }
      </Popup>
    </div>
  );
}
