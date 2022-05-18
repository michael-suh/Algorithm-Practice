/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array.length === 0) {
      return false;
    } else if (array[i] === value) {
      return true;
    }
  }
  return false;
}
