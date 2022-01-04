import React from 'react';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

// Be careful that you only use trusted SVGs as they are not secure!
export function Svg(props) {
  return (
    <div
      dangerouslySetInnerHTML = {{
        __html: props.svg
      }}
    />
  )
}

// Image object format:
/*
img: {
  mine = "image/svg+xml",
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

  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect = { props.onChange }
        value = { props.img ? props.img.id : null }
        allowedTypes = { ['image'] }
        render = { ( {open} ) => (
          <Button
            className = {
              props.img
                ? 'editor-post-featured-image__preview'
                : 'editor-post-featured-image__toggle'
            }
            onClick = { open }
          >
            { props.img
              ? (props.img.mime === "image/svg+xml" && props.img.data
                  ? <Svg
                      svg = { props.img.data }
                      style = { imageStyle(props) }
                    />
                  : <img
                      src = { props.img.url }
                      style = { imageStyle(props) }
                    />
                )
              : "Choose an image"
            }
          </Button>
        )}
      />
    </MediaUploadCheck>
  );
}

// Front-end image display
export function ImageSave(props) {
  let isSvg = props.img && props.img.mime === "image/svg+xml" && props.img.data;

  return (
    <div {...props}
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
            src = { props.img.url }
            style = { imageStyle(props) }
          />
        : null
      }
    </div>
  );
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
