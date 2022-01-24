import { combineReducers } from '@wordpress/data';
import * as actionTypes from './recipientActionTypes';

// action.data includes id
const recipients = (state = [], action) => {
  switch (action.type) {
    case actionTypes.Create:
      // Implement sorting functionality
      return [...state, action.data];

    case actionTypes.Delete:
      return state.filter( (x) => x.id !== action.id );

    case actionTypes.Edit:
      let out = [];
      let haveEdited = false;
      let data = action.data;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === data.id) {
          out[i] = data;
          haveEdited = true;
        } else {
          out[i] = state[i];
        }
      }
      if (!haveEdited) {
        console.warn("recipients: Invalid id in edit action '" + data.id + "'");
      }
      return out;

    default:
      console.warn("recipients: Unrecognized action type '" + action.type + "'");
      return state;
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case actionTypes.Create:
      let out = [];
      let j = 0;
      let haveAdded = false;
      let data = action.data;
      for (let i = 0; i < state.length; i++) {
        if (!haveAdded && state[i] > data.id) {
          out[j] = data.id;
          haveAdded = true;
          j++;
        }
        out[j] = state[i];
        j++;
      }
      if (!haveAdded) {
        out[out.length] = data.id;
      }
      return out;

    case actionTypes.Delete:
      return state.filter( (x) => x !== action.id );

    case actionTypes.Edit:
      // just check the id exists
      if (!state.includes(action.data.id)) {
        console.error(actionTypes.Edit + ": id '" + action.data.id + "' not found");
      }
      return state;

    default:
      console.warn("ids: Unrecognized action type '" + action.type + "'");
      return state;
  }
}

export default combineReducers({
  recipients,
  ids,
});
