import React from 'react';
import { BPIndustrySectionEdit } from '../../js/bp-section.js';

export class SectionMarathonEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BPIndustrySectionEdit {...this.props} industry="marathon"/>
    );
  }
}
