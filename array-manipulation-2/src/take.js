/* exported take */
function take(array, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) {
      return [];
    }
    result.push(array[i]);
  }
  return result;
}
