import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { createColorClass, createColorStyle } from '../../js/ColorSelector.js';

export class FluidLayoutItemSave extends React.Component {

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
            "ncs4-fluid-layout-item",
            createColorClass(attrs.bgColor.slug, "background-color"),
            createColorClass(attrs.textColor.slug, "color"),
            attrs.useMaxWidth ? "has-max-width" : null,
          ].join(' ')
        }
        style = { colorStyle }
      >
        { backend
          ? <InnerBlocks/>
          : <InnerBlocks.Content/>
        }
      </div>
    );
  }
}
