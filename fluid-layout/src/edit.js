import React from 'react';

import {
  InnerBlocks,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import { ColorSelector, createColorClass } from '../../js/ColorSelector.js';
import { OptionsControl, UnitControl } from '../../js/SelectControls.js';
import { FluidLayoutSave } from './save.js';

let allowed_inner_blocks = [
  'ncs4-custom-blocks/fluid-layout-item',
];

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

let layoutUsesMaxWidth = [
  "equal-grid",
  "equal-columns",
  "floated-image",
];

let layoutUsesFixedColumns = [
  "fixed-grid",
  "fixed-columns",
];

let layoutOptions = [
  { value: "equal-grid", label: "Equal Grid" },
  { value: "equal-columns", label: "Equal Columns" },
  { value: "auto-grid", label: "Auto Grid" },
  //{ value: "fixed-grid", label: "Fixed Grid" }, // Unsafe, causes shrinkage or overflow
  { value: "fixed-columns", label: "Fixed Columns" },
  { value: "floated-image", label: "Floated Image" },
];

let justifyOptions = [
  { value: "space-around", label: "Space Around" },
  { value: "space-between", label: "Space Between" },
  { value: "space-evenly", label: "Space Evenly" },
  { value: "left", label: "Left", },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
  { value: "normal", label: "None" },
];

let colSizeOptions = [
  { value: "1fr", label: "Equal Width" },
  { value: "auto", label: "Auto Width" },
];

export class FluidLayoutEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.setAttributes = props.setAttributes;

    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      bgColor: this.attributes.bgColor,
      textColor: this.attributes.textColor,
      alignment: this.attributes.alignment,
      padding: this.attributes.padding,
      margin: this.attributes.margin,
      optionLayout: this.attributes.optionLayout,
      minWidth: this.attributes.minWidth, // object
      maxWidth: this.attributes.maxWidth, // object
      rowGap: this.attributes.rowGap,
      columnGap: this.attributes.columnGap,
      optionJustify: this.attributes.optionJustify,
      numColumns: this.attributes.numColumns,
      optionColSize: this.attributes.optionColSize,
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

    return (
      <>
        <FluidLayoutSave
          blockProps = { blockProps }
          attributes = { this.state }
          backend = { true }
          allowed_inner_blocks = { allowed_inner_blocks }
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
            title = "Layout Settings"
            initialOpen = { true }
          >
            <OptionsControl
              options = {[
                {
                  attribute: "optionLayout",
                  label: "Layout Type",
                  value: this.state.optionLayout,
                  choices: layoutOptions,
                },
              ]}
              onChange = { this.updateState }
            />
            {/* Max Width controls */}
            { layoutUsesMaxWidth.includes(this.state.optionLayout) &&
              <UnitControl
                label = "Maximum width settings"
                help = "The max width that the entire content block can have"
                toggleSelector = {{
                  attribute: "useMaxWidth",
                  label: "Use max width",
                  help: this.state.maxWidth.useMaxWidth
                    ? "The block has a max width"
                    : "The block will take up as much space as possible",
                  value: this.state.maxWidth.useMaxWidth,
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
            }
            {/* Min Width controls */}
            <UnitControl
              label = "Minimum width settings"
              help = "The minimum width the content block can have"
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
            {/* Fixed Column controls */}
            { layoutUsesFixedColumns.includes(this.state.optionLayout) &&
              <OptionsControl
                options = {[
                  {
                    attribute: "numColumns",
                    label: "Columns",
                    value: this.state.numColumns,
                    min: 2,
                    max: 10,
                  },
                  {
                    attribute: "optionColSize",
                    label: "Column Width",
                    value: this.state.optionColSize,
                    choices: colSizeOptions,
                  },
                ]}
                onChange = { this.updateState }
              />
            }
            <OptionsControl
              options = {[
                {
                  attribute: "optionJustify",
                  label: "Justify items",
                  value: this.state.optionJustify,
                  choices: justifyOptions,
                },
              ]}
              onChange = { this.updateState }
            />
          </PanelBody>
          <PanelBody
            title = "Spacings"
            initialOpen = { true }
          >
            <OptionsControl
              options = {[
                {
                  attribute: "rowGap",
                  label: "Row Gap (rem)",
                  value: this.state.rowGap,
                  min: 0,
                  max: paddingMax,
                  step: paddingStep,
                },
                {
                  attribute: "columnGap",
                  label: "Column Gap (rem)",
                  value: this.state.columnGap,
                  min: 0,
                  max: paddingMax,
                  step: paddingStep,
                },
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
              alignment: (a === undefined) ? 'none' : a,
            }) }
          />
        </BlockControls>
      </>
    );
  }
}
