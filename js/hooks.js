import React from 'react';

const toggler = state => !state;
export const useToggle(initialState = false) {
  return React.useReducer(toggler, initialState);
}
