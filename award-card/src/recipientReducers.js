import { combineReducers } from '@wordpress/data';
import * as actionTypes from './recipientActionTypes';
import { getRecipientsCompare } from './sort';

// action.data includes id
const recipients = (state = [], action, useOrgs) => {
  let currentYear = state[0] ? state[0].year: null;
  let newState = ( () => {
    switch (action.type) {
      case actionTypes.Create:
        return [...state, action.data];

      case actionTypes.Delete:
        return state.filter( (x) => x.id !== action.id );

      case actionTypes.Edit:
        return [
          ...state.filter( (x) => x.id !== action.data.id ),
          action.data,
        ];

      case actionTypes.Sort:
        return state;

      default:
        //console.warn("recipients: Unrecognized action type '" + action.type + "'");
        return state;
    }
  } )();
  return newState.sort(getRecipientsCompare(currentYear, useOrgs));
}

/* Original

const recipients = (state = [], action, useOrgs) => {
  let currentYear = state[0] ? state[0].year: null;
  switch (action.type) {
    case actionTypes.Create:
      return sortedInsert(
        state,
        action.data,
        getRecipientsCompare(currentYear, useOrgs),
      );

    case actionTypes.Delete:
      return state
        .sort(getRecipientsCompare(currentYear, useOrgs))
        .filter( (x) => x.id !== action.id );

    case actionTypes.Edit:
      return sortedInsert(
        state.filter( (x) => x.id !== action.data.id ),
        action.data,
        getRecipientsCompare(currentYear, useOrgs),
      );

    case actionTypes.Sort:
      return state.sort(getRecipientsCompare(currentYear, useOrgs));

    default:
      //console.warn("recipients: Unrecognized action type '" + action.type + "'");
      return state;
  }
}
*/

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
      //console.warn("ids: Unrecognized action type '" + action.type + "'");
      return state;
  }
}

const useOrgs = (state = false, action) => {
  switch(action.type) {
    case actionTypes.SetUseOrgs:
      return action.useOrgs;
    default:
      //console.warn("useOrgs: Unrecognized action type '" + action.type + "'");
      return state;
  }
}

const organizations = (state = [], action) => {
  switch(action.type) {
    case actionTypes.AddOrganization:
      if (!state.includes(action.organization)) {
        return [...state, action.organization];
      } else {
        return state;
      }
    default:
      //console.warn("organizations: Unrecognized action type '" + action.type + "'");
      return state;
  }
}

// Higher-order reducers

export default combineReducersWithData({
  recipients: { reducer: recipients, stateReducer: (state) => state.useOrgs },
  ids,
  useOrgs,
  organizations,
});

// takes an object of {reducer: function(), stateReducer: function()} objects
// stateReducer() should take the full store's state and return what data the
// reducer function needs. This data will be passed to the reducer as the third
// parameter
function combineReducersWithData(reducersWithData) {
  return (state = {}, action) => {
    let newState = {};
    for (let field in reducersWithData) {
      if ( typeof reducersWithData[field] === "function" ) {
        newState[field] = reducersWithData[field](state[field], action);
      } else {
        let { reducer, stateReducer } = reducersWithData[field];
        stateReducer = stateReducer || ( x => null );
        newState[field] = reducer(state[field], action, stateReducer(state));
      }
    }
    return newState;
  }
}
