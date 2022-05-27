/* exported invert */
function invert(source) {
  const result = {};
  for (const keys in source) {
    result[source[keys]] = keys;
  }
  return result;
}
