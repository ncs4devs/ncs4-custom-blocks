// Library of generic popup classes

import { useEffect, useState } from 'react';
import { select, dispatch, registerStore } from '@wordpress/data';
import { PanelBody, TextControl } from '@wordpress/components';
import { OptionsControl } from '../../js/SelectControls';
import { useColor, fromColorAttribute } from '../../js/ColorSelector';
import {ReactComponent as DismissIcon} from '../../img/dismiss.svg';

import * as selectors from './popupSelectors';
import * as actions from './popupActions';

/* Exports:
  (default) Popup - main component. Requires "backend" and "attributes" props.
    Popup.Dismiss - "X" for closing the popup (unnecessary if using
      Popup.Header)
    Popup.Header - Container for the top of the popup (includes Popup.Dismiss)
    Popup.Title - Displays a title inside the popup (accepts a "title" prop)
    Popup.Body - Container for popup contents

    Popup.className - class for all blocks which use Popup
    Popup.sizeOptions - list of all valid size options. Rarely needed.
    Popup.linkOptions - list of all valid popup button options. Rarely needed.

  POPUP_STORE - string name for the popup ID store. Rarely needed.
  (hook) usePopup - manages popup ID & colors and returns a control panel for
    use in an <Interface> component.
  makeAttributes( [Object: defaults] ) - returns an attributes object
    containing all the necessary popup attributes (prefixed by "popup").
    Accepts an optional "defaults" object.

Example usage:
// edit.js:

export default function Edit(props) {
  let [state, setAttribute, setState] = withAttributes(
    props.attributes,
    props.setAttributes,
    { ...props.attributes },
    {
      popupButtonTitle: (s) => s.trim(),
      popupTitle: (s) => s.trim(),
    },
  );

  let disabledSettings = {};
  let popupPanel = usePopup(state, setAttribute, disabledSettings);

  return (
    <Interface
      { ...props }
      save = { Save }
      state = { state }
      setAttribute = { setAttribute }
      controlPanels = {[
        popupPanel,
      ]}
    />
  );
}

// save.js:

export default function Save(props) {
  return (
    <div { ...props.blockProps }
      className = { [
        props.blockProps.className,
        "ncs4-popup",
        Popup.className,
      ].join(' ')}
    >
      <Popup
        backend = { props.backend }
        attributes = { props.attributes }
      >
        { props.backend
          ?
          <>
            <RichText
              tagName="h1"
              value = { props.attributes.popupTitle }
              onChange = { props.setAttribute("popupTitle") }
              placeholder = "Popup"
            />
            <InnerBlocks/>
          </>
          :
          <>
            <Popup.Header>
              <Popup.Title title={ props.attributes.popupTitle }/>
            </Popup.Header>
            <Popup.Body>
              <InnerBlocks.Content/>
            </Popup.Body>
          </>
        }
      </Popup>
    </div>
  );
}

*/

/***** Components *****/

const Popup = (props) => {
  let attrs = props.attributes;
  let id = "popup-" + String(attrs.popupId);
  let bgColor = fromColorAttribute(attrs.popupBgColor, true);
  let textColor = fromColorAttribute(attrs.popupTextColor, false);
  let css = `
    #${id}:target {
      display: block;
    }
  `

  return <>
    { props.backend
      ? <a
          data-popup-link-style = { attrs.popupLinkStyle }
          className = {
            "ncs4-popup-button " + (props.className || "")
            + " " + (attrs.popupLinkStyle || "")
          }
        >
          { attrs.popupButtonTitle }
        </a>
      : <a
          data-popup-link-style = { attrs.popupLinkStyle }
          className = {
            "ncs4-popup-button " + (props.className || "")
            + " " + (attrs.popupLinkStyle || "")
          }
          href= { "#" + id }
        >
          { attrs.popupButtonTitle }
        </a>
    }
    <div
      data-popup-id = { attrs.popupId }
      id = { id }
      className = "ncs4-popup__wrapper"
      style = {{
        textAlign: "left",
      }}
    >
      <a
        data-popup-opacity = { attrs.popupOverlayOpacity }
        className = "ncs4-popup-overlay"
        href = "#!"
        style ={{
          opacity: String(attrs.popupOverlayOpacity) + "%",
        }}
      />
      <div className = "ncs4-popup-content__wrapper">
        <div
          data-popup-background = { JSON.stringify(bgColor.data) }
          data-popup-color = { JSON.stringify(textColor.data) }
          data-popup-size = { attrs.popupSize }
          data-popup-shadow = { attrs.popupShadow }
          className = {
            [
              "ncs4-popup-content",
              bgColor.className,
              textColor.className,
              attrs.popupSize,
              attrs.popupShadow ? "popup-has-shadow" : null,
            ].join(' ')
          }
          style = {{
            ...bgColor.style,
            ...textColor.style,
          }}
        >
          { props.children }
        </div>
      </div>
      <style>{ css }</style>
    </div>
  </>
};

Popup.Dismiss = (props) => (
  <a
  href = "#!"
  className = "ncs4-popup__popup-dismiss-link"
  title = "Dismiss"
  >
  <DismissIcon
  className = "ncs4-popup__popup-dismiss"
  viewBox = "0 52.67 43 43"
  />
  </a>
);

