// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

let nums1 = [3, 4, 5, 1, 2] // 1
let nums2 = [4, 5, 6, 7, 0, 1, 2] // 0 
let nums3 = [11, 13, 15, 17] // 11

var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = Infinity;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        result = Math.min(nums[mid], result)
        if (nums[right] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result
}

console.log(findMin(nums1))
console.log(findMin(nums2))
console.log(findMin(nums3))