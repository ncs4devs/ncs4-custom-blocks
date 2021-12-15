import React from 'react';
import { BPIndustrySectionSave } from '../../js/bp-section.js';

export class SectionGenericSave extends React.Component {

  render() {
    return (
      <BPIndustrySectionSave {...this.props} industry="generic"/>
    )
  }
}
