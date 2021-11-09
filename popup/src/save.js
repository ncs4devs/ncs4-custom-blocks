import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

export class PopupSave extends React.Component {
  constructor(props) {
    super(props);
    this.blockProps = props.blockProps;

    this.visible = props.visible || props.attributes.showOnLoad || false;
  }

  createClassName(classes) {
    return [
      'ncs4-popup',
    ].join(' ') + ' ' + classes;
  }

  render() {
    const attributes = this.props.attributes;
    return (
      <div { ...this.blockProps }
        className = { this.createClassName(this.blockProps.className) }
      >
        <a
          className = "ncs4-popup-button"
          href = { "#" + attributes.id }
        >
          { attributes.buttonTitle }
        </a>
        <div className="ncs4-popup-overlay">
          <div className="ncs4-popup-content">
            <InnerBlocks.Content/>
          </div>
        </div>
      </div>
    );
  }
}
