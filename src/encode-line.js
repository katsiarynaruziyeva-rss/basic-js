const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its char version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let char;
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      count === 1 ? char = `${arr[i]}` : char = `${count}${arr[i]}`;
      arr2.push(char);
      count = 1;
    }
  }

  return arr2.join('');
}

module.exports = {
  encodeLine
};
