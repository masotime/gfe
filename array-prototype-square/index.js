/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  const result = [];
  this.forEach((number) => {
    result.push(number * number);
  });
  return result;
};
