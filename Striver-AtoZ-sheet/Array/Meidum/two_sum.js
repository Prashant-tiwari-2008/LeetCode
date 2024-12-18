console.log("two sum");
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [target - nums[i], nums[i]]
        } else {
            map.set(nums[i], target - nums[i])
        }
    }
    return 0;
}

console.log(twoSum(nums,target))