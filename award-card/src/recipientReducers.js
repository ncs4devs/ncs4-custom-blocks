import { combineReducers } from '@wordpress/data';
import * as actionTypes from './recipientActionTypes';
import {
  sortedInsert,
  compareYearThenNames,
  compareStrings,
} from './sort';
import * as actions from './recipientActions';


/***** Sorting variables *****/


const industrySegments = {
  pro: {
    title: "Professional Sports and Entertainment",
    useOrgs: true,
  },
  college: {
    title: "Intercollegiate Athletics",
    useOrgs: false,
  },
  hs: {
    title: "Interscholastic Athletics and After-School Activities",
    useOrgs: false,
  },
  marathon: {
    title: "Marathon and Endurance Events",
    useOrgs: false,
  },
  other: {
    title: "Other",
    useOrgs: true,
  },
};

const orgFields = [
  "industry",
  "organization",
];

/***** Helper functions *****/


// no particular order
export function traverseRecipients(tree, visit) {
  if (Array.isArray(tree)) {
    tree.map(visit);
  } else {
    for (let field in tree) {
      if (field === "order" || field === "length") {
        continue;
      }
      traverseRecipients(tree[field], visit);
    }
  }
}

function addToRecipientTree(root, recipient, useOrgs, currentYear) {
  let tree = {
    current: root.current || [],
    previous: root.previous || ( useOrgs ? {} : [] ),
  };
  const compare = compareYearThenNames;

  if (recipient.year === currentYear) {
    tree.current = sortedInsert(tree.current, recipient, compare);
  } else {
    if (useOrgs) {
      tree.previous = buildSubtree(
        tree.previous,
        orgFields,
        recipient,
        compare,
        useOrgs = recipient.organization && industrySegments[recipient.organization]
          ? industrySegments[recipient.organization].useOrgs
          : useOrgs
      );
      tree.previous.length = tree.previous.length
        ? tree.previous.length + 1
        : 1;
    } else {
      tree.previous = sortedInsert(tree.previous, recipient, compare);
    }
  }

  return tree;
}

function buildSubtree(root, fields, recipient, compare, useOrgs = true) {
  if (fields.length > 0) {
    let field = recipient[fields[0]];

    if (fields[0] === "organization" && !useOrgs) {
      return buildSubtree(
        root,
        fields.slice(1),
        recipient,
        compare,
        useOrgs,
      );
    }

    if (fields.length && !root[field]) {
      // there is a subtree and it needs to be added to order
      let order = root.order || [];
      order = sortedInsert(order, field, compareStrings);
      root.order = order;
      root[field] = {};
    } else {
      root[field] = root[field] || [];
    }

    if (
           fields[0] === "industry"
        && industrySegments[field]
      ) {
      root[field] = buildSubtree(
        root[field],
        fields.slice(1),
        recipient,
        compare,
        industrySegments[field].useOrgs,
      );
    } else {
      root[field] = buildSubtree(
        root[field],
        fields.slice(1),
        recipient,
        compare,
      );
    }

    return root;
  } else {
    return sortedInsert(root, recipient, compare);
  }
}

function getRecipientsPath(tree, recipient, currentYear) {
  const properties = [
    "industry",
    "organization",
  ];

  let path = "";
  if (recipient.year === currentYear) {
    path += "current/";
  } else {
    path += "previous/";
    let field = "previous";
    let propertiesArr = [...properties];

    while (!Array.isArray(tree[field])) {
      tree = tree[field];
      field = recipient[propertiesArr[0]];
      propertiesArr = propertiesArr.slice(1);
      path += field + "/";
    }
  }

  return path.replace(/(^\/)|(\/$)/g, "");
}

function assignRecipientsSlice(tree, slice, path) {
  let newSlice = slice;

  let fields = path.split("/");
  for (let i = fields.length - 1; i >= 0; i--) {
    newSlice = {
      ...getRecipientsSlice(
        tree,
        fields.slice(0, i).join("/"),
      ),
      [ fields[i] ]: newSlice,
    };
  }

  return {
    ...tree,
    ...newSlice,
  };
}

