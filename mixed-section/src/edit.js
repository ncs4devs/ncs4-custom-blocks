import React from 'react';
import { BPSectionEdit } from '../../js/bp-section.js';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
  TextControl,
  PanelBody,
  ToggleControl,
  RadioControl,
  CheckboxControl,
} from '@wordpress/components';

export class SectionMixedEdit extends BPSectionEdit {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;

    this.setPro = this.setPro.bind(this);
    this.setCollege = this.setCollege.bind(this);
    this.setHs = this.setHs.bind(this);
    this.setMarathon = this.setMarathon.bind(this);

    let superState = this.state;
    this.state = {
      ...superState,
      isProChecked: props.attributes.isProChecked,
      isCollegeChecked: props.attributes.isCollegeChecked,
      isHsChecked: props.attributes.isHsChecked,
      isMarathonChecked: props.attributes.isMarathonChecked,
    }
  }

  setPro(b) {
    this.setStateAttributes( {isProChecked: b} );
  }

  setCollege(b) {
    this.setStateAttributes( {isCollegeChecked: b} );
  }

  setHs(b) {
    this.setStateAttributes( {isHsChecked: b} );
  }

  setMarathon(b) {
    this.setStateAttributes( {isMarathonChecked: b} );
  }

  createClassName(
      classes,
  ) {
    return [
      "ncs4-section",
    ].join(' ') + ' ' + classes;
  }

  render() {
    let blockProps = this.props.blockProps;
    
    return (
      <>
        <div { ...blockProps }
          className = {
            this.createClassName(blockProps.className)
          }
        >
          { this.state.showTitle && (
            <TextControl
              className = {
                  "ncs4-custom-blocks-mixed-section-title"
                + " ncs4-custom-blocks-section-title"
              }
              onChange = { this.updateTitle }
              value = { this.state.title }
              placeholder = {
                this.state.inheritedTitle
                  ? this.state.inheritedTitle
                  : "Section Title"
              }
            />
          )}
          <InnerBlocks/>
        </div>
        <InspectorControls>
          <PanelBody
            title = "General"
            initialOpen = { true }
          >
            <ToggleControl
              label = "Show section title"
              help = {
                this.state.showTitle
                  ? "Section title shown"
                  : "Section title hidden"
              }
              checked = { this.state.showTitle }
              onChange = { this.setShowTitle }
            />
            <RadioControl
              label = "Generate section anchor"
              help = "When should a section anchor be generated"
              selected = { this.state.optionCreateAnchor }
              options = { [
                {
                  label: "An anchor will be be generated when the section has a defined title (not inherited)",
                  value: 'inherit',
                },
                {
                  label: "An anchor will always be generated",
                  value: 'enable',
                },
                {
                  label: "An anchor will never be generated",
                  value: "disable",
                },
              ] }
              onChange = { this.setOptionCreateAnchor }
            />
            <TextControl
              label = "Anchor slug"
              help = "Leave blank to use the section title (not inherited title)"
              placeholder = { this.sanitize_string(this.state.title) }
              value = { this.state.anchorSlug }
              onChange = { this.setAnchorSlug }
            />
          </PanelBody>
          <PanelBody
            title = "Industries"
            initialOpen = {true}
          >
            {/* Industry Selection */}
            <CheckboxControl
              label = "Professional"
              help = "Should this display as Professional-related content?"
              checked = { this.state.isProChecked }
              onChange = { this.setPro }
            />
            <CheckboxControl
              label = "Intercollegiate"
              help = "Should this display as Intercollegiate-related content?"
              checked = { this.state.isCollegeChecked }
              onChange = { this.setCollege }
            />
            <CheckboxControl
              label = "Interscholastic"
              help = "Should this display as Interscholastic-related content?"
              checked = { this.state.isHsChecked }
              onChange = { this.setHs }
            />
            <CheckboxControl
              label = "Marathon & Endurance Events"
              help = "Should this display as Marathon-related content?"
              checked = { this.state.isMarathonChecked }
              onChange = { this.setMarathon }
            />
          </PanelBody>
        </InspectorControls>
      </>
    );
  }
}
