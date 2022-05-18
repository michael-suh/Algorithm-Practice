/* exported drop */
function drop(array, count) {
  const result = [];
  for (let i = count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    }
    result.push(array[i]);
  }
  return result;
}
