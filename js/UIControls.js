import { useState } from 'react';
import { SelectControl } from '@wordpress/components';
import styled from 'styled-components';

// unique props: label, dashicon (dashicon classname without `dashicons-`)
let Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0.8em 0;

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    opacity: 40%;

    &:hover {
      cursor: auto;
    }
  }
`;

export function ButtonControl(props) {
  return (
    <Button
      { ...props }
      className = {
        [
          "ncs4-component__button",
          props.disabled ? "disabled" : null,
          props.className,
        ].join(" ")
      }
      style = {{
        backgroundColor: "transparent",
        border: "none",
        margin: "0.8em 0",
      }}
      onClick = { props.disabled ? () => null : props.onClick }
      title = { props.disabled ? null : props.title }
    >
      { props.dashicon && (
        <>
          <span
            className = { "dashicons dashicons-" + props.dashicon }
            style = {{
              fontSize: props.iconSize ? props.iconSize : null,
              width: "auto",
              height: "auto",
              transform: props.iconTranslation &&
                "translate(" + props.iconTranslation + ")",
            }}
          />
          { " " }
        </>
      )}{ props.label }
    </Button>
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
  let selected;
  if (props.reverse) {
    options = options.map( (_, i, arr) => {
      let index = arr.length - 1 - i;
      let value = getKey(arr[index], i, arr);
      let label = getValue(arr[index], i, arr);

      if (value === props.selected) {
        selected = value;
      }
      return {value, label};
    });
  } else {
    options = options.map( (option, i, arr) => {
      let value = getKey(option, i, arr);
      let label = getValue(option, i, arr);

      if (value === props.selected) {
        selected = value;
      }
      return {value, label};
    })
  }

  return (
    <SelectControl
      { ...props }
      multiple = { false }
      options = { options }
      onChange = { (o) => props.onSelect(o) }
      value = { selected }
    />
  )
}
