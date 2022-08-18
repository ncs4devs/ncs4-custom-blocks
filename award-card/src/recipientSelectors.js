
// if ids is a valid array: return all recipients with matching ids,
// else return all recipients
export const getRecipients = ( state, ids ) => {
  if (Array.isArray(ids)) {
    return state.recipients.filter( (r) => ids.includes( r.id ) );
  } else {
    return state.recipients;
  }
}

// Returns [ {year: "yyyy", recipients: [Array Recipient] } ]
// Assumes useOrgs is false and the "previous" section is sorted by year!
export const getRecipientsByYear = ( state ) => {
  return [...state.recipients.current, ...state.recipients.previous]
    .reduce(
      (arr, recipient) => {
        //console.log(arr);
        let m = arr.length;
        let out = arr;
        // create new year array
        if (m === 0 || arr[m - 1][0].year != recipient.year) {
          out.push([recipient]);
        } else {
          out[m-1].push(recipient);
        }
        return out;
      }
      , []
    );
}

export const getState = (state) => state;
export const getUsedIds = (state) => state.ids;
export const getUseOrgs = (state) => state.useOrgs;
export const getCurrentYear = (state) => state.currentYear;
export const getOrganizations = (state) => state.organizations;
export const hasId = (state, id) => state.ids.includes(id);
export const createRecipientData = (state, data) => ({
  ...data,
  id: !isNaN(data.id) && !hasId(data.id) ? data.id : getNextId(state),
});

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
