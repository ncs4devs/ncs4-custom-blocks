export function normalizeStringLength(str, n, useNbsp = true, addEllipses = true) {
  let x = n - str.length;
  if (x < 0) {
    return addEllipses ? str.slice(0, n - 3) + "..." : str.slice(0, n);
  } else if (x > 0) {
    return useNbsp ? str + " " + "&nbsp;".repeat(x - 1) : str + " ".repeat(x);
  } else {
    return str;
  }
}
