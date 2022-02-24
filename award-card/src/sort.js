// inserts an element into a sorted array given a comparison function
// Returns a new, sorted array.
// compare(x, y) should return < 0 if x is "greater", > 0 if y is "greater",
// 0 if equal
export function sortedInsert(arr, x, compare) {
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

export function compareYearThenNames(x, y) {
  return combineCompares(
    compareIsEmptyRecipient,
    compareYears,
    compareNames,
  )(x, y);
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

// Used to put new, blank recipients in edit mode at the top of the list
export function compareIsEmptyRecipient(x, y) {
  if (x.editMode && x.name == null && (!y.editMode || y.name != null)) {
    return -1;
  } else if ((!x.editMode || x.name !=null) && y.editMode && y.name == null) {
    return 1;
  } else {
    return 0;
  }
}

export function compareStrings(x, y) {
  if (x === y) {
    return 0;
  } else {
    return 2 * Number(
      x.toUpperCase() > y.toUpperCase()
    ) - 1;
  }
}

export function compareYears(x, y) {
  if (x.year === y.year) {
    return 0;
  } else {
    return y.year - x.year;
  }
}

export function compareNames(x, y) {
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

export function transposeName(name) {
  let lastIndex = name.search(/[\S]+$/);
  let last = name.slice(lastIndex);
  let rest = "";
  if (lastIndex > 0) {
    rest = name.slice(0, lastIndex - 1);
  }
  return last + ", " + rest;
}
