import React, { Component } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';

export class BPContentEdit extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.clientId = props.clientId;
    this.setAttributes = props.setAttributes;

    this.getBlockList = this.getBlockList.bind(this);
    this.reorderSubtopics = this.reorderSubtopics.bind(this);
    this.updateSubtopic = this.updateSubtopic.bind(this);

    this.state = {
      subtopics: this.attributes.subtopics,
      blockList: this.getBlockList(),
    }

    wp.data.subscribe(this.reorderSubtopics);
    document.addEventListener("titleUpdate", this.updateSubtopic);
  }

  static allowed_inner_blocks = [
    'ncs4-custom-blocks/bp-subtopic',
  ];

  createClassName(classes) {
    return [
      'ncs4-bp-content',
    ].join(' ') + ' ' + classes;
  }

  getBlockList() {
    return select("core/block-editor").getBlockOrder(this.clientId);
  }

  getChildren(id) {
    return select("core/block-editor")
      .getBlocksByClientId(id)[0]
      .innerBlocks;
  }

  reorderSubtopics() {
    const newBlockList = this.getBlockList();
    if ( newBlockList != this.state.blockList ) {

      const topics =
        newBlockList.map( (id, i) => {
          const block = select("core/block-editor").getBlocksByClientId(id)[0];
          // Update children ids
          document.dispatchEvent(new CustomEvent(
            "subtopicsUpdate",
            { detail: {
                id: id,
                index: i,
              }
            }
          ));
          return block.attributes.title;
        });

      this.setState(
        { subtopics: topics, blockList: newBlockList },
        () => { this.setAttributes( { subtopics: topics } ) },
      );
    }
  }

  updateSubtopic( { detail: { id, index, oldTitle, newTitle } } ) {
    var topics = [ ...this.state.subtopics ];
    if (topics[index] === oldTitle) {
      topics[index] = newTitle;
      this.setState(
        { subtopics: topics },
        () => { this.setAttributes( { subtopics: topics } ) }
      );
    } else {
      console.warn("Subtopic title validation failed");
    }
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <div { ...blockProps }
        className = { this.createClassName(blockProps.className) }
      >
        <SubtopicsPanel subtopics = { this.state.subtopics }/>
        <ContentArea allowed_inner_blocks = { this.allowed_inner_blocks }/>
      </div>
    );
  }
}

class SubtopicsPanel extends React.Component {
  render() {
    return (
      <aside
        id = "ncs4-bp-content__subtopics-sidebar"
        className = "show-panel-0"
      >
        <SubtopicsPanelWidgets/>
        <hr/>
        <div id="ncs4-bp-content__subtopics-sidebar__subtopics-area">
          {
            this.props.subtopics.map( (t, i) => (
              i != 0 &&
                <button
                  id = { "ncs4-bp-content__subtopic-btn__" + i }
                  className = "ncs4-bp-content__subtopic-btn"
                >{ t }</button>
            ))
          }
        </div>
      </aside>
    );
  }
}

class SubtopicsPanelWidgets extends React.Component {
  render() {
    return (
      <div id="ncs4-bp-content__subtopics-sidebar__widget-area">
        <HomePanel/>
      </div>
    );
  }
}

class HomePanel extends React.Component {
  render() {
    return (
      <div
        id = "ncs4-bp-content__subtopics-widget-panel__0"
        className = "ncs4-bp-content__subtopics-panel"
      >
        <button
          id="ncs4-bp-content__subtopic-btn__0"
          className="ncs4-bp-content__widget-button ncs4-bp-content__subtopic-btn"
          title="Home"
        >
          <span class="dashicons dashicons-undo"></span>
        </button>
        <a
          id="ncs4-bp-content__back-to-topics"
          title="Back"
          href = "/resources/best-practices/best-practices-demo/"
        >
          <span class="dashicons dashicons-admin-home"></span>
        </a>
        <button
          id = "ncs4-bp-content__print"
          title = "Print"
          onClick = "setPanel(1)"
        >
          <span class="dashicons dashicons-printer"></span>
        </button>
      </div>
    );
  }
}

class ContentArea extends React.Component {
  constructor(props) {
    super(props);
    this.allowedBlocks = props.allowed_inner_blocks;
  }

  render() {
    return (
      <article id="ncs4-bp-content__content-area__wrapper">
        <FilterSidebar/>
        <div id="ncs4-bp-content__content-area" class="ncs4-bp-content__content-area">
          <InnerBlocks
            allowedBlocks = { this.allowedBlocks }
          />
        </div>
      </article>
    );
  }
}

class FilterSidebar extends React.Component {
  render() {
    return (
      <aside id="ncs4-bp-content__filter-sidebar__wrapper">
        <div id="ncs4-bp-content__filter-sidebar">

        </div>
      </aside>
    );
  }
}
