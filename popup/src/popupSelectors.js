export const getIds = ( state ) => {
  return state.ids || [];
}

// Returns -1 if available, getNextId if unavailable
export const requestId = ( state, id) => {
  id = Number(id);
  let n = state.ids.length;
  if ( id < 0 ) {
    return getNextId(state); // unavailable
  }
  if ( n === 0 ) {
    return -1;
  }
  for ( let i = 0; i < n; i++ ) {
    if (state.ids[i] === id) {
      return getNextId(state); // unavailable
    }
  }
  return -1;
};

export const getNextId = ( state ) => {
  for (let i = 0; i < state.ids.length; i++) {
    const id = state.ids[i];
    if (i === 0 && id !== 0) {
      return id;
    }
    if (
         ( i + 1 < state.ids.length && state.ids[i + 1] - 1 > id ) // gap
      || ( i + 1 >= state.ids.length ) // end of array
    ) {
      return id + 1;
    }
  }
  return 0;
};
