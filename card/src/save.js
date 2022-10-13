import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { fromColorAttribute } from '../../js/ColorSelector';
import { ImageSave } from '../../js/ImageControl';

export default function Save(props) {
  let blockProps = props.blockProps;
  let attributes = props.attributes;
  let bgColor = fromColorAttribute(attributes.bannerBg, true);
  let textColor = fromColorAttribute(attributes.bannerColor, false);

  let imgResolution = attributes.img
    ? attributes.img.height / attributes.img.width
    : 9;
  let imgHeight = imgResolution * attributes.imgSize;

  return (
    <div { ...blockProps }
      { ...{
        "data-backend": props.backend ? "true" : null,
        "data-margin": JSON.stringify(attributes.margin),
      } }
      style = {{
        ...props.style,
        margin: attributes.margin
          .map( (v) => String(v) + "rem" ).join(" "),
      }}
      className = {
        [
          "ncs4-card",
          blockProps.className,
        ].join(' ')
      }
    >
      <div
        { ...{
          "data-banner-background": JSON.stringify(attributes.bannerBg),
          "data-banner-color": JSON.stringify(attributes.bannerColor),
          "data-banner-tag": attributes.bannerTag,
          "data-use-image": attributes.useImg,
          "data-image": JSON.stringify(attributes.img),
          "data-icon-width": attributes.imgSize,
        } }
        className = {
          [
            "ncs4-card__banner",
            bgColor.className,
            textColor.className,
          ].join(' ')
        }
        style = {{
          ["--icon-width"]: attributes.useImg ? attributes.imgSize + "px" : null,
          ["--icon-height"]: attributes.useImg ? imgHeight + "px" : null,
          ...bgColor.style,
          ...textColor.style,
        }}
      >
        { attributes.useImg && (
          <ImageSave
            className = "ncs4-card__icon"
            img = { attributes.img }
          />
        )}
        { props.backend
          ? <RichText
              className = "ncs4-card__banner-text"
              tagName = { attributes.bannerTag }
              value = { attributes.bannerText }
              onChange = { props.setAttribute("bannerText") }
              placeholder = "Banner heading"
            />
          : <RichText.Content
              tagName = { attributes.bannerTag }
              className = "ncs4-card__banner-text"
              value = { attributes.bannerText }
            />
        }
      </div>
      <div
        className = "ncs4-card__content"
      >
        { props.backend
          ? <InnerBlocks/>
          : <InnerBlocks.Content/>
        }
      </div>
    </div>
  )
}
