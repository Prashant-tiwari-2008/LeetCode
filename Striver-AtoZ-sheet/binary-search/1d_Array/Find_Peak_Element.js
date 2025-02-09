// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

let nums = [1, 2, 3, 1];
let nums1 = [1, 2, 1, 3, 5, 6, 4]

var findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
}


console.log(findPeakElement(nums))
console.log(findPeakElement(nums1))
// console.log(findPeakElement())