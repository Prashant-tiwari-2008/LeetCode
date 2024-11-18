/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function test() {
        return n++;
    };
};


  const counter = createCounter(12)
  debugger
  console.log(counter()) // 10
  console.log(counter()) // 11
  console.log(counter()) // 12
  
 