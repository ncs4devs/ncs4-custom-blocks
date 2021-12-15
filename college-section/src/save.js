import React from 'react';
import { BPIndustrySectionSave } from '../../js/bp-section.js';

export class SectionCollegeSave extends React.Component {

  render() {
    return (
      <BPIndustrySectionSave {...this.props} industry="college"/>
    )
  }
}
