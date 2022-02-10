import { useState } from 'react';
import { SelectControl } from '@wordpress/components';

// unique props: label, dashicon (dashicon classname without `dashicons-`)
export function ButtonControl(props) {
  return (
    <button
      { ...props }
      className = {
        [
          "ncs4-component__button",
          props.className,
        ].join(" ")
      }
    >
      { props.dashicon && (
        <>
          <span className = { "dashicons dashicons-" + props.dashicon }/>
          { " " }
        </>
      )}{ props.label }
    </button>
  );
}

// unique props: options, selected, onSelect, reverse, getKey, getValue
// Functions as a single-select SelectControl which returns the selected index
// and whose options are [string, string, ...] instead of [{value: string, label: string}, ...]
//
export function ListControl(props) {
  let options = props.options;
  let getKey = props.getKey || ( (option, index, options) => index );
  let getValue = props.getValue || ( (option, index, options) => String(option) );
  if (props.reverse) {
    options = options.map( (option, i, arr) => {
      let index = arr.length - 1 - i;
      return {value: getKey(option, i, arr), label: getValue(arr[index])};
    });
  } else {
    options = options.map(
      (option, i, arr) => ({value: getKey(option, i, arr), label: getValue(option)})
    );
  }

  return (
    <SelectControl
      { ...props }
      multiple = { false }
      options = { options }
      onChange = { (o) => props.onSelect(o) }
    />
  )
}
