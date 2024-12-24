// You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

let arr = [16, 17, 4, 3, 5, 2] //  [17, 5, 2]
let arr1 = [10, 4, 2, 4, 1] //[10, 4, 4, 1]

var maxLader = (nums) => {
    let length = nums.length - 1;
    let maxValue = nums[length];
    let result = [maxValue];
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] >= maxValue) {
            result.unshift(nums[i]);
            maxValue = nums[i];
        }
    }
    return result;
}

console.log(maxLader(arr))
console.log(maxLader(arr1))