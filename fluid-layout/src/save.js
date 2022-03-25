import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { createColorClass, createColorStyle } from '../../js/ColorSelector.js';

export class FluidLayoutSave extends React.Component {

  render() {
    let attrs = this.props.attributes;
    let customBgColor = attrs.bgColor.slug ? null : attrs.bgColor.color;
    let customColor = attrs.textColor.slug ? null : attrs.textColor.color;
    let backend = this.props.backend || false;
    let colorStyle = createColorStyle( [
      { color: attrs.bgColor,
        props: [ "background-color", "--palette-bg-color" ],
      },
      { color: attrs.textColor,
        props: [ "color", "--palette-color" ],
      },
    ] );
    let style = {
      ...colorStyle,
      ['--vertical-align']: attrs.optionVerticalAlign || null,
      ['--min-width']: attrs.minWidth.asString,
      ['--max-width']: (attrs.maxWidth.useMaxWidth)
        ? attrs.maxWidth.asString
        : null,
      ['--columns']: attrs.numColumns + ';',
      ['--column-size']: attrs.optionColSize,

      backgroundColor: customBgColor,
      ["--palette-bg-color"]: customBgColor,
      color: customColor,
      ["--palette-color"]: customColor,
      textAlign: (attrs.alignment && attrs.alignment != "none")
        ? attrs.alignment
        : null,
      padding: attrs.padding.join("rem ") + "rem",
      margin: attrs.margin.join("rem ") + "rem",
      gap: attrs.rowGap + "rem " + attrs.columnGap + "rem",
      justifyContent: attrs.optionJustify,
    }

    return (
      <div { ...this.props.blockProps }
        className = {
          [
            "ncs4-fluid-layout",
            createColorClass(attrs.bgColor.slug, "background-color"),
            createColorClass(attrs.textColor.slug, "color"),
            "ncs4-fluid-layout__" + attrs.optionLayout,
            (attrs.useMaxWidth) ? "has-max-width" : null,
            this.props.blockProps.className,
          ].join(' ')
        }
        style = { style }
      >
        { backend
          ? <InnerBlocks allowedBlocks = { this.props.allowed_inner_blocks }/>
          : <InnerBlocks.Content/>
        }
      </div>
    );
  }
}
