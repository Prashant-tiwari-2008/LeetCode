/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
console.log("Array Reduce function")

// my solution is the same as best one
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;
    let Cval = init;
    for(let i = 0; i < nums.length; i++){
         Cval  = fn(Cval,nums[i]);
        
    }
    return Cval;
};



const nums = [1,2,3,4]
function sum(accum, curr) { return accum + curr; }
const init = 0
console.log(reduce(nums,sum,init))