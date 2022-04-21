import React from 'react';

import { select } from '@wordpress/data';
import { ColorPalette } from '@wordpress/components';

// Adds className and style properties to a color loaded from DB
export function fromColorAttribute(attr, bg = false) {
  let customColor = attr.slug ? null : attr.color;

  if (bg) {
    return Object.assign({}, attr, {
      className: createColorClass(attr.slug, "background-color"),
      style: {
        backgroundColor: customColor,
        ["--palette-bg-color"]: customColor,
      },
    });
  }

  return Object.assign({}, attr, {
    className: createColorClass(attr.slug, "color"),
    style: {
      color: customColor,
      ["--palette-color"]: customColor,
    },
  });
}

export function createColorClass(slug, prop) {
  if (!slug || !prop) {
    return null;
  }
  return "has-" + slug + "-" + prop;
}

// creates a style dictionary suitable for inline styling of custom colors
/* input format:
  [
    { color: attrs.bgColor,
      props: [ "background-color", "--palette-bg-color"],
    },
    { color: attrs.textColor,
      props: [ "color", "--palette-color" ],
    },
  ]
*/
export function createColorStyle(attributes) {
  let style = {};
  for (let attr of attributes) {
    if (!attr.color) { continue }
    let color = attr.color.slug ? null : attr.color.color;
    for (let prop of attr.props) {
      style[prop] = color;
    }
  }
  return style;
}

export class ColorSelector extends React.Component {
  render() {
    let label = this.props.label;
    let allowGradients = this.props.allowGradients; // TODO
    let value = this.props.value;
    let onChange  = this.props.onChange;

    let settings = select("core/block-editor").getSettings();
    return (
      <>
        <p>{ label }</p>
        <ColorPalette
          colors = { settings.colors }
          disableCustomColors = { settings.disableCustomColors }
          value = { value }
          onChange = { (c) => {
            let color = settings.colors.filter( (obj) => obj.color === c)[0];
            onChange( {
              color: c,
              slug: color ? color.slug : null,
            } );
          }}
        />
      </>
    );
  }
}

export function verifyColor(color) {
  let colors = select("core/block-editor").getSettings().colors;
  return getColorBySlug(color.slug, colors);
}

function getColorBySlug(slug, colors) {
  let color = colors.filter( (obj) => obj.slug === slug)[0];
  return color ? color.color : null;
}
