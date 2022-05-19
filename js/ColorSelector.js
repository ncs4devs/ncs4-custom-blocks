import { useEffect, useState } from 'react';

import { select } from '@wordpress/data';
import { ColorPalette } from '@wordpress/components';

function createColorClass(slug, prop) {
  if (!slug || !prop) {
    return null;
  }
  return "has-" + slug + "-" + prop;
}

// creates a style dictionary suitable for inline styling of custom colors
function createColorStyle(colorData, isBg) {
  let style = {};
  if (colorData.slug) {
    return style; // color is not custom, so no need for inline style
  }

  if (isBg) {
    style.backgroundColor = colorData.color;
    style["--palette-bg-color"] = colorData.color;
  } else {
    style.color = colorData.color;
    style["--palette-color"] = colorData.color;
  }

  return style;
}

function getColorBySlug(slug, colors) {
  let color = colors.filter( (obj) => obj.slug === slug)[0];
  return color ? color.color : null;
}

function getSlugByColor(color, colors) {
  let c = colors.filter( (obj) => obj.color === color)[0];
  return c ? c : null;
}

function matchColor(color, colors) {
  if (!color || typeof color !== "object") {
    console.warn("Malformed color");
    return {color: null, slug: null};
  }

  for (let c of colors) {
    if (
         (color.color && c.color === color.color)
      || (color.slug && c.slug === color.slug)
    ) {
      return {color: c.color, slug: c.slug};
    }
  }

  if (color.color && !color.slug) {
    return color; // this is a custom color
  }

  console.warn("Unknown color:", color);
  return {color: null, slug: null};
}

const ColorSelector = (props) => {
  let settings = select("core/block-editor").getSettings();

  return <>
    <p>{ props.label }</p>
    <ColorPalette
      colors = { settings.colors }
      disableCustomColors = { settings.disableCustomColors }
      value = { props.value }
      onChange = { (c) => {
        let color = getSlugByColor(c, settings.colors);
        props.onChange( {
          color: c,
          slug: color ? color.slug : null,
        } );
      } }
    />
  </>
}

// adds additional color data, e.g. classes, styles, etc
export const fromColorAttribute = (colorAttr, isBg) => ({
  data: colorAttr,
  className: isBg
    ? createColorClass(colorAttr.slug, "background-color")
    : createColorClass(colorAttr.slug, "color"),
  style: createColorStyle(colorAttr, isBg),
});

export function useColor(colorAttr, isBg, callback) {
  let data = {};
  let colors = select("core/block-editor").getSettings().colors;
  let [color, setColor] = useState({}); // rich color data

  useEffect( () => {
    // reconstruct color slug and code from retrieved value
    data = matchColor(colorAttr, colors);
    if (typeof callback === "function") {
      callback(data); // save to state
    }
    // Add extra data for classes, styles, etc
    setColor(fromColorAttribute(data, isBg));
  }, [colorAttr.color, colorAttr.slug] );

  return color;
}

export default ColorSelector;
