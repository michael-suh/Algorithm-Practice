/* exported takeRight */
function takeRight(array, count) {
  const result = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    } else if (array.length < count) {
      return array;
    }
    result.push(array[i]);
  }
  return result;
}