Popup.Header = (props) => (
  <div className = "ncs4-popup__popup-header">
  <div className = "ncs4-popup__header-content">
  { props.children }
  </div>
  <Popup.Dismiss/>
  </div>
);

Popup.Title = (props) => (
  <h1 className = "ncs4-popup__popup-title">
  { props.title }
  </h1>
);

Popup.Body = (props) => (
  <div className = "ncs4-popup__popup-body">
  { props.children }
  </div>
);

/***** Settings *****/

// Should be included by all components that use Popup
Popup.className = "ncs4-popup";
Popup.sizeOptions = [
  { value: 'size-alert', label: 'Alert' },
  { value: 'size-small', label: 'Small' },
  { value: 'size-body', label: 'Medium (body size)' },
  { value: 'size-large', label: 'Large' },
];
Popup.linkOptions = [
  { value: '', label: 'Link'},
  { value: 'ncs4-button ncs4-button__blue', label: 'Blue button'},
  { value: 'ncs4-button ncs4-button__yellow', label: 'Yellow button'},
  { value: 'ncs4-button ncs4-button__gold', label: 'Gold button'},
];

export default Popup;

/***** ID store management *****/

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

/***** Popup hook *****/

const manageId = (popupId, blockId, callback) => useEffect(() => {
  //console.log("Requesting id: ", popupId);
  let { createId, deleteId } = dispatch("ncs4/popup");
  let resp = select("ncs4/popup").requestId(popupId);
  resp === -1 ? resp = popupId : resp;
  //console.log("Reserving id: ", resp);
  callback(resp);
  createId(resp);

  return () => {
    //console.log("Freeing id: ", resp);
    dispatch("ncs4/popup").deleteId(resp);
  }
}, [blockId]);

export function usePopup(blockId, state, setAttribute, disabledSettings) {
  manageId(state.popupId, blockId, setAttribute("popupId"));
  useColor(state.popupBgColor, setAttribute("popupBgColor"));
  useColor(state.popupTextColor, setAttribute("popupTextColor"));

  return {
    label: "Popup settings",
    controls: makeSettings(disabledSettings),
  };
}

/***** Setup functions *****/

export function makeAttributes(defaults) {
  defaults = Object.assign({
    popupOverlayOpacity: 90,
    popupBgColor: {color: null, slug: 'white-bright'},
    popupTextColor: {color: null, slug: 'secondary-1c'},
    popupButtonTitle: 'Show',
    popupId: 0,
    popupSize: 'size-body',
    popupLinkStyle: '',
    popupShadow: false,
  }, defaults);
  return {
    popupOverlayOpacity: {
      type: 'int',
      source: "attribute",
      attribute: "data-popup-opacity",
      selector: ".ncs4-popup__popup-overlay",
      default: defaults.popupOverlayOpacity,
    },
    popupBgColor: {
      type: 'json',
      source: "attribute",
      attribute: "data-popup-background",
      selector: ".ncs4-popup-content",
      default: defaults.popupBgColor,
    },
    popupTextColor: {
      type: 'json',
      source: "attribute",
      attribute: "data-popup-color",
      selector: ".ncs4-popup-content",
      default: defaults.popupTextColor,
    },
    popupButtonTitle: {
      type: 'string',
      source: "text",
      selector: ".ncs4-popup-button",
      default: defaults.popupButtonTitle,
    },
    popupId: {
      type: 'int',
      source: "attribute",
      attribute: "data-popup-id",
      selector: ".ncs4-popup__wrapper",
      default: defaults.popupId,
    },
    popupSize: {
      type: 'string',
      source: "attribute",
      attribute: "data-popup-size",
      selector: ".ncs4-popup-content",
      default: defaults.popupSize,
    },
    popupLinkStyle: {
      type: 'string',
      source: "attribute",
      attribute: "data-popup-link-style",
      selector: ".ncs4-popup-button",
      default: defaults.popupLinkStyle,
    },
    popupShadow: {
      type: 'boolean',
      source: "attribute",
      attribute: "data-popup-shadow",
      selector: ".ncs4-popup-content",
      default: defaults.popupShadow,
    },
  }
}

function makeSettings(disableds) {
  return [
    {
      type: "text",
      label: "Button title",
      placeholder: "Show",
      attribute: "popupButtonTitle",
      disabled: disableds.popupButtonTitle,
    },
    {
      type: "color",
      label: "Popup background",
      attribute: "popupBgColor",
      disabled: disableds.popupBgColor,
    },
    {
      type: "color",
      label: "Popup text",
      attribute: "popupTextColor",
      disabled: disableds.popupTextColor,
    },
    {
      type: "choice",
      label: "Use shadow below header",
      attribute: "popupShadow",
      disabled: disableds.popupShadow,
    },
    {
      type: "choice",
      label: "Overlay opacity",
      attribute: "popupOverlayOpacity",
      min: 0,
      max: 100,
      step: 1,
      markStep: 20,
      markRender: (v) => String(v) + "%",
      disabled: disableds.popupOverlayOpacity,
    },
    {
      type: "choice",
      label: "Content size",
      attribute: "popupSize",
      choices: Popup.sizeOptions,
      disabled: disableds.popupSize,
    },
    {
      type: "choice",
      label: "Link style",
      attribute: "popupLinkStyle",
      choices: Popup.linkOptions,
    },
  ];
}
