import React, { Component } from 'react';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';
import { BPSectionEdit } from '../../js/bp-section.js';

export class BPSubtopicEdit extends BPSectionEdit {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.updateTitle = this.updateTitle.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.updateLink = this.updateLink.bind(this);

    let superState = this.state;
    this.state = {
      ...superState,
      inheritedTitle: null,
      id: props.attributes.id,
      link: props.attributes.link,
    };

    document.addEventListener("subtopicsUpdate", this.updateIndex);
  }

  createClassName(classes) {
    return [
      'ncs4-bp-subtopic',
    ].join(' ') + ' ' + classes;
  }

  updateTitle(t) {
    super.updateTitle(t);
    document.dispatchEvent(new CustomEvent(
      "titleUpdate",
      { detail: {
          id: this.clientId,
          index: this.state.id,
          oldTitle: this.state.title,
          newTitle: t,
        }
      }
    ))
    this.setState( { title: t } );
    this.setAttributes( { title: t } );
  }

  updateLink(t) {
    const str = this.dashEncode(t);
    this.setState( { link: str } );
    this.setAttributes( { link: str } );
  }

  updateIndex( { detail: { id, index } } ) {
    if (id == this.clientId) {
      this.setState( { id: index }, () => {
        this.setAttributes( { id: index } );
      });
    }
  }

  dashEncode(str) {
    return str
      .replaceAll(/[^\w]+/g, "-")
      .replaceAll(/_+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <>
        <section { ...blockProps }
          id = { "ncs4-bp-subtopic__" + this.attributes.id }
          className = { this.createClassName(blockProps.className) }
          style = {{
            display: "block",
          }}
        >
          <h2
            className = "ncs4-bp-subtopic-title"
          >{ this.state.title }</h2>
          <InnerBlocks/>
        </section>

        <InspectorControls>
          <PanelBody
            title = "General"
            initialOpen = { true }
          >
            <TextControl
              label = "Title"
              placeholder = "Subtopic Title..."
              value = { this.state.title }
              onChange = { (t) => {
                this.updateTitle(t);
                this.updateLink(t);
              } }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}
