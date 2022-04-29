const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract result from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function checkdate(date) {
  try {
    return new Date(date.getTime());
  } catch {
    throw new Error('Invalid date!');
  }
}

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  checkdate(date);
  let result;
  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    result = 'winter';
  } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    result = 'spring';
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    result = 'summer';
  } else {
    result = 'autumn';
  }

  return result;
}


module.exports = {
  getSeason
};
