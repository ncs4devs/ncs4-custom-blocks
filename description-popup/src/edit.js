import React from 'react';
import { InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  CheckboxControl,
} from '@wordpress/components';
import { verifyColor } from '../../js/ColorSelector';
import { normalizeStringLength } from '../../js/utils';
import { ImageEdit, onImageChange } from '../../js/ImageControl.js';

import {
  Popup,
  PopupSettings,
  reserveId,
  deleteId,
} from '../../popup/src/popup.js';
import { DescriptionPopupSave } from './save.js';

const normalizedDescLength = 400; // Number of chars for the short description

export class DescriptionPopupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);
    this.handleDescription = this.handleDescription.bind(this);

    // normalize description if length is wrong or it doesn't exist
    if (
           this.attributes.desc
        && ( !this.attributes.normalizedDesc
        || this.attributes.normalizedDesc.length !== normalizedDescLength )
    ) {
      this.handleDescription(this.attributes.desc);
    }

    this.state = {
      ...this.attributes,
    };
  }

  componentDidMount() {
    reserveId(
      (x) => this.setStateAttributes({ id: x }),
      this.state.id,
    );
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

  componentWillUnmount() {
    deleteId(this.state.id);
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  // returns (x) => null
  trimStateAttribute(attr) {
    return (x) => {
        this.setState(
        { [attr]: x },
        () => { this.setAttributes({ [attr]: x.trim() }) }
      )
    }
  }

  handleDescription(str) {
    str = str.trim();
    this.setStateAttributes({ "desc": str });
    this.setAttributes(
      { "normalizedDesc": normalizeStringLength(str, normalizedDescLength)
    });
  }

  render() {
    let blockProps = this.props.blockProps;
    let ImageEditor = <ImageEdit
      onChange = { (i) => onImageChange(
        i,
        (_i) => this.setStateAttributes({img: _i })
      ) }
      img = { this.state.img }
      useInlineSvg = { false }
    />;

    return (
      <>
        <DescriptionPopupSave
          blockProps = { blockProps }
          attributes = {{
            ...this.attributes,
            ...this.state,
            normalizedDesc: this.state.desc,
          }}
          backend = { true }
          imageEdit = { ImageEditor }
          onDescChange = { this.handleDescription }
          setAttributes = { this.setAttributes }
        />
        <InspectorControls>
          <PanelBody
            title = "General info"
            initialOpen = { true }
          >
            <TextControl
              value = { this.state.name }
              label = "Title"
              placeholder = "Best Practices Guide"
              onChange = { this.trimStateAttribute("name") }
            />
            <CheckboxControl
              label = "Use footer button"
              checked = { this.state.showButton }
              help = { this.state.showButton
                ? "Footer button visible"
                : "Footer button invisible"
              }
              onChange = { (b) => this.setStateAttributes({ showButton: b }) }
            />
            <TextControl
              label = "Footer button text"
              value = { this.state.buttonText }
              disabled = { !this.state.showButton }
              onChange = { this.trimStateAttribute("buttonText") }
              help = "The text displayed by the button"
            />
            <TextControl
              label = "Footer button link"
              value = { this.state.buttonLink }
              disabled = { !this.state.showButton }
              onChange = { this.trimStateAttribute("buttonLink") }
              help = "The link for the button"
            />
          </PanelBody>
          <PopupSettings
            attributes = { this.state }
            callback = { this.setStateAttributes }
          />
        </InspectorControls>
      </>
    );
  }
}
