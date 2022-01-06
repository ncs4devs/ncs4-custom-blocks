// Library of generic popup classes

import React from 'react';
import { select, dispatch, registerStore } from '@wordpress/data';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';
import { OptionsControl } from '../../js/SelectControls.js';
import { ColorSelector, createColorClass } from '../../js/ColorSelector.js';

import * as selectors from './popupSelectors';
import * as actions from './popupActions';

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
    let id = "popup-" + String(attrs.id);
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

// Popup store

export const POPUP_STORE = "ncs4/popup";

const popupReducer = (
  state = { ids: [] },
  { id, type }
) => {
  id = Number(id);
  switch (type) {
    case "CREATE":
      let out = [];
      let j = 0;
      let haveAdded = false;
      for (let i = 0; i < state.ids.length; i++) {
        if (i > 20) {
          break;
        }
        if (!haveAdded && state.ids[i] > id) {
          out[j] = id;
          haveAdded = true;
          j++;
        }
        out[j] = state.ids[i];
        j++;
      }
      if (!haveAdded) {
        out[out.length] = id;
      }
      return {
        ...state,
        ids: out,
      };
    case "DELETE":
      console.log("Deleting");
      return {
        ...state,
        ids: state.ids.filter(x => x !== id)
      };
    default:
      return state;
  }
}

registerStore(
  POPUP_STORE,
  {
    selectors,
    actions,
    reducer: popupReducer,
  }
);

// popup id functions

export function reserveId(callback, id = -1) { // -1 guarantees it is unavailable
  let popupStore = select("ncs4/popup");
  let { createId, deleteId } = dispatch("ncs4/popup");
  let resp = popupStore.requestId(id);

  if (resp !== -1) {
    // current id is invalid
    callback(resp);
    createId(resp);
  } else {
    callback(id);
    createId(id);
  }
}

export function deleteId(id) {
  let { deleteId } = dispatch("ncs4/popup");
  deleteId(id);
}
