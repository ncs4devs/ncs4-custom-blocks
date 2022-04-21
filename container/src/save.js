import { InnerBlocks } from '@wordpress/block-editor';
import { fromColorAttribute } from '../../js/ColorSelector';

export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;
  let bgColor = fromColorAttribute(attributes.bgColor, true);
  let textColor = fromColorAttribute(attributes.color);

  return (
    <div { ...blockProps }
      data-backend = { props.backend ? "true" : null }
      style = {{
        ...props.style,
        ...bgColor.style,
        ...textColor.style,
        margin: attributes.margin
          .map( (v) => String(v) + "rem" ).join(" "),
        padding: attributes.padding
          .map( (v) => String(v) + "rem" ).join(" "),
      }}
      className = {
        [
          "ncs4-container",
          bgColor.className,
          textColor.className,
          blockProps.className,
        ].join(' ')
      }
    >
      { props.backend
        ? <InnerBlocks/>
        : <InnerBlocks.Content/>
      }
    </div>
  )
}
