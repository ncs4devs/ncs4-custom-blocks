import React from 'react';
import { BPTopicSave } from './save.js';

import { select } from '@wordpress/data';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { TextControl, Button } from '@wordpress/components';

import { ImageEdit, onImageChange } from '../../js/ImageControl.js';


export class BPTopicEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.handleSelected = this.handleSelected.bind(this);

    this.state = {
      editMode: false,
      title: props.attributes.title,
      link: props.attributes.link,
      img: props.attributes.img,
    }

    wp.data.subscribe(this.handleSelected);
  }

  createClassName(classes) {
    return [
      'ncs4-bp-topic',
    ].join(' ') + ' ' + classes;
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  handleSelected() {
    let selectedBlock =
       select("core/block-editor")
      .getSelectedBlock()
    ;
    if (!selectedBlock) { return }

    if ( !this.state.editMode && selectedBlock.clientId === this.clientId ) {
      this.setState( { editMode: true } );
    } else if ( this.state.editMode && selectedBlock.clientId !== this.clientId ) {
      this.setState( { editMode: false } );
    }
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <div className = "ncs4-bp-topic__wrapper" { ...blockProps }>
        { this.state.editMode
          ?
            <BPTopicEditMode
              attributes = { this.state }
              onChange = { (v) => { this.setStateAttributes({ img: v }) }}
            />
          :
            <BPTopicSave
              attributes = { this.state }
              blockProps = { blockProps }
            />
        }
      </div>
    );
  }
}

class BPTopicEditMode extends React.Component {

  render() {
    let attrs = this.props.attributes;
    let onChange = this.props.onChange;

    return (
      <>
        <TextControl
          label = "Topic"
          placeholder = "Best Practices Topic"
          value = { attrs.title }
          onChange = { onChange }
        />
        <TextControl
          label = "Topic page link"
          help = "Link to the topic page"
          placeholder = "/resources/best-practices/my-topic"
          value = { attrs.link }
          onChange = { onChange }
        />
        <ImageEdit
          onChange = { (img) => onImageChange(img, onChange) }
          img = { attrs.img }
        />
      </>
    );
  }
}
