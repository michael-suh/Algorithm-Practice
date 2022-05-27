/* exported defaults */
function defaults(target, source) {
  for (const keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
  return target;
}
