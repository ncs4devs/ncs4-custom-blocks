// Base class containing functions for all bp-sections
// Handles title inheritance, sanitization, etc
import React from 'react';
import { select } from '@wordpress/data';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
  TextControl,
  PanelBody,
  ToggleControl,
  RadioControl,
} from '@wordpress/components';

export class BPSection extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

  createClassName = (classes, slug = null) => [
    "ncs4-section",
    "ncs4-bp-content",
    slug ? "ncs4-bp-content__" + slug : null,
  ].join(' ') + ' ' + classes;

  // https://gist.github.com/spyesx/561b1d65d4afb595f295
  // Used in child class method for anchors
  sanitize_string(str) {
    if (typeof str !== 'string' ) {
      return;
    }
  	str = str.replace(/^\s+|\s+$/g, ''); // trim
  	str = str.toLowerCase();

  	// remove accents, swap ñ for n, etc
  	var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
  	var to   = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

  	for (var i=0, l=from.length ; i<l ; i++)
  	{
  		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  	}

  	str = str.replace('.', '-') // replace a dot by a dash
  		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  		.replace(/\s+/g, '-') // collapse whitespace and replace by a dash
  		.replace(/-+/g, '-') // collapse dashes
  		.replace( /\//g, '' ); // collapse all forward-slashes

  	return str;
  }

  render() {
    throw new Error("BPSection child has not implemented render()");
  }
}

export class BPSectionEdit extends BPSection {
  constructor(props) {
    super(props);
    this.setAttributes = props.setAttributes;
    this.clientId = props.clientId;

    this.getBlockList = this.getBlockList.bind(this);
    this.signalChildren = this.signalChildren.bind(this);
    this.updateChildrenTitles = this.updateChildrenTitles.bind(this);
    this.onWPData = this.onWPData.bind(this);

    this.updateInheritedTitle = this.updateInheritedTitle.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.setStateAttributes = this.setStateAttributes.bind(this);
    this.setShowTitle = this.setShowTitle.bind(this);
    this.setOptionCreateAnchor = this.setOptionCreateAnchor.bind(this);
    this.setAnchorSlug = this.setAnchorSlug.bind(this);

    this.state = {
      title: this.attributes.title,
      inheritedTitle: this.attributes.inheritedTitle,
      showTitle: this.attributes.showTitle,
      optionCreateAnchor: this.attributes.optionCreateAnchor,
      anchorSlug: this.attributes.anchorSlug,

      blockList: this.getBlockList(),
    };
  }

  componentDidMount() {
    document.addEventListener(
      "sectionTitleUpdate_" + this.clientId,
      (e) => { this.updateInheritedTitle(e.detail.title) }
    );
    document.addEventListener(
      "requestTitle",
      (e) => {
        let bl = this.getBlockList();
        if (bl.includes(e.detail.id)) {
          this.signalChild(
            "sectionTitleUpdate",
            { title: this.state.title || this.state.inheritedTitle },
            e.detail.id
          );
          this.setState( { blockList: bl } );
        }
      }
    );
    wp.data.subscribe(this.onWPData);

    // Request inherited title on new block creation (doesn't mount fast enough)
    if (!this.state.inheritedTitle) {
      document.dispatchEvent(new CustomEvent(
        "requestTitle",
        {
          detail: {
            id: this.clientId
          }
        }
      ));
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      "sectionTitleUpdate_" + this.clientId,
      (e) => { this.updateInheritedTitle(e.detail.title) }
    );
  }

  // Title inheritance functions

  getBlockList() {
    return select("core/block-editor").getBlockOrder(this.clientId);
  }

  signalChild(eventName, details, id) {
    document.dispatchEvent(new CustomEvent(
      eventName + "_" + id,
      { detail: details }
    ));
  }

  signalChildren(eventName, details) {
    for (let bid of select("core/block-editor").getBlockOrder(this.clientId)) {
      this.signalChild(eventName, details, bid);
    }
  }

  updateChildrenTitles(t) {
    this.signalChildren("sectionTitleUpdate", {title: t});
  }

  // update blockList
  onWPData() {
    let newBlockList = this.getBlockList();
    if ( newBlockList != this.state.blockList ) {
      this.setState( { blockList: newBlockList } );
    }
  }

  // Update handlers

  updateInheritedTitle(t) {
    this.setState(
      { inheritedTitle: t },
      () => { this.setAttributes( { inheritedTitle: t } ) },
    );

    // pass t down to children
    if (!this.state.title) {
      this.updateChildrenTitles(t);
    }
  }

  updateTitle(t) {
    this.setState(
      { title: t },
      () => { this.setAttributes( { title: t } ) }
    );
    if (!t) {
      this.updateChildrenTitles(this.state.inheritedTitle);
    } else {
      this.updateChildrenTitles(t);
    }
  }

  setStateAttributes(attrs) {
    this.setState(
      attrs,
      () => { this.setAttributes( attrs ) }
    );
  }

  setShowTitle(b) {
    this.setStateAttributes( { showTitle: b } );
  }

  setOptionCreateAnchor(v) {
    this.setStateAttributes( { optionCreateAnchor: v } );
  }

  setAnchorSlug(v) {
    this.setStateAttributes( { anchorSlug: v } );
  }

}

export class BPIndustrySectionEdit extends BPSectionEdit {
  constructor(props) {
    super(props);
    this.slug = props.industry;
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <>
        <div { ...blockProps }
          className = {
            this.createClassName(blockProps.className, this.slug)
          }
        >
          { this.state.showTitle && (
            <TextControl
              className = {
                  "ncs4-custom-blocks-" + this.slug + "-section-title"
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
        </InspectorControls>
      </>
    )
  }
}

export class BPIndustrySectionSave extends BPSection {
  constructor(props) {
    super(props);
    this.slug = props.industry;
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <div { ...blockProps }
        className = {
          this.createClassName(blockProps.className, this.slug)
        }
      >
        { this.attributes.showTitle
          ?
            <h6
              className = {
                  "ncs4-custom-blocks-" + this.slug + "-section-title-area"
                + " ncs4-custom-blocks-section-title-area"
              }
            >
              { this.attributes.title
                ? <span class="section-title">{ this.attributes.title }</span>
                : <span class="section-title_inherited">{ this.attributes.inheritedTitle }</span>
              }
            </h6>
          :
            <h6
              className = {
                  "ncs4-custom-blocks-" + this.slug + "-section-title-area"
                + " ncs4-custom-blocks-section-title-area"
                + " ncs4-custom-blocks-" + this.slug + "-section-title-area__hidden"
                + " ncs4-custom-blocks-section-title-area__hidden"
              }
            />
        }
        { (
             (this.attributes.optionCreateAnchor == 'enable')
          || (
                 this.attributes.optionCreateAnchor == 'inherit'
              && this.attributes.title
              && this.attributes.showTitle
             )
          ) &&
            this.attributes.anchorSlug
              ? <a id = {this.sanitize_string(this.attributes.anchorSlug)}/>
              : <a id = {this.sanitize_string(this.attributes.title)}/>
        }
        <InnerBlocks.Content/>
      </div>
    );
  }
}
