import React from 'react';
import { BPSection } from '../../js/bp-section.js';
import { InnerBlocks } from '@wordpress/block-editor';

export class SectionMixedSave extends BPSection {
  constructor(props) {
    super(props);
  }

  // Must be an arrow function to override parent method
  createClassName = (
      classes,
      isPro = false,
      isCollege = false,
      isHs = false,
      isMarathon = false,
  ) => [
      "ncs4-section",
      (isPro) ? "ncs4-bp-content__pro" : null,
      (isCollege) ? "ncs4-bp-content__college" : null,
      (isHs) ? "ncs4-bp-content__hs" : null,
      (isMarathon) ? "ncs4-bp-content__marathon" : null,
    ].join(' ') + ' ' + classes;

  render() {
    let blockProps = this.props.blockProps;

    return (
      <div {...blockProps}
        className = {this.createClassName(
          blockProps.className,
          this.attributes.isProChecked,
          this.attributes.isCollegeChecked,
          this.attributes.isHsChecked,
          this.attributes.isMarathonChecked,
        ) }
      >
        <div className = "ncs4-custom-blocks-mixed-section-beam-area">
          { this.attributes.showTitle && (
            <h6
              className = {
                  "ncs4-custom-blocks-mixed-section-title-area"
                + " ncs4-custom-blocks-section-title-area"
              }
            >
            { this.attributes.title
              ? <span class="section-title">{ this.attributes.title }</span>
              : <span class="section-title_inherited">{ this.attributes.inheritedTitle }</span>
            }
            </h6>
          )}
          <div className = "ncs4-custom-blocks-mixed-section-beam-area__inner">
            { this.attributes.isProChecked && (
              <h6 className = "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__pro ncs4-bp-content ncs4-bp-content__pro"/>
            )}
            { this.attributes.isCollegeChecked && (
              <h6 className = "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__college ncs4-bp-content ncs4-bp-content__college"/>
            )}
            { this.attributes.isHsChecked && (
              <h6 className = "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__hs ncs4-bp-content ncs4-bp-content__hs"/>
            )}
            { this.attributes.isMarathonChecked && (
              <h6 className = "ncs4-custom-blocks-mixed-section-beam ncs4-custom-blocks-mixed-section-beam__marathon ncs4-bp-content ncs4-bp-content__marathon"/>
            )}
          </div>
        </div> {/* Close Beam area */}
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
