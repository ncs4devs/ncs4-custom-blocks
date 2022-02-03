import { combineReducers } from '@wordpress/data';
import * as actionTypes from './recipientActionTypes';

// action.data includes id
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
      return state.filter( (x) => x.id !== action.id );

    case actionTypes.Edit:
      return sortedInsert(
        state.filter( (x) => x.id !== action.data.id ),
        action.data,
        getRecipientsCompare(currentYear, useOrgs),
      );

    default:
      //console.warn("recipients: Unrecognized action type '" + action.type + "'");
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
      return [...state, action.organization];
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


// *** Sorting Functions *** //


// inserts an element into a sorted array given a comparison function
// Returns a new, sorted array.
// compare(x, y) should return < 0 if x is "greater", > 0 if y is "greater",
// 0 if equal
function sortedInsert(arr, x, compare) {
  let out = [];
  let i = 0;
  let j = 0;
  let hasAdded = false;
  while (j < arr.length) {
    if (hasAdded || compare(arr[j], x) < 0) {
      out[i] = arr[j];
      j++;
    } else {
      hasAdded = true;
      out[i] = x;
    }
    i++;
  }
  if (!hasAdded) { // reached end of array
    out[out.length] = x;
  }
  return out;
}

function getRecipientsCompare(currentYear, useOrgs) {
  return combineCompares(
    getCurrentRecipientsCompare(currentYear, useOrgs),
    getPreviousRecipientsCompare(currentYear, useOrgs),
  );
}

function getCurrentRecipientsCompare(currentYear, useOrgs) {
  return (x, y) => {
    if (useOrgs && ( x.year !== currentYear || y.year !== currentYear )) {
      return 0; // pass sorting on to getPreviousRecipientsCompare()
    }
    // sorting when not using orgs & for "current recipients" always
    return combineCompares(
      compareYears,
      compareNames,
    )(x, y);
  }
}

function getPreviousRecipientsCompare(currentYear, useOrgs) {
  if (!useOrgs) {
    return ( () => 0 ); // fall through
  }
  return combineCompares(
    (x, y) => {
      if (x.year === currentYear) {
        return -1;
      } else if (y.year === currentYear) {
        return 1;
      }
      return 0;
    },
    compareOrganizations,
    compareYears,
    compareNames,
  );
}

// Applies each compare in order until a non-zero result is reached or all return 0
function combineCompares(...compares) {
  return (x, y) => {
    let result;
    for (let i = 0; i < compares.length; i++) {
      result = compares[i](x, y);
      if (result !== 0) {
        return result;
      }
    }
    return result;
  }
}

function compareOrganizations(x, y) {
  if (x.organization && !y.organization) {
    return -1;
  } else if (!x.organization && y.organization) {
    return 1;
  } else if (!x.organization && !y.organization) {
    return 0;
  } else {
    return 2 * Number(
      x.organization.toUpperCase() > y.organization.toUpperCase()
    ) - 1;
  }
}

function compareYears(x, y) {
  if (x.year === y.year) {
    return 0;
  } else {
    return y.year - x.year;
  }
}

function compareNames(x, y) {
  if (
        !x.name || !y.name
      || x.name === "" || y.name === ""
      || x.name === y.name
    ) {
    return 0;
  }
  let xName = transposeName(x.name);
  let yName = transposeName(y.name);
  return 2 * Number(xName.toUpperCase() > yName.toUpperCase()) - 1;
}

function transposeName(name) {
  let lastIndex = name.search(/[\S]+$/);
  let last = name.slice(lastIndex);
  let rest = "";
  if (lastIndex > 0) {
    rest = name.slice(0, lastIndex - 1);
  }
  return last + ", " + rest;
}
