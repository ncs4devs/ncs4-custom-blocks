import React from 'react';

import { select } from '@wordpress/data';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  TextControl,
  RadioControl,
  ColorPalette,
} from '@wordpress/components';

function createColorClass(slug, bg = false) {
  return "has-" + slug
    + (bg ? "-background-color" : "-color");
}

let sizeOptions = [
  ['size-alert', 'Alert'],
  ['size-small', 'Small'],
  ['size-body', 'Medium (body size)', true], /* default */
  ['size-large', 'Large'],
];

// Add option functions
[
  sizeOptions,
].forEach( (arr) => {
  arr.values = () => arr.map(x => x[0]);
  arr.labels = () => arr.map(x => x[1]);
  arr.default = () => arr.filter(x => x[2])[0][0];
  arr.toOptions = () => arr.map(x => { return {value: x[0], label: x[1]} });
});

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
      id: this.attributes.id,
      optionSize: this.attributes.optionSize,
    }

    if (!this.state.optionSize) {
      this.setStateAttributes({ optionSize: sizeOptions.default() });
    }

    wp.data.subscribe(this.handleSelected);
  }

  componentDidMount() {
    let ids = this.getUsedIds();
    if (!this.state.id || !this.isIdAvailable(this.state.id, ids)) {
      this.setStateAttributes({ id: String(this.getNextId(ids)) });
    }
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

  getColor(c) {
    return this.getSettings().colors.filter( (obj) => obj.color === c)[0];
  }

  // Functions for settings and getting popup ids to be used in anchors

  getUsedIds() {
    let nl =
      document.querySelectorAll('[data-type="ncs4-custom-blocks/popup"]');
    let ids = [];
    nl.forEach( (n) => {
      let id =
        select("core/block-editor").getBlock( n.getAttribute('data-block') )
        .attributes.id
      ids.push(
        /^\d+$/.test(id)
          ? parseInt(id)
          : id
      );
    })
    return ids.sort();
  }

  // short-circuiting array.contains() taking advantage of the sorted list
  isIdAvailable(id, ids) {
    for (let i of ids) {
      if (i === id) {
        return false;
      }
      if (id < i) { // number < str, str < number is always false.
        return true;
      }
    }
    return true;
  }

  getNextId(ids) {
    let id = (typeof ids[0] === "number") ? ids[0] : -1;
    for (let i = 1; i < ids.length; i++) {
      if (typeof ids[i] !== "number" || ids[i] - id - 1) {
        break;
      } else {
        id = ids[i];
      }
    }
    return id + 1;
  }

  // Change handlers

  onButtonTitleChange(v) {
    this.setStateAttributes({ buttonTitle: v });
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
            <RadioControl
              label = "Content size"
              selected = { this.state.optionSize }
              onChange = {v => { this.setStateAttributes({ optionSize: v }) }}
              options = { sizeOptions.toOptions() }
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
        <a className = "ncs4-popup-button">
          { attributes.buttonTitle }
        </a>
        <a
          className = {
            "ncs4-popup-overlay"
            + (attributes.showModal ? " shown" : "")
          }
        />
        <div className = "ncs4-popup-content__wrapper">
          <div
            className = {
              [
                "ncs4-popup-content",
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
