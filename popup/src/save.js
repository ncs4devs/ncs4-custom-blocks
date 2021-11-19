import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { createColorClass } from '../../js/ColorSelector.js';

export class PopupSave extends React.Component {
  constructor(props) {
    super(props);
    this.blockProps = props.blockProps;

    this.visible = props.visible || props.attributes.showOnLoad || false;
  }

  createClassName(classes) {
    return [
      'ncs4-popup',
    ].join(' ') + ' ' + classes;
  }

  render() {
    let attributes = this.props.attributes;
    let id = "popup-" + attributes.id;
    let customBgColor = attributes.bgColor.slug ? null : attributes.bgColor.color;
    let customColor = attributes.textColor.slug ? null : attributes.textColor.color;
    let css = `
      #${id}:target {
        display: block;
      }
    `
    return (
      <div { ...this.blockProps }
        className = { this.createClassName(this.blockProps.className) }
      >
        <a
          className = "ncs4-popup-button"
          href = { "#" + id }
        >
          { attributes.buttonTitle }
        </a>
        <div
          id = { id }
          className = "ncs4-popup__wrapper"
        >
          <a
            className = "ncs4-popup-overlay"
            href = "#!"
            style = {{
              opacity: attributes.overlayOpacity,
            }}
          />
          <div className = "ncs4-popup-content__wrapper">
            <div
              className = {
                [
                  "ncs4-popup-content",
                  createColorClass(attributes.bgColor.slug, "background-color"),
                  createColorClass(attributes.textColor.slug, "color"),
                  attributes.optionSize,
                ].join(' ')
              }
              style = {{
                backgroundColor: customBgColor,
                ["--palette-bg-color"]: customBgColor,
                color: customColor,
                ["--palette-color"]: customColor,
              }}
            >
              <InnerBlocks.Content/>
            </div>
          </div>
          <style>{ css }</style>
        </div>
      </div>
    );
  }
}
