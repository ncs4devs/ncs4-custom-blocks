import React from 'react';

import {
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import { ColorSelector, createColorClass } from '../../js/ColorSelector.js';
import { OptionsControl, UnitControl } from '../../js/SelectControls.js';
import { FluidLayoutItemSave } from './save.js';

let paddingMax = 5;
let paddingStep = 0.5;
let units = [
  {
    value: "%",
    label: "%",
    min: 0,
    max: 100,
    step: 1,
    markStep: 10,
  },
  {
    value: "vw",
    label: "vw",
    min: 0,
    max: 100,
    markStep: 10,
  },
  {
    value: "ch",
    label: "ch",
    min: 10,
    max: 50,
    step: 5,
  },
  {
    value: "em",
    label: "em",
    min: 0,
    max: 100,
    markStep: 10,
  },
  {
    value: "rem",
    label: "rem",
    min: 10,
    max: 100,
    markStep: 10,
  },
];

export class FluidLayoutItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.blockProps = props.blockProps;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      alignment: this.attributes.alignment,
      padding: this.attributes.padding,
      margin: this.attributes.margin,
      minWidth: this.attributes.minWidth,
      maxWidth: this.attributes.maxWidth,
    }
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  updateState(v) {
    this.setStateAttributes(v);
  }

  render() {

    return (
      <>
        <FluidLayoutItemSave
          blockProps = { this.blockProps }
          attributes = { this.state }
          backend = { true }
        />
        <InspectorControls>
          <PanelBody
            title = "Color"
            initialOpen = { false }
          >
            <ColorSelector
              label = "Background color"
              value = { this.state.bgColor.color }
              onChange = { c => { this.setStateAttributes({ bgColor: c }) }}
            />
            <ColorSelector
              label = "Text color"
              value = { this.state.textColor.color }
              onChange = { c => { this.setStateAttributes({ textColor: c }) }}
            />
          </PanelBody>
          <PanelBody
            title = "Dimensions"
            initialOpen = { true }
          >
            <UnitControl
              label = "Maximum width settings"
              help = "The max width that the content can have"
              toggleSelector = {{
                attribute: "useMaxWidth",
                label: "Use max width",
                help: this.state.maxWidth.useMaxWidth
                  ? "Content has a max width"
                  : "Content does not have a max width",
                value: this.state.maxWidth.useMaxWidth
              }}
              unitSelector = {{
                label: "Units",
                value: this.state.maxWidth.unit,
                units: units,
              }}
              slider = {{
                label: "Max width",
                value: this.state.maxWidth.value,
              }}
              onChange = {v => { this.setStateAttributes({ maxWidth: v }) }}
            />
            <UnitControl
              label = "Minimum width settings"
              help = "The minimum width the content may have"
              unitSelector = {{
                label: "Units",
                value: this.state.minWidth.unit,
                units: units,
              }}
              slider = {{
                label: "Min width",
                value: this.state.minWidth.value,
              }}
              onChange = {v => { this.setStateAttributes({ minWidth: v }) }}
            />
          </PanelBody>
          <PanelBody
            title = "Spacings"
            initialOpen = { true }
          >
            <OptionsControl
              options = {[
                {
                  attribute: "padding",
                  label: [
                    "Padding Top (rem)",
                    "Padding Right (rem)",
                    "Padding Bottom (rem)",
                    "Padding Left (rem)",
                  ],
                  value: this.state.padding,
                  min: 0,
                  max: paddingMax,
                  step: paddingStep,
                  tooltipRender: (v) => String(v) + "rem",
                },
                {
                  attribute: "margin",
                  label: [
                    "Margin Top (rem)",
                    "Margin Right (rem)",
                    "Margin Bottom (rem)",
                    "Margin Left (rem)",
                  ],
                  value: this.state.margin,
                  min: 0,
                  max: paddingMax,
                  step: paddingStep,
                  tooltipRender: (v) => String(v) + "rem",
                },
              ]}
              onChange = { this.updateState }
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar
            value = { this.state.alignment }
            onChange = { (a) => this.setStateAttributes( {
              alignment: (a === undefined) ? "none" : a,
            }) }
          />
        </BlockControls>
      </>
    );
  }
}
