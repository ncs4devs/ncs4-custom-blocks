import React from 'react';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

import { Popup } from '../../popup/src/popup.js';
import {ReactComponent as DismissIcon} from '../../img/dismiss.svg';

import { RecipientsSave } from './recipients';

export class AwardCardSave extends React.Component {

  render() {
    let blockProps = this.props.blockProps;
    let attributes = this.props.attributes;

    return (
      <div {...blockProps }
        className = {
          [
            "ncs4-award-card",
            Popup.classType,
            blockProps.className,
          ].join(' ')
        }
      >
        <h2 className = "ncs4-award-card__name">
          { attributes.name }
        </h2>
        <RichText.Content
          className = "ncs4-award-card__description"
          tagName = "p"
          value = { attributes.normalizedDesc }
        />
        <Popup
          attributes = { attributes }
          backend = { this.props.backend }
        >
          <div className = "ncs4-award-card__popup-header">
            <h1 className = "ncs4-award-card__popup-name">
              { attributes.name }
            </h1>
            <a
              href = "#!"
              className = "ncs4-award-card__popup-dismiss-link"
              title = "Dismiss"
            >
              <DismissIcon
                className = "ncs4-award-card__popup-dismiss"
                viewBox = "0 52.67 43 43"
              />
            </a>
          </div>
          <div className = "ncs4-award-card__popup-content">
            <RichText.Content
              className = "ncs4-award-card__popup-description"
              tagName = "p"
              value = { attributes.desc }
            />
            <RecipientsSave {...attributes}/>
          </div>
        </Popup>
      </div>
    );
  }
}
