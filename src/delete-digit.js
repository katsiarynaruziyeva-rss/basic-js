const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */   
function deleteDigit(n ) {
  let arr = n.toString().split('');
  let arr2 = arr.map((elem, ind, arr3) => {
    arr3 = arr.slice(0);
    arr3.splice(ind, 1);
    return Number(arr3.join(''));
  });
  return Math.max(...arr2);
 }

module.exports = {
  deleteDigit
};
