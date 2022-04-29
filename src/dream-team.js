const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
let arr = [];

  if (!Array.isArray(members)|| !members) return false;
  members.filter(el => typeof el === 'string').forEach(el => arr.push(el.trim().toUpperCase()[0]));

  return arr.sort().join('');

}
module.exports = {
  createDreamTeam
};
