import React from 'react';
import { BPIndustrySectionEdit } from '../../js/bp-section.js';

export class SectionGenericEdit extends React.Component {

  render() {
    return (
      <BPIndustrySectionEdit {...this.props} industry="generic"/>
    );
  }
}
