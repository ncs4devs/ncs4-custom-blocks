import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { createColorClass, createColorStyle } from '../../js/ColorSelector.js';

export class MarginSave extends React.Component {

  render() {
    let attrs = this.props.attributes;
    let backend = this.props.backend || false;
    let colorStyle = createColorStyle( [
      { color: attrs.bgColor,
        props: [ "background-color", "--palette-bg-color" ],
      },
      { color: attrs.textColor,
        props: [ "color", "--palette-color" ],
      },
    ] );

    return (
      <div { ...this.props.blockProps }
        className = {
          [
            "ncs4-site-margin",
            createColorClass(attrs.bgColor.slug, "background-color"),
            createColorClass(attrs.textColor.slug, "color"),
            attrs.noPadding ? "no-padding" : null,
            "ncs4-site-margin__size-" + attrs.optionSize,
          ].join(' ')
        }
        style = {{
          ...colorStyle,
          textAlign: (attrs.alignment != "none") ? attrs.alignment : null,
          paddingTop: attrs.verticalPadding[0] + "rem",
          paddingBottom: attrs.verticalPadding[1] + "rem",
          marginTop: attrs.verticalMargin[0] + "rem",
          marginBottom: attrs.verticalMargin[1] + "rem",
        }}
      >
        { backend
          ? <InnerBlocks/>
          : <InnerBlocks.Content/>
        }
      </div>
    );
  }
}
