import React from 'react';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

import { Popup } from '../../popup/src/popup.js';

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
          value = { attributes.desc }
        />
        <Popup
          attributes = { attributes }
          backend = { this.props.backend }
        >
          <h2 className = "ncs4-award-card__popup-name">
            { attributes.name }
          </h2>
          <RichText.Content
            className = "ncs4-award-card__popup-description"
            tagName = "p"
            value = { attributes.desc }
          />
          <p>Award recipients go here</p>
        </Popup>
      </div>
    );
  }
}
