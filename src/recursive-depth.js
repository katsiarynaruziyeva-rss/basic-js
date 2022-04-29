const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let count;
    let i=0;
    let arrAll=arr.flat(Infinity);
    let lengthall=arrAll.length;
    let c;
    if(lengthall==0){
      c=arr.flat(i);
      i++
      if(c.length==lengthall){
        return i
      }
    }
    while( JSON.stringify(c) !==JSON.stringify(arrAll)){
      c=arr.flat(i);
      i++
      if (JSON.stringify(c) ==JSON.stringify(arrAll)){
        return i;
      }
     }
    }
  //   calculateDepth(arr, depth = 1) {
  //     if (arr.some(el => Array.isArray(el))) {
  //         depth++;
  //         arr = arr.flat(1);
  //         return this.calculateDepth(arr, depth);
  //     }

  //     return depth;
  // }
  }

module.exports = {
  DepthCalculator
};
