const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) { 
var arr = email.replace(/@/g, " ");
let arr2=arr.split(' ');
let arr3=arr2.pop();
return arr3
}

module.exports = {
  getEmailDomain
};
