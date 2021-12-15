import React, { Component } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { ReactComponent as RightCaret } from '../caret-right.svg';
import { ReactComponent as BackToTop } from '../back-to-top.svg';

export class BPContentSave extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

  createClassName(classes) {
    return [
      'ncs4-bp-content',
    ].join(' ') + ' ' + classes;
  }

  render() {
    let blockProps = this.props.blockProps;

    return (
      <div { ...blockProps }
        className = { this.createClassName(blockProps.className) }
      >
        <SubtopicsPanel attributes = { this.attributes }/>
        <ContentArea/>
      </div>
    );
  }
}

class SubtopicsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
  }

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
            this.attributes.subtopics.map( (t, i) => (
              i != 0 &&
                <button
                  id = { "ncs4-bp-content__subtopic-btn__" + i }
                  className = "ncs4-bp-content__subtopic-btn"
                >
                  <span>
                    { t }
                  </span>
                  <input
                    type = "checkbox"
                    checked = { false }
                    id = { "ncs4-bp-content__subtopic-print-select__" + i }
                    className = "ncs4-bp-content__subtopic-print-select"
                  />
                </button>
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
        <PrintPanel/>
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
        <a
          id="ncs4-bp-content__back-to-topics"
          title="Back to Best Practices Topics"
          href = "/resources/best-practices/best-practices-demo/"
        >
          <span class="dashicons dashicons-undo"></span>
        </a>
        <button
          id="ncs4-bp-content__subtopic-btn__0"
          className="ncs4-bp-content__widget-button ncs4-bp-content__subtopic-btn"
          title="Home"
        >
          <span class="dashicons dashicons-admin-home"></span>
        </button>
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

class PrintPanel extends React.Component {
  render() {
    return (
      <div
        id = "ncs4-bp-content__subtopics-widget-panel__1"
        className = "ncs4-bp-content__subtopics-panel"
      >
        <div
          id = "ncs4-bp-content__subtopics-print-panel-buttons"
        >
          <button
            id = "ncs4-bp-content__widget-panel__1-cancel"
            className = "ncs4-bp-content__widget-panel-btn"
            title = "Cancel print"
            onClick = "setPanel(0)"
          >
            Cancel Print
          </button>
          <button
            id = "ncs4-bp-content__widget-panel__1-print"
            className = "ncs4-bp-content__widget-panel-btn"
            title = "Print page"
          >
            Print Page
          </button>
        </div>
        <PrintIndustryFilter
          industry = "Professional / Entertainment"
          slug = "pro"
        />
        <PrintIndustryFilter
          industry = "Intercollegiate"
          slug = "college"
        />
        <PrintIndustryFilter
          industry = "Interscholastic"
          slug = "hs"
        />
        <PrintIndustryFilter
          industry = "Marathon / Endurance"
          slug = "marathon"
        />
      </div>
    );
  }
}

class PrintIndustryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.industry = props.industry;
    this.slug = props.slug;
  }

  render() {
    return (
      <div
        id = { "bp-subtopic__print-filter__" + this.slug }
        className = "bp-subtopic__print-filter"
      >
        <label
          for = { "bp-subtopic__print-filter-checkbox__" + this.slug }
        >
          { this.industry }
        </label>
        <input
          type = "checkbox"
          id = { "bp-subtopic__print-filter-checkbox__" + this.slug }
          className = "bp-subtopic__print-filter-checkbox"
        />
      </div>
    );
  }
}

class ContentArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="ncs4-bp-content__content-area__wrapper">
        <FilterSidebar/>
        <div id="ncs4-bp-content__content-area" class="ncs4-bp-content__content-area">
          <InnerBlocks.Content/>
        </div>
      </article>
    );
  }
}

class FilterSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleExpand() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    return (
      <aside id="ncs4-bp-content__filter-sidebar__wrapper">
        <div
          id = "ncs4-bp-content__filter-sidebar"
          className = "toggled"
        >

          <a
            id = "ncs4-bp-filter__back-to-top"
            href = "#page"
          >
            Back to Top
            <BackToTop/>
          </a>

          <div id="ncs4-bp-filter__pro" class="ncs4-bp-filter">
            <div class="color-bar"/>
            <label class="bp-lbl" for="ncs4-bp-btn__pro">
              Professional / Entertainment
            </label>
            <input type="checkbox" id="ncs4-bp-btn__pro" class="ncs4-bp-btn"/>
          </div>

          <div id="ncs4-bp-filter__college" class="ncs4-bp-filter">
            <div class="color-bar"/>
            <label class="bp-lbl" for="ncs4-bp-btn__college">
              Intercollegiate
            </label>
            <input type="checkbox" id="ncs4-bp-btn__college" class="ncs4-bp-btn"/>
          </div>

          <div id="ncs4-bp-filter__hs" class="ncs4-bp-filter">
            <div class="color-bar"/>
            <label class="bp-lbl" for="ncs4-bp-btn__hs">
              Interscholastic
            </label>
            <input type="checkbox" id="ncs4-bp-btn__hs" class="ncs4-bp-btn"/>
          </div>

          <div id="ncs4-bp-filter__marathon" class="ncs4-bp-filter">
            <div class="color-bar"/>
            <label class="bp-lbl" for="ncs4-bp-btn__marathon">
              Marathon / Endurance
            </label>
            <input type="checkbox" id="ncs4-bp-btn__marathon" class="ncs4-bp-btn"/>
          </div>

          <button
            id = "filter-sidebar__expand"
            title = "Show filters"
          >
            <RightCaret/>
          </button>
        </div>
      </aside>
    );
  }
}
