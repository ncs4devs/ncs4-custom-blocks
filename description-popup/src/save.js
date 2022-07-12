import { InnerBlocks, RichText } from '@wordpress/block-editor';

import { ImageSave } from '../../js/ImageControl.js';
import Popup from '../../popup/src/popup.js';

export default function Save(props) {

  return (
    <div {...props.blockProps }
      className = {
        [
          "ncs4-description-popup",
          Popup.className,
          props.blockProps.className,
        ].join(' ')
      }
    >
      <h2 className = "ncs4-description-popup__name">
        { props.attributes.name }
      </h2>
      { props.backend
        ? <RichText
            className = "ncs4-description-popup__description"
            tagName = "p"
            value = { props.attributes.desc }
            onChange = { props.setAttribute("desc") }
            placeHolder = "Description"
          />
        : <p
            className = "ncs4-description-popup__description"
          >{ props.attributes.normalizedDesc }</p>
      }
      { !props.backend &&
        <Popup
          attributes = { props.attributes }
          backend = { props.backend }
        >
          <Popup.Header>
            <Popup.Title title = { props.attributes.name }/>
          </Popup.Header>
          <Popup.Body>
            <p
              className = "ncs4-description-popup__popup-description"
            >{ props.attributes.desc }</p>
            <PopupFooter
              img = { props.attributes.img }
              showButton = { props.attributes.showButton }
              buttonLink = { props.attributes.buttonLink }
              buttonStyle = { props.attributes.buttonStyle }
              buttonText = { props.attributes.buttonText }
            />
          </Popup.Body>
        </Popup>
      }
      <PopupFooter
        img = { props.attributes.img }
        showButton = { props.attributes.showButton }
        buttonLink = { props.attributes.buttonLink }
        buttonStyle = { props.attributes.buttonStyle }
        buttonText = { props.attributes.buttonText }
      />
    </div>
  )
}

function PopupFooter(props) {
  return (
    <div className="ncs4-description-popup__footer">
      <ImageSave
        className = "ncs4-description-popup__img"
        img = { props.img }
        align = "left"
      />
      { props.showButton && (
        <a
          href = { props.buttonLink }
          className = {"ncs4-button ncs4-button__" + props.buttonStyle}
        >{ props.buttonText }</a>
      )}
    </div>
  );
}
