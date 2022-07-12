import React from 'react';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export const imageAttribute = (selector) => ({
  type: "image",
  source: "query",
  selector,
  default: [],
  query: {
    url: {
      type: "string",
      source: "attribute",
      attribute: "src",
    },
    alt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      default: "",
    },
    mime: {
      type: "string",
      source: "attribute",
      attribute: "type",
    },
    width: {
      type: "int",
      source: "attribute",
      attribute: "width",
      default: null,
    },
    height: {
      type: "int",
      source: "attribute",
      attribute: "height",
      default: null,
    },
  }
});

// Be careful that you only use trusted SVGs as they are not secure!
export function Svg(props) {
  return <>
    { props.useInlineSvg
      ? <div
          dangerouslySetInnerHTML = {{
            __html: props.img.data
          }}
        />
      : <embed
          type = { props.img.mime }
          src = { props.img.url }
        />
    }
  </>
}

// Image object format:
/*
img: {
  mime = "image/svg+xml",
  url = "..."
  data = {svg data}
  ...
}
Basically, it's WP's image object + svg data (if applicable)
stored in a "data" attribute
*/

const imageStyle = (props) => ({
  marginLeft: (props.align == "left") ? 0 : "auto",
  marginRight: (props.align == "right") ? 0 : "auto",
})

// Edit-side image display
export function ImageEdit(props) {
  props.useInlineSvg = props.useInlineSvg == null ? true : props.useInlineSvg;

  const onSelect = (media) => {
    let img = {
      url: media.url,
      mime: media.mime,
      inline: media.mime === "image/svg+xml" && props.useInlineSvg
        ? true
        : undefined,
      width: media.width,
      height: media.height,
    }
    props.onChange(img);
  }

  const noImage = !props.img
    || (typeof props.img == "object" && Object.keys(props.img).length == 0);

  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect = { onSelect }
        value = { props.img ? props.img.id : null }
        allowedTypes = { ['image'] }
        render = { ( {open} ) => (
          <Button
            className = {
              noImage
                ? 'editor-post-featured-image__toggle'
                : 'editor-post-featured-image__preview'
            }
            style = {{
              marginBottom: "24px",
            }}
            onClick = { open }
          >
            { noImage
              ? "Choose an image"
              : (props.img.mime === "image/svg+xml" && props.img.data
                  ? <Svg
                      img = { props.img }
                      useInlineSvg = { props.useInlineSvg }
                      style = { imageStyle(props) }
                    />
                  : <img
                      src = { props.img.url }
                      style = { imageStyle(props) }
                    />
                )
            }
          </Button>
        )}
      />
    </MediaUploadCheck>
  );
}

// Front-end image display
export function ImageSave(props) {
  let isSvg = props.img && props.img.mime === "image/svg+xml";

  return <>
    { isSvg && !props.img.inline
      ? <embed
          className = "component-image"
          type = { props.img.mime }
          src = { props.img.url }
        />
      : <div {...props}
        className = {
          [
            props.className,
            "component-image",
          ].join(' ')
        }
        type = { props.img.mime }
        src = { props.img.url }
        { ...(
          isSvg
            ? { dangerouslySetInnerHTML: {
              __html: props.img.data,
              style: imageStyle(props),
            }}
            : {}
          )
        }
      >
        { props.img && !isSvg
          ? <img
              className = "component-image"
              type = { props.img.mime }
              src = { props.img.url }
              style = { imageStyle(props) }
              width = { props.img.width }
              height = { props.img.height }
            />
          : null
        }
      </div>
    }
  </>;
}

// Generic image change handler
export function onImageChange(img, callback, embedSvg = true) {
  if (embedSvg && img.mime === "image/svg+xml") {
    fetch(img.url)
      .then(res => res.text())
      .then(text => {
        img.data = text;
        callback(img);
      });
  } else {
    callback(img);
  }
}
