import React from 'react';

export class BPTopicSave extends React.Component {
  constructor(props) {
    super(props);
    this.attributes = props.attributes;
    this.blockProps = props.blockProps;
  }

  createClassName(classes) {
    return [
      'ncs4-bp-topic',
    ].join(' ') + ' ' + classes;
  }

  render() {
    return (
      <a { ...this.blockProps }
        className = { this.createClassName(this.blockProps.className) }
        href = { this.attributes.link }
      >
        <TopicTextArea text = { this.attributes.title }/>
        <TopicIconArea
          img = { this.attributes.img }
          svg = { this.attributes.svg }
        />
        <div className = "ncs4-bp-topic__overlay"/>
      </a>
    );
  }
}

class TopicTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className = "ncs4-bp-topic__text-area">
        <p>{ this.text }</p>
      </div>
    );
  }
}

class TopicIconArea extends React.Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.svg = props.svg;
  }

  render() {
    let renderSvg = this.img && this.img.mime === "image/svg+xml" && this.svg;
    return (
      <div
        className = "ncs4-bp-topic__icon-area"
        { ...(
          renderSvg
            ? {dangerouslySetInnerHTML: {
              __html: this.svg
            }}
            : {}
          )
        }
      >
        {this.img && !renderSvg
          ? <img src = { this.img.url } />
          : null
        }
      </div>
    );
  }
}
