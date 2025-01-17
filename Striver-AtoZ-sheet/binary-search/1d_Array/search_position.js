// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

let nums = [5, 7, 7, 8, 8, 10] // [3,4]
let target = 8;

let nums1 = [5, 7, 7, 8, 8, 10] // [-1,-1]
let target1 = [-1, -1]

let nums2 = [] // [-1,-1]
let target2 = 0

var searchRange = function (nums, target) {

    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let first = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                first = mid;
                right = mid - 1
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    const findlast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let last = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                last = mid;
                left = mid + 1
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }

    return [findFirst(nums, target), findlast(nums, target)]
};

console.log(searchRange(nums, target))
console.log(searchRange(nums1, target1))
console.log(searchRange(nums2, target2))