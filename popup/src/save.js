import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';

function createColorClass(slug, bg = false) {
  return "has-" + slug
    + (bg ? "-background-color" : "-color");
}

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
    const attributes = this.props.attributes;
    let id = "popup-" + attributes.id;
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
            href = "#"
            style = {{
              opacity: attributes.overlayOpacity,
            }}
          />
          <div className = "ncs4-popup-content__wrapper">
            <div
              className = {
                [
                  "ncs4-popup-content",
                  createColorClass(attributes.bgColor.slug, true),
                  createColorClass(attributes.textColor.slug, false),
                  attributes.optionSize,
                ].join(' ')
              }
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
