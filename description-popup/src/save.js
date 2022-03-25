import React from 'react';
import { InnerBlocks, RichText, getBlockContent } from '@wordpress/block-editor';
import { useInnerBlocksProps } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

import { ImageSave } from '../../js/ImageControl.js';
import { Popup } from '../../popup/src/popup.js';
import {ReactComponent as DismissIcon} from '../../img/dismiss.svg';

export class DescriptionPopupSave extends React.Component {

  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;
    let backend = this.props.backend === true;

    return (
      <div {...blockProps }
        className = {
          [
            "ncs4-description-popup",
            Popup.classType,
            blockProps.className,
          ].join(' ')
        }
      >
        <h2 className = "ncs4-description-popup__name">
          { attributes.name }
        </h2>
        { backend
          ? <RichText
              className = "ncs4-description-popup__description"
              tagName = "p"
              value = { attributes.desc }
              onChange = { this.props.onDescChange }
              placeHolder = "Description"
            />
          : <RichText.Content
              className = "ncs4-description-popup__description"
              tagName = "p"
              value = { attributes.normalizedDesc }
            />
        }
        { !backend &&
          <Popup
            attributes = { attributes }
            backend = { this.props.backend }
          >
            <div className = "ncs4-description-popup__popup-header">
              <h1 className = "ncs4-description-popup__popup-name">
                { attributes.name }
              </h1>
              <a
                href = "#!"
                className = "ncs4-description-popup__popup-dismiss-link"
                title = "Dismiss"
              >
                <DismissIcon
                  className = "ncs4-description-popup__popup-dismiss"
                  viewBox = "0 52.67 43 43"
                />
              </a>
            </div>
            <div className = "ncs4-description-popup__popup-content">
              <RichText.Content
                className = "ncs4-description-popup__popup-description"
                tagName = "p"
                value = { attributes.desc }
              />
              <PopupFooter
                backend = { backend }
                img = { attributes.img }
                showButton = { attributes.showButton }
                buttonLink = { attributes.buttonLink }
                buttonStyle = { attributes.buttonStyle }
                buttonText = { attributes.buttonText }
              />
            </div>
          </Popup>
        }
        <PopupFooter
          backend = { backend }
          imageEdit = { this.props.imageEdit }
          img = { attributes.img }
          showButton = { attributes.showButton }
          buttonLink = { attributes.buttonLink }
          buttonStyle = { attributes.buttonStyle }
          buttonText = { attributes.buttonText }
        />
      </div>
    );
  }
}

function PopupFooter(props) {
  return <div className="ncs4-description-popup__footer">
    { props.backend
      ? props.imageEdit
      : <ImageSave
          className = "ncs4-description-popup__img"
          img = { props.img }
          useInlineSvg = { false }
          align = "left"
        />
    }
    { props.showButton && (
      <a
        href = { props.buttonLink }
        className = {"ncs4-button ncs4-button__" + props.buttonStyle}
      >{ props.buttonText }</a>
    )}
  </div>
}
