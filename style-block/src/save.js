import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

export default class Save extends React.Component {

  render() {
    let attrs = this.props.attributes;
    let backend = this.props.backend || false;

    return (
      <div { ...this.props.blockProps }
        id = { attrs.id }
        className = {
          [
            "ncs4-style-block",
            this.props.blockProps.className,
          ].join(' ')
        }
      >
        <style>{ attrs.style }</style>
        { backend
          ? <InnerBlocks/>
          : <InnerBlocks.Content/>
        }
      </div>
    );
  }
}
