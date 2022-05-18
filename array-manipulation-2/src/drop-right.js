/* exported dropRight */
function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  } if (array.length < count) {
    result = array;
  }
  return result;
}
