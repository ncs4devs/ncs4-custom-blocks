import React from 'react';

import { select } from '@wordpress/data';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Popup, PopupSettings, reserveId, deleteId } from './popup.js';
import { verifyColor } from '../../js/ColorSelector.js';

export class PopupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.handleSelected = this.handleSelected.bind(this);

    this.state = {
      showModal: false,
      overlayOpacity: this.attributes.overlayOpacity,
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

  createClassName(classes) {
    return [
      'ncs4-popup',
      Popup.classType,
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

  render() {
    return (
      <div { ...this.props.blockProps }
        className = { this.createClassName(this.props.blockProps.className) }
      >
        <Popup
          attributes = { this.state }
        >
          <InnerBlocks/>
        </Popup>
        <InspectorControls>
          <PopupSettings
            attributes = { this.state }
            callback = { this.setStateAttributes }
          />
        </InspectorControls>
      </div>
    );
  }
}
