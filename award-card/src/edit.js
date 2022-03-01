import React from 'react';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  CheckboxControl,
} from '@wordpress/components';
import { verifyColor } from '../../js/ColorSelector';
import { normalizeStringLength } from '../../js/utils';
import { createRegistry, RegistryProvider } from '@wordpress/data';

import {
  Popup,
  PopupSettings,
  reserveId,
  deleteId,
} from '../../popup/src/popup.js';
import { AwardCardSave } from './save.js';
import Recipients, {
  addRecipient,
  store,
  getRecipientData,
  recipientStoreName,
  initializeStore,
}  from './recipients';

const normalizedDescLength = 400; // Number of chars for the short description

export class AwardCardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.registry = createRegistry( {} );
    this.registry.register(store);

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.trimStateAttribute = this.trimStateAttribute.bind(this);
    this.onStoreUpdate = this.onStoreUpdate.bind(this);
    this.handleDescription = this.handleDescription.bind(this);

    // normalize description if length is wrong or it doesn't exist
    if (
           this.attributes.desc
        && ( !this.attributes.normalizedDesc
        || this.attributes.normalizedDesc.length !== normalizedDescLength )
    ) {
      this.handleDescription(this.attributes.desc);
    }

    // store existing recipients
    initializeStore(
      this.registry,
      this.attributes.recipients,
      this.attributes.useOrgs,
    );
    this.registry.stores[recipientStoreName].subscribe(this.onStoreUpdate);

    this.state = {
      overlayOpacity: this.attributes.overlayOpacity,
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      id: this.attributes.id,
      customId: this.attributes.customId,
      optionSize: this.attributes.optionSize,
      buttonTitle: this.attributes.buttonTitle,
      name: this.attributes.name,
      desc: this.attributes.desc,
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

  onStoreUpdate() {
    this.setAttributes( getRecipientData(this.registry) );
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
    let registry = this.registry;
    return (
      <>
        <div {...blockProps }
          className = {
            [
              "ncs4-award-card",
              Popup.classType,
              blockProps.className,
            ].join(' ')
          }
        >
          <h2 className = "ncs4-award-card__name">
            { this.state.name }
          </h2>
          <RichText
            className = "ncs4-award-card__description"
            tagName = "p"
            value = { this.state.desc }
            onChange = { this.handleDescription }
            placeholder = "Award description..."
          />
          <div className = "ncs4-award-card__edit-recipients">
            <p>Recipients</p>
            <span
              className = "dashicons dashicons-plus"
              title = "Add recipient"
              onClick = { () => addRecipient(registry) }
            />
          </div>
          <RegistryProvider value={ registry }>
            <Recipients awardId={ blockProps.id }/>
          </RegistryProvider>
        </div>
        <InspectorControls>
          <PanelBody
            title = "Award info"
            initialOpen = { true }
          >
            <TextControl
              value = { this.state.name }
              label = "Award name"
              help = "Name of the award"
              placeholder = "World's Best Web Dev"
              onChange = { this.trimStateAttribute("name") }
            />
            <CheckboxControl
              label = "Split past recipients by organization"
              help = "Leave checked to organize past recipients by their organization"
              checked = { this.registry.select(recipientStoreName).getUseOrgs() }
              onChange = { (b) => {
                let {
                  setUseOrgs,
                  sortRecipients,
                } = this.registry.dispatch(recipientStoreName);
                setUseOrgs(b);
                sortRecipients();
                this.setAttributes({useOrgs: b});
              }}
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
