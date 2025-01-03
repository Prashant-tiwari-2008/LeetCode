// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
let nums1 = [-1, 0, 3, 5, 9, 12]
let target1 = 9
let nums2 = [-1, 0, 3, 5, 9, 12]
let target2 = 2

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        if (nums[mid] > target) right = mid - 1;
    }
    return -1;
};

console.log(search(nums1, target1))
console.log(search(nums2, target2))