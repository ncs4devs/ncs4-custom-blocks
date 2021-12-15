import React from 'react';

import {
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { ColorSelector, createColorClass } from '../../js/ColorSelector.js';
import { OptionsControl } from '../../js/SelectControls.js';
import { MarginSave } from './save.js';

let paddingMax = 5;
let paddingStep = 0.5;

export class MarginEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      optionSize: this.attributes.optionSize,
      noPadding: this.attributes.noPadding,
      verticalPadding: this.attributes.verticalPadding,
      verticalMargin: this.attributes.verticalMargin,
      alignment: this.attributes.alignment,
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
    let blockProps = this.props.blockProps;
    let generalOptions = [
      {
        attribute: "optionSize",
        label: "Content size (width)",
        help: "Max width of content area",
        value: this.state.optionSize,
        choices: [
          { value: "max",
            label: "Max (Full width, no margin)",
          },
          { value: "large",
            label: "Large (Use for layout)",
          },
          { value: "small",
            label: "Small (Use for body text)",
          },
        ],
      },
      {
        attribute: "noPadding",
        label: "Padding (Left & Right)",
        help: this.state.noPadding
          ? "Left-Right padding disabled (Use for layout)"
          : "Left-Right padding enabled (Use for text)",
        value: this.state.noPadding,
        invertValue: true,
      },
      {
        attribute: "verticalPadding",
        label: [
          "Padding Top (rem)",
          "Padding Bottom (rem)",
        ],
        value: this.state.verticalPadding,
        min: 0,
        max: paddingMax,
        step: paddingStep,
        tooltipRender: (v) => String(v) + "rem",
      },
      {
        attribute: "verticalMargin",
        label: [
          "Margin Top (rem)",
          "Margin Bottom (rem)",
        ],
        value: this.state.verticalMargin,
        min: 0,
        max: paddingMax,
        step: paddingStep,
        tooltipRender: (v) => String(v) + "rem",
      },
    ]

    return (
      <>
        <MarginSave
          blockProps = { blockProps }
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
              onChange = { c => { this.setStateAttributes({ bgColor: c }) } }
            />
            <ColorSelector
              label = "Text color"
              value = { this.state.textColor.color }
              onChange = { c => { this.setStateAttributes({ textColor: c }) } }
            />
          </PanelBody>
          <PanelBody
            title = "General"
            initialOpen = { true }
          >
            <OptionsControl
              options = { generalOptions }
              onChange = { this.updateState }
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar
            value = { this.state.alignment }
            onChange = { (a) => this.setStateAttributes( {
              alignment: (a === undefined) ? 'none' : a,
            }) }
          />
        </BlockControls>
      </>
    );
  }
}
