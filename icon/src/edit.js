import React from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, CheckboxControl } from '@wordpress/components';
import { ImageEdit, onImageChange } from '../../js/ImageControl';
import { OptionsControl, UnitControl } from '../../js/selectControls';
import {
  ColorSelector,
  createColorClass,
  verifyColor,
} from '../../js/ColorSelector.js';

import Save from './save.js';

let units = [
  {
    value: "px",
    label: "px",
    min: 16,
    max: 64,
    step: 8,
    markStep: 16,
  },
  {
    value: "em",
    label: "em",
    min: 0.5,
    max: 3,
    step: 0.5,
  },
];

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;
    this.setStateAttributes = this.setStateAttributes.bind(this);

    this.state = {
      ...this.attributes,
      useDashicons: Boolean(this.attributes.useDashicons),
    };
  }

  componentDidMount() {
    this.setStateAttributes({ dashiconColor: {
        color: verifyColor(this.state.dashiconColor),
        slug: this.state.dashiconColor.slug,
      }
    });
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  render() {
    return <>
      <Save
        attributes = { this.state }
        blockProps = { this.props.blockProps }
      />
      <InspectorControls>
        <PanelBody
          title = "Icon settings"
          initialOpen = { true }
        >
          <CheckboxControl
            checked = { this.state.useDashicons }
            label = "Use Dashicon icon"
            help = {
              this.state.useDashicons
                ? "A Dashicon will be used for the icon"
                : "An image file will be used for the icon"
            }
            onChange = { (b) => this.setStateAttributes({ useDashicons: b }) }
          />
          <TextControl
            value = { this.state.dashicon }
            label = "Dashicon"
            help = "Input a dashicon name (not including 'dashicons-'). Read more at https://developer.wordpress.org/resource/dashicons"
            disabled = { !this.state.useDashicons }
            onChange = { (v) => this.setStateAttributes({ dashicon: v }) }
          />
          <ColorSelector
            label = "Dashicon color"
            value = { this.state.dashiconColor.color }
            onChange = { c => { this.setStateAttributes({ dashiconColor: c }) } }
          />
          { this.state.useDashicons &&
            <div style={{position: "relative", marginBottom: "16px"}}>
              <p
                style={{
                  color: "red",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  margin: 0,
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  zIndex: -1,
                }}
              >Invalid Dashicon</p>
              <span
                className = { "dashicons dashicons-" + this.state.dashicon }
                style = {{
                  fontSize: "128px",
                  padding: 0,
                  margin: 0,
                  width: "100%",
                  height: "auto",
                  backgroundColor: "white",
                }}
              />
            </div>
          }
          <ImageEdit
            onChange = { (i) => onImageChange(
              i,
              (_i) => this.setStateAttributes({img: _i })
            ) }
            img = { this.state.img }
            disabled = { this.state.useDashicons }
          />
          <UnitControl
            label = "Image size"
            unitSelector = {{
              label: "Units",
              value: this.state.size.unit,
              units: units,
            }}
            slider = {{
              value: this.state.size.value,
            }}
            onChange = {v => { this.setStateAttributes({ size: v }) }}
          />
          <OptionsControl
            options = {[
              {
                attribute: "margin",
                label: [
                  "Margin Top (em)",
                  "Margin Right (em)",
                  "Margin Bottom (em)",
                  "Margin Left (em)",
                ],
                value: this.state.margin,
                min: 0,
                max: 3,
                step: 0.5,
                toolTipRender: (v) => String(v) + "em",
              },
            ]}
            onChange = { this.setStateAttributes }
          />
        </PanelBody>
      </InspectorControls>
    </>
  }
}
