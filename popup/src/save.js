import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { createColorClass } from '../../js/ColorSelector.js';

import { Popup } from './popup.js';

export class PopupSave extends React.Component {
  constructor(props) {
    super(props);
    this.blockProps = props.blockProps;

    this.visible = props.visible || props.attributes.showOnLoad || false;
  }

  createClassName(classes) {
    return [
      'ncs4-popup',
      Popup.classType,
    ].join(' ') + ' ' + classes;
  }

  render() {
    return (
      <div { ...this.blockProps }
        className = { this.createClassName(this.blockProps.className) }
      >
        <Popup
          attributes = { this.props.attributes }
        >
          <InnerBlocks.Content/>
        </Popup>
      </div>
    );
  }
}
