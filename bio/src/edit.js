import React from 'react';

import { InspectorControls } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { verifyColor } from '../../js/ColorSelector.js';
import {
  OptionsControl,
  PhoneControl,
  EmailControl,
} from '../../js/SelectControls.js';
import { ImageEdit, onImageChange } from '../../js/ImageControl.js';

import { PopupSettings, requestId } from '../../popup/src/popup.js';
import { BioSave } from './save.js';

export class BioEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.blockProps = props.blockProps;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.imageChangeHandler = this.imageChangeHandler.bind(this);

    this.state = {
      overlayOpacity: this.attributes.overlayOpacity,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      buttonTitle: this.attributes.buttonTitle,
      id: this.attributes.id,
      name: this.attributes.name,
      fullName: this.attributes.fullName,
      credentials: this.attributes.credentials,
      position: this.attributes.position,
      phone: this.attributes.phone,
      email: this.attributes.email,
      img: this.attributes.img,
    };
  }

  componentDidMount() {
    this.setStateAttributes({ id: requestId(this.state.id) });
    this.setStateAttributes({ bgColor: {
        color: verifyColor(this.state.bgColor),
        slug: this.state.bgColor.slug,
      }
    });
    this.setStateAttributes({ textColor: {
        color: verifyColor(this.state.textColor),
        slug: this.state.textColor.slug,
      }
    });
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  imageChangeHandler(v) {
    this.setStateAttributes({ img: v });
  }

  render() {

    return (
      <>
        <BioSave
          blockProps = { this.blockProps }
          attributes = { this.state }
        />
        <InspectorControls>
          <PanelBody
            title = "Personal info"
          >
            <ImageEdit
              onChange = { (i) => { onImageChange(i, this.imageChangeHandler) } }
              img = { this.state.img }
            />
            <TextControl
              value = { this.state.name }
              label = "Name"
              help = "Name to display on page (not in popup)"
              placeholder = "Willy Wonka"
              onChange = { (n) => { this.setStateAttributes({ name: n }) }}
            />
            <TextControl
              value = { this.state.fullName }
              label = "Full name"
              help = "Name to display in bio popup header"
              placeholder = "Dr. Willy H. Wonka"
              onChange = { (n) => { this.setStateAttributes({ fullName: n }) }}
            />
            <TextControl
              value = { this.state.credentials }
              label = "Credentials"
              help = "Additional credentials, e.g. 'PhD.'"
              placeholder = "PhD, Doctor of Chocolatiering"
              onChange = { (c) => { this.setStateAttributes({ credentials: c }) }}
            />
            <TextControl
              value = { this.state.position }
              label = "Position"
              help = "The person's official job title"
              placeholder = "Director of Candy Research and Development"
              onChange = { (p) => { this.setStateAttributes({ position: p }) }}
            />
          </PanelBody>
          <PanelBody
            title = "Contact info"
            initialOpen = { false }
          >
            <PhoneControl
              value = { this.state.phone }
              onChange = { (n) => this.setState({ phone: n }) }
              onChangeComplete = { (n) => this.setAttributes({ phone: n }) }
            />
            <EmailControl
              value = { this.state.email }
              onChange = { (e) => this.setState({ email: e }) }
              onChangeComplete = { (e) => this.setAttributes({ email: e }) }
            />
          </PanelBody>
          <PopupSettings
            attributes = { this.state }
            callback = { (v) => { console.log(v); this.setStateAttributes(v)} }
          />
        </InspectorControls>
      </>
    );
  }
}
