const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes: x, separator: s, addition: a, additionRepeatTimes: y, additionSeparator: z} = options;
  let string = String(str);
  if (!x) x = 1;
  if (!s) s = '+';
  if (a === undefined) a = '';
  if (a && typeof a !== 'string') String(a);
  if (!y) y = 1;
  if (!z) z = '|';
let result=(string + (a + z).repeat(y-1)+ a + s).repeat(x-1) + string + (a + z).repeat(y-1)+ a;

  return result;

}


module.exports = {
  repeater
};
