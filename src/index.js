
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return result;
  }
  for (let i = 0; i < matrix.length; i++) {
    const curArr = matrix[i];
    if (i%2) {
      curArr.sort((a, b) => b - a);
    }
    result = result.concat(curArr);
  }
  return result;
}
