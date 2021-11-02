import React from 'react';
import { BPIndustrySectionSave } from '../../js/bp-section.js';

export class SectionGenericSave extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BPIndustrySectionSave {...this.props} industry="generic"/>
    )
  }
}
