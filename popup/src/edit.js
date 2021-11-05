import React from 'react';

import { select } from '@wordpress/data';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  TextControl,
  ColorPalette,
} from '@wordpress/components';

function createColorClass(slug, bg = false) {
  return "has-" + slug
    + (bg ? "-background-color" : "-color");
}

export class PopupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.blockProps = props.blockProps;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.onButtonTitleChange = this.onButtonTitleChange.bind(this);
    this.onBgColorChange = this.onBgColorChange.bind(this);
    this.onTextColorChange = this.onTextColorChange.bind(this);

    this.state = {
      showModal: false,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      buttonTitle: this.attributes.buttonTitle,
    }

    wp.data.subscribe(this.handleSelected);
    this.setAttributes({ id: this.clientId });
  }

  createClassName(classes) {
    return [
      'ncs4-popup',
      // for some reason, selection isn't working
      // (Doesn't add this class after reload)
      this.state.showModal ? 'is-selected' : null,
    ].join(' ') + ' ' + classes;
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  getSettings() {
    return select("core/block-editor").getSettings();
  }

  handleSelected() {
    let selectedBlock =
       select("core/block-editor")
      .getSelectedBlock()
    ;
    if (!selectedBlock) { return }

    if ( !this.state.showModal && selectedBlock.clientId === this.clientId ) {
      this.setState( { showModal: true } );
    } else if ( this.state.showModal && selectedBlock.clientId !== this.clientId ) {
      this.setState( { showModal: false } );
    }
  }

  onButtonTitleChange(v) {
    this.setStateAttributes({ buttonTitle: v });
  }

  getColor(c) {
    return this.getSettings().colors.filter( (obj) => obj.color === c)[0];
  }

  setColorStateAttribute(attr, c, color) {
    this.setStateAttributes({
      [attr]: {
        color: c,
        slug: color ? color.slug : null,
      },
    });
  }

  onBgColorChange(c) {
    let color = this.getColor(c);
    this.setColorStateAttribute("bgColor", c, color);
  }

  onTextColorChange(c) {
    let color = this.getColor(c);
    this.setColorStateAttribute("textColor", c, color);
  }

  render() {
    const settings = this.getSettings();

    return (
      <div { ...this.blockProps }
        className = { this.createClassName(this.blockProps.className) }
      >
        <PopupContent
          attributes = { this.state }
        />
        <InspectorControls>
          <PanelBody
            title = "Button settings"
            initialOpen = { true }
          >
            <TextControl
              label = "Button title"
              placeholder = "Show"
              value = { this.state.buttonTitle }
              onChange = { this.onButtonTitleChange }
            />
          </PanelBody>
          <PanelBody
            title = "Popup area settings"
            initialOpen = { true }
          >
            <p>Popup background</p>
            <ColorPalette
              colors = { settings.colors }
              disableCustomColors = { settings.disableCustomColors }
              clearable = { false }
              value = { this.state.bgColor.color }
              onChange = { this.onBgColorChange }
            />
            <p>Popup text</p>
            <ColorPalette
              colors = { settings.colors }
              disableCustomColors = { settings.disableCustomColors }
              clearable = { false }
              value = { this.state.textColor.color }
              onChange = { this.onTextColorChange }
            />
          </PanelBody>
        </InspectorControls>
      </div>
    );
  }
}

class PopupContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const attributes = this.props.attributes;

    return (
      <>
        <a>
          { attributes.buttonTitle }
        </a>
        <div
          className = {
            "ncs4-modal-overlay"
            + (attributes.showModal ? " shown" : "")
          }
        >
          <div
            className = {
              [
                "ncs4-modal-content",
                createColorClass(attributes.bgColor.slug, true),
                createColorClass(attributes.textColor.slug, false),
              ].join(' ')
            }
          >
            <InnerBlocks/>
          </div>
        </div>
      </>
    );
  }
}