function getRecipientsSlice(tree, path) {
  let fields = path.split("/");
  for (let i = 0; i < fields.length; i++) {
    tree = tree[fields[i]];
  }
  return tree;
}


/***** Reducers *****/


// action.data includes id
const recipients = (state = {}, action, {
    useOrgs,
    currentYear,
  } ) => {

  switch (action.type) {
    case actionTypes.Create: {
      action.asyncDispatch(actions.SetCurrentYearIf(action.data.year));
      return addToRecipientTree(
        state,
        action.data,
        useOrgs,
        currentYear,
      );

      break;
    }

    case actionTypes.Delete: {
      let path = getRecipientsPath(state, action.data, currentYear);
      let newSlice =
        getRecipientsSlice(state, path)
        .filter( (x) => x.id !== action.data.id );

      if (action.data.year === currentYear && state.current.length < 2) {
        let year = null;
        traverseRecipients(state.previous, (r) => {
          if (!year || r.year > year) {
            year = r.year;
          }
        });

        action.asyncDispatch(actions.SetCurrentYear(year));
      }

      return assignRecipientsSlice(
        state,
        newSlice,
        path,
      )

      break;
    }

    case actionTypes.Edit: {
      action.asyncDispatch(actions.deleteRecipient(action.oldData));
      action.asyncDispatch(actions.createRecipient(action.data));

      return state;

      break;
    }

    case actionTypes.SetRecipients: {
      action.asyncDispatch(actions.RecalculateCurrentYear());
      return Object.assign({}, action.data);

      break;
    }

    case actionTypes.Sort: {
      // re-sort entire tree
      let newTree = {};
      traverseRecipients(state, (recipient) => {
        newTree = addToRecipientTree(
          newTree,
          recipient,
          useOrgs,
          currentYear,
        );
      })

      return newTree;

      break;
    }

    default: {
      return state;
    }
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case actionTypes.Create: {
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

      break;
    }

    case actionTypes.Delete: {
      return state.filter( (x) => x !== action.id );

      break;
    }

    case actionTypes.Edit: {
      // just check the id exists
      if (!state.includes(action.data.id)) {
        console.error(actionTypes.Edit + ": id '" + action.data.id + "' not found");
      }
      return state;

      break;
    }

    default: {
      return state;
    }
  }
}

const useOrgs = (state = false, action) => {
  switch(action.type) {
    case actionTypes.SetUseOrgs: {
      return action.useOrgs;

      break;
    }

    default: {
      return state;
    }
  }
}

const organizations = (state = [], action) => {
  switch(action.type) {
    case actionTypes.AddOrganization: {
      if (!state.includes(action.organization)) {
        return [...state, action.organization];
      } else {
        return state;
      }

      break;
    }

    default: {
      return state;
    }
  }
}

const currentYear = (state = null, action, { recipients }) => {
  switch(action.type) {
    case actionTypes.SetCurrentYearIf: {
      if (!state || state < action.year) {
        action.asyncDispatch(actions.sortRecipients());
        return action.year;
      } else {
        return state;
      }

      break;
    }

    case actionTypes.SetCurrentYear: {
      action.asyncDispatch(actions.sortRecipients());

      return action.year;

      break;
    }

    case actionTypes.RecalculateCurrentYear: {
      let year = null;
      traverseRecipients(recipients, (r) => {
        if (!year || r.year > year) {
          year = r.year;
        }
      });

      action.asyncDispatch(actions.sortRecipients());
      return year;
    }

    default: {
      return state;
    }
  }
}

// Higher-order reducers

export default combineReducersWithData({
  recipients: {
    reducer: recipients,
    stateReducer: (state) => ({
      useOrgs: state.useOrgs,
      currentYear: state.currentYear,
    }),
  },
  ids,
  useOrgs,
  organizations,
  currentYear: {
    reducer: currentYear,
    stateReducer: (state) => ({
      recipients: state.recipients,
    }),
  },
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
