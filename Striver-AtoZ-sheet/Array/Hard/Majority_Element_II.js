// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

let nums = [3, 2, 3] // [3]
let nums1 = [1] // [1]
let nums2 = [1, 2] // [1,2]

var majorityElement = function (nums) {
    let hash = {}
    let result = [];
    let length = nums.length / 3;
    for (ele of nums) {
        hash[ele] = hash[ele] ? hash[ele] + 1 : 1;
    }

    for (ele in hash) {
        if (hash[ele] > length) {
            result.push(parseInt(ele))
        }
    }
    return result;
};

console.log(majorityElement(nums))
console.log(majorityElement(nums1))
console.log(majorityElement(nums2))