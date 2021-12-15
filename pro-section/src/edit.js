import React from 'react';
import { BPIndustrySectionEdit } from '../../js/bp-section.js';

export class SectionProEdit extends React.Component {

  render() {
    return (
      <BPIndustrySectionEdit {...this.props} industry="pro"/>
    );
  }
}
