import React, { useState } from 'react';

const toggler = state => !state;
export function useToggle(initialState = false) {
  return React.useReducer(toggler, initialState);
}


const storeSetter = (state, setState) => (attr) => (value) => setState(
  Object.assign( {}, state, { [attr]: value } )
)
export function useStore(initialState = {}) {
  let [state, setState] = useState(initialState);
  return [
    state,
    storeSetter(state, setState),
  ];
}

// functions as useStore/useState but updates attributes at the same time
// Takes an optional "reducer" function for any attribute.
// The reducer takes the current attributes and a value and should return a new
// value to be written to the attribute, the state will always be written directly.
export function withAttributes(
    attributes,
    setAttributes,
    initialState = {},
    reducers = {}
  ) {
  let [state, setState] = useStore(initialState);
  let setAttribute = (attr) => (value) => {
    setState(attr)(value);
    storeSetter({}, setAttributes)(attr)(
      typeof reducers[attr] === "function" && reducers[attr].length <= 2
        ? reducers[attr](value, attributes)
        : value
    )
  };

  return [
    state,
    setAttribute,
    (newState) => {
      for (let attr in newState) {
        setAttribute(attr)(newState[attr]);
      }
    },
  ];
}
