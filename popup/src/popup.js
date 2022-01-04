// Library of generic popup classes

import React from 'react';
import { select } from '@wordpress/data';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { OptionsControl } from '../../js/SelectControls.js';
import { ColorSelector, createColorClass } from '../../js/ColorSelector.js';

// Should be included by all components that use Popup
let classType = "ncs4-custom-blocks_popup-type";

// stateless popup component, children are rendered as popup contents
export class Popup extends React.Component {
  static classType = classType;
  static sizeOptions = [
    { value: 'size-alert', label: 'Alert' },
    { value: 'size-small', label: 'Small' },
    { value: 'size-body', label: 'Medium (body size)' },
    { value: 'size-large', label: 'Large' },
  ];

  render() {
    let attrs = this.props.attributes;
    let id = "popup-" + attrs.id;
    let customBgColor = attrs.bgColor.slug ? null : attrs.bgColor.color;
    let customColor = attrs.textColor.slug ? null : attrs.textColor.color;
    let css = `
      #${id}:target {
        display: block;
      }
    `

    return (
      <>
        { this.props.backend
          ? <a className = "ncs4-popup-button" href="#">
              { attrs.buttonTitle }
            </a>
          : <a className = "ncs4-popup-button" href= { "#" + id }>
              { attrs.buttonTitle }
            </a>
        }
        <div
          id = { id }
          className = "ncs4-popup__wrapper"
          style = {{
            textAlign: "left",
          }}
        >
          <a
            className = "ncs4-popup-overlay"
            href = "#!"
            style ={{
              opacity: attrs.overlayOpacity,
            }}
          />
          <div className = "ncs4-popup-content__wrapper">
            <div
              className = {
                [
                  "ncs4-popup-content",
                  createColorClass(attrs.bgColor.slug, "background-color"),
                  createColorClass(attrs.textColor.slug, "color"),
                  attrs.optionSize,
                ].join(' ')
              }
              style = {{
                backgroundColor: customBgColor,
                ["--palette-bg-color"]: customBgColor,
                color: customColor,
                ["--palette-color"]: customColor,
              }}
            >
              { this.props.children }
            </div>
          </div>
          <style>{ css }</style>
        </div>
      </>
    );
  }
}

// Used to create popup setting controls inside of InspectorControls
export class PopupSettings extends React.Component {

  render() {
    let attrs = this.props.attributes;
    let callback = this.props.callback;
    return (
      <>
        <PanelBody
          title = "Button settings"
          initialOpen = { true }
        >
          <TextControl
            label = "Button title"
            placeholder = "Show"
            value = { attrs.buttonTitle }
            onChange = { v => { callback({ buttonTitle: v }) }}
          />
        </PanelBody>
        <PanelBody
          title = "Popup area settings"
          initialOpen = { true }
        >
          <ColorSelector
            label = "Popup background"
            value = { attrs.bgColor.color }
            onChange = { c => { callback({ bgColor: c }) }}
          />
          <ColorSelector
            label = "Popup text"
            value = { attrs.textColor.color }
            onChange = { c => { callback({ textColor: c }) }}
          />
          <OptionsControl
            options = {[
              {
                attribute: 'overlayOpacity',
                label: 'Overlay opacity',
                value: Math.round(100 * attrs.overlayOpacity),
                min: 0,
                max: 100,
                step: 1,
                markStep: 20,
                markRender: (v) => String(v) + "%",
                onChange: (v) => v / 100,
              },
              {
                attribute: 'optionSize',
                label: "Content size",
                value: attrs.optionSize,
                choices: Popup.sizeOptions,
              },
            ]}
            onChange = { (v) => { callback(v) } }
          />
        </PanelBody>
      </>
    );
  }
}

// popup id functions

export function requestId(curId) {
  let ids = getUsedIds();
  if (!curId || !isIdAvailable(curId, ids)) {
    return String(getNextId(ids));
  }
  return curId;
}

function getUsedIds() {
  let nl =
    document.getElementsByClassName(classType);
  let ids = [];
  nl.forEach( (n) => {
    let blockId = n.getAttribute('data-block');
    if (blockId) {
      let id =
        select("core/block-editor").getBlock(blockId)
        .attributes.id
      ids.push(
        /^\d+$/.test(id)
          ? parseInt(id)
          : id
      );
    }
  })
  return ids.sort();
}

// short-circuiting array.contains() taking advantage of the sorted list
function isIdAvailable(id, ids) {
  for (let i in ids) {
    if (ids[i] == id) {
      if (ids[i + 1] == id) { // duplicate id
        return false;
      } else { // unique id already owned by us
        return true;
      }
    }
    if (id < ids[i]) { // number < str, str < number is always false.
      return true;
    }
  }
  return true;
}

function getNextId(ids) {
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
