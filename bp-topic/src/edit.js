import React from 'react';
import { BPTopicSave } from './save.js';

import { select } from '@wordpress/data';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { TextControl, Button } from '@wordpress/components';


export class BPTopicEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.blockProps = props.blockProps;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onLinkChange = this.onLinkChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onSvgChange = this.onSvgChange.bind(this);

    this.state = {
      editMode: false,
      title: props.attributes.title,
      link: props.attributes.link,
      img: props.attributes.img,
      svg: props.attributes.svg,
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

  onTitleChange(v) {
    this.setStateAttributes({ title: v });
  }

  onLinkChange(v) {
    this.setStateAttributes({ link: v });
  }

  onImageChange(v) {
    this.setStateAttributes({ img: v });
  }

  onSvgChange(v) {
    this.setStateAttributes({ svg: v });
  }

  render() {
    return (
      <div className = "ncs4-bp-topic__wrapper" { ...this.blockProps }>
        { this.state.editMode
          ?
            <BPTopicEditMode
              state = { this.state }
              onTitleChange = { this.onTitleChange }
              onLinkChange = { this.onLinkChange }
              onImageChange = { this.onImageChange }
              onSvgChange = { this.onSvgChange }
            />
          :
            <BPTopicSave
              attributes = { this.state }
              blockProps = { this.blockProps }
            />
        }
      </div>
    );
  }
}

class BPTopicEditMode extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = props.onTitleChange;
    this.onLinkChange = props.onLinkChange;
    this.onImageChange = props.onImageChange;
    this.onSvgChange = props.onSvgChange;

    this.titleChange = this.titleChange.bind(this);
    this.linkChange = this.linkChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.updateSvg = this.updateSvg.bind(this);

    this.state = props.state;
  }


  titleChange(v) {
    this.setState( {title: v} );
    this.onTitleChange(v);
  }

  linkChange(v) {
    this.setState( {link: v} );
    this.onLinkChange(v);
  }

  imageChange(v) {
    this.setState( {img: v} );
    this.onImageChange(v);
    if (v.mime === "image/svg+xml") {
      this.updateSvg(v.url);
    }
  }

  updateSvg(url) {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        this.setState( { svg: text } );
        this.onSvgChange(text);
      }
    );
  }

  render() {
    return (
      <>
        <TextControl
          label = "Topic"
          placeholder = "Best Practices Topic"
          value = { this.state.title }
          onChange = { this.titleChange }
        />
        <TextControl
          label = "Topic page link"
          help = "Link to the topic page"
          placeholder = "/resources/best-practices/my-topic"
          value = { this.state.link }
          onChange = { this.linkChange }
        />
        <MediaUploadCheck>
          <MediaUpload
            onSelect = { this.imageChange }
            value = { this.state.img ? this.state.img.id : null}
            allowedTypes = { ['image'] }
            render = { ( { open } ) => (
              <Button
                className = {
                  this.state.img
                    ? 'editor-post-featured-image__preview'
                    : 'editor-post-featured-image__toggle'
                }
                onClick = { open }
              >
                { this.state.img
                  ? (this.state.img.mime === "image/svg+xml"
                      ? <Svg
                          svg = { this.state.svg }
                        />
                      : <img src = { this.state.img.url }/>
                    )
                  : "Choose an image"
                }
              </Button>
            )}
          />
        </MediaUploadCheck>
      </>
    );
  }
}

class Svg extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.svg;
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML = {{
          __html: this.data
        }}
      />
    );
  }
}
