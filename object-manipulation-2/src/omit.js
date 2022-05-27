/* exported omit */
function omit(source, keys) {
  const result = {};
  let copy = true;
  for (const i in source) {
    for (let z = 0; z < keys.length; z++) {
      if (i === keys[z]) {
        copy = false;
      }
    }
    if (copy === true) {
      result[i] = source[i];
    }
    copy = true;
  }
  return result;
}
