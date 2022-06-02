import { InnerBlocks } from '@wordpress/block-editor';
import { fromColorAttribute } from '../../js/ColorSelector.js';

export default function Save(props) {
  let attrs = props.attributes;
  let bgColor = fromColorAttribute(attrs.bgColor, true);
  let textColor = fromColorAttribute(attrs.textColor, false);

  return (
    <div { ...props.blockProps }
      className = {
        [
          "ncs4-fluid-layout",
          bgColor.className,
          textColor.className,
          "ncs4-fluid-layout__" + attrs.optionLayout,
          (attrs.useMaxWidth) ? "has-max-width" : null,
          props.blockProps.className,
        ].join(' ')
      }
      style = {{
        ...bgColor.style,
        ...textColor.style,
        ['--vertical-align']: attrs.optionVerticalAlign || null,
        ['--min-width']: attrs.minWidth.asString,
        ['--max-width']: (attrs.maxWidth.useMaxWidth)
          ? attrs.maxWidth.asString
          : null,
        ['--columns']: attrs.numColumns + ';',
        ['--column-size']: attrs.optionColSize,

        textAlign: (attrs.alignment && attrs.alignment != "none")
          ? attrs.alignment
          : null,
        padding: attrs.padding.join("rem ") + "rem",
        margin: attrs.margin.join("rem ") + "rem",
        gap: attrs.rowGap + "rem " + attrs.columnGap + "rem",
        justifyContent: attrs.optionJustify,
      }}
    >
      { props.backend
        ? <InnerBlocks allowedBlocks = { props.allowed_inner_blocks }/>
        : <InnerBlocks.Content/>
      }
    </div>
  );
}
