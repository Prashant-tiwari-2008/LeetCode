// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
// Output: [5,6,7,1,2,3,4]

const nums1 = [-1, -100, 3, 99]
const k1 = 2
// Output: [3,99,-1,-100]

// limit exceed
var rotate1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
}

// right solution
var rotate = function(nums, k) {
    debugger
    const n = nums.length;
    k %= n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    return nums;
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}


console.log(rotate(nums, k))
console.log(rotate(nums1, k1))