import React, { useState } from 'react';

const toggler = state => !state;
export function useToggle(initialState = false) {
  return React.useReducer(toggler, initialState);
}


// shallow merges objects into a state object
// React's setState(Object) does NOT work for this, despite what the docs say.
const setStore = (setState) => (value) => {
  setState(
    (state, _props) => Object.assign({}, state, value)
  );
}
export function useStore(initialState = {}) {
  let [state, setState] = useState(initialState);
  return [
    state,
    setStore(setState),
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
    setState({ [attr]: value });
    setAttributes( {
      [attr]:
        typeof reducers[attr] === "function" && reducers[attr].length <= 2
          ? reducers[attr](value, attributes)
          : value
      }
    );
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
