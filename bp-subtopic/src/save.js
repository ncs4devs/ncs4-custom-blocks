import React, { Component } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

export class BPSubtopicSave extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

  createClassName(classes) {
    return [
      "ncs4-bp-subtopic",
    ].join(' ') + ' ' + classes;
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <section { ...blockProps }
        id = { "ncs4-bp-subtopic__" + this.attributes.id }
        className = { this.createClassName(blockProps.className)}
      >
        <div
          id = { this.attributes.link }
          className = "bp-subtopic-anchor"
        />
        <h2
          className = "ncs4-bp-subtopic-title"
        >
          { this.attributes.title }
          <a
            href = { "#" + this.attributes.link }
            className = "share-section"
            title = "Share this section"
          >
            <span class="dashicons dashicons-share"></span>
          </a>
        </h2>
        <InnerBlocks.Content/>
      </section>
    );
  }
}
