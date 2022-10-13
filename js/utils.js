// ensures loaded attributes from the database are cast to their correct type
export function parseAttributes(table, data) {
  let out = {};
  for (let attr in data) {
    if (
        (typeof data[attr] === "string" || table[attr].type === "image")
        && table[attr] && typeof table[attr] === "object" && table[attr].type
      ) {
      switch (table[attr].type) {
        case "string": {
          out[attr] = data[attr];
          break;
        }

        case "image": {
          out[attr] = data[attr][0] || data[attr];
          break;
        }

        case "bool":
        case "int":
        case "integer":
        case "number":
        case "json": {
          out[attr] = JSON.parse(data[attr]);
          break;
        }

        case "null": {
          if (data[attr] !== null && data[attr] !== "" && data[attr] !== "null") {
            console.warn("Attribute '" + attr +
              "': expected null, got '" + data[attr] + "'"
            );
          }
          out[attr] = null;
          break;
        }

        default: {
          console.warn(
            "Attribute '" + attr + "': Unknown type '" + table[attr].type + "'"
          );
        }
      }
    } else {
      out[attr] = data[attr];
    }
  }
  return out;
}

export function normalizeStringLength(str, n, useNbsp = true, addEllipses = true) {
  let richText = parseRichText(str);
  if (richText.length === n) {
    return richText.toString(); // no shortening or lengthening needed
  }
  let outStr;
  if (richText.length <= n) {
    let spaces = addEllipses ? n - 3 - richText.length : n - richText.length;
    outStr = richText.toString();
    outStr += useNbsp ? " " + "&nbsp;".repeat(spaces - 1) : " ".repeat(spaces);
  } else {
    richText = richText.slice(0, addEllipses ? n - 3 : n);
    outStr = richText.toString();
    outStr += addEllipses ? "..." : "";
  }
  return outStr;
}

/*
  Takes a rich text string and returns an object of the form
  {
    length: <int>,
    tag: <html element name>, // e.g. "em", "strong"
    hasEndTag: <false | true>,
    text: [string | rich text object],
    slice: (min, max) => <rich text object>,
    toString: () => <string>,
  }
*/

function parseRichText(str, rootTag = null) {
  // tag: charValue,
  const voidTags = {
    br: 30,
    hr: 30,
  }

  const traverse = (root, visit) => {
    root.text.forEach(
      (leaf, index) => typeof leaf === "object"
        ? leaf.tag && !leaf.hasEndTag
          ? visit(leaf, root, index) // "visit" void tags
          : traverse(leaf, visit)
        : visit(leaf, root, index)
    );
  }

  const prototype = {
    slice(min, max) {
      if (min < 0) {
        slice(this.length + min);
      }
      if (max < 0) {
        slice(this.length + max);
      }
      max = max == null ? this.length : max;

      let out = Object.assign(Object.create(prototype), this);
      out.text = [];
      let i = 0;

      const addLeaf = (leaf, root) => {
        let isVoidTag = typeof leaf === "object" && leaf.tag && !leaf.hasEndTag;

        // leaf is a rich text object
        if (isVoidTag) {
          if (i < min || i + leaf.length > max) {
            // skip tag
            i += leaf.length;
          } else {
            // add tag
            i += leaf.length;
            out.text.push(leaf);
            out.length += leaf.length;
          }
          return;

        // leaf is a string
        } else {
          let value = Object.assign(Object.create(prototype), root);
          let text = "";
          let chars = 0;
          if (leaf.length === 0) {
            return; // empty string
          }

          if (i < min) {
            // skip characters until i == min
            if (i + leaf.length >= min) {
              let skip = min - i;
              i += skip;
              chars = Math.min(leaf.length, max - min);
              text = leaf.slice(skip, skip + chars);
            } else {
              // leaf doesn't reach up to the min index
              i += leaf.length;
            }
          } else if (i < max) {
            // min <= i < max
            chars = Math.min(leaf.length, max - i);
            text = leaf.slice(0, chars);
            i += chars;
          }

          if (text !== "") {
            value.text = [text];
            value.length = chars;
            out.text.push(value);
            out.length = Math.max(0, i - min);
          }
        }
      }

      traverse(this, addLeaf);
      return out;
    },

    toString() {
      let out = "";

      const addLeaf = (leaf, root, index) => {
        if (typeof leaf === "object" && leaf.tag && !leaf.hasEndTag) {
          // void tag
          out += "<" + leaf.tag + ">";
          return;
        }

        if (root.tag && index === 0) {
          out += "<" + root.tag + ">";
        }

        out += leaf;

        if (root.tag && root.hasEndTag && index === root.text.length - 1) {
          out += "</" + root.tag + ">";
        }
      }

      traverse(this, addLeaf);

      return out;
    },

  }

  let out = Object.create(prototype);
  out = Object.assign(out, {
    length: 0,
    tag: rootTag,
    hasEndTag: false,
    text: [],
  });

  // tokenize string

  let tokens = [];
  let workingStr = str;
  let a = workingStr.search("<");
  let b = workingStr.search(">");
  while (a !== -1 && b !== -1) {
    let token = workingStr.slice(0, a);
    if (token !== "") {
      // there is a string token
      tokens.push(token);
    }
    // handle html token
    tokens.push(workingStr.slice(a, b + 1));
    workingStr = workingStr.slice(b + 1);
    a = workingStr.search("<");
    b = workingStr.search(">");
  }
  // handle the rest of the string
  if (workingStr !== "") {
    tokens.push(workingStr);
  }

  const reduceTokens = (textObj, token, index, arr) => {
    const next = (acc, index) => () => reduceTokens(
      Object.assign(Object.create(prototype), acc),
      arr[index + 1],
      index + 1,
      arr,
    );
    const recur = (arr, init) => dynamicReduce(arr, reduceTokens, init);

    if (textObj.hasEndTag || index >= arr.length) {
      return textObj;
    }

    if (/^<\/.*>$/.test(token)) {
      // HTML end tag
      a = token.search("<") + 1;
      b = token.search(">");
      let tag = token.slice(a + 1, b);
      if (tag === textObj.tag) {
        // exit reduce
        textObj.hasEndTag = true;
        return textObj;
      }

    } else if (/^<.*>$/.test(token)) {
      // HTML start tag
      a = token.search("<");
      b = token.search(">");
      let htmlOut = Object.create(prototype);
      htmlOut = Object.assign(htmlOut, {
        length: 0,
        tag: token.slice(a + 1, b),
        hasEndTag: false,
        text: [],
      });

      if (voidTags[htmlOut.tag]) {
        htmlOut.length = voidTags[htmlOut.tag];
      } else {
        htmlOut = recur(arr.slice(index + 1), htmlOut);
        index += 1 + htmlOut.text.length; // prevent going over the same entries twice
      }
      textObj.text.push(htmlOut);
      textObj.length += htmlOut.length;

    } else {
      // normal string
      textObj.text.push(token);
      textObj.length += token.length;
    }
    if (textObj.tag && index + 1 === arr.length && !textObj.hasEndTag) {
      console.error("EOL reached: Expected closing tag for <" + textObj.tag + ">");
    }
    return next(textObj, index);
  }

  out = dynamicReduce(tokens, reduceTokens, out);
  return out;
}

function dynamicReduce(arr, reduceFunc, init) {
  let value = reduceFunc(init, arr[0], 0, arr);
  while (typeof value === "function") {
    value = value();
  }
  return value;
}
