export function normalizeStringLength(str, n, useNbsp = true, addEllipses = true) {
  let shortStrLength;
  if (str.length === n) {
    return str; // no shortening or lengthening needed
  }

  if (str.length < n) {
    shortStrLength = str.length;
  } else {
    if (addEllipses) {
      shortStrLength = 1 + str.slice(0, n - 3).search(/[\S][\s]+[\S]+[\s]*$/g);
    } else {
      shortStrLength = 1 + str.slice(0, n).search(/[\S][\s]+[\S]+[\s]*$/g);
    }
  }

  let spaces = addEllipses ? n - 3 - shortStrLength : n - shortStrLength;
  let outStr;

  outStr = str.slice(0, shortStrLength);
  outStr += addEllipses && str.length > n ? "..." : "";
  outStr += useNbsp ? " " + "&nbsp;".repeat(spaces - 1) : " ".repeat(spaces);

  return outStr;
}
