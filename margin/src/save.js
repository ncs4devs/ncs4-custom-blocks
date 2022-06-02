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
          "ncs4-site-margin",
          bgColor.className,
          textColor.className,
          attrs.noPadding ? "no-padding" : null,
          "ncs4-site-margin__size-" + attrs.optionSize,
          props.blockProps.className,
        ].join(' ')
      }
      style = {{
        ...bgColor.style,
        ...textColor.style,
        textAlign: (attrs.alignment != "none") ? attrs.alignment : null,
        paddingTop: attrs.verticalPadding[0] + "rem",
        paddingBottom: attrs.verticalPadding[1] + "rem",
        marginTop: attrs.verticalMargin[0] + "rem",
        marginBottom: attrs.verticalMargin[1] + "rem",
      }}
    >
      { props.backend
        ? <InnerBlocks/>
        : <InnerBlocks.Content/>
      }
    </div>
  );
}
