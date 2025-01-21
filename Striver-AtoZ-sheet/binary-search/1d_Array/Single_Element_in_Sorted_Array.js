// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.


const nums1 = [1, 1, 2, 3, 3, 4, 4, 8, 8] // 2
const nums2 = [3, 3, 7, 7, 10, 11, 11] // 10

var singleNonDuplicate = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid]
        } else if (mid % 2 == 0 && nums[mid] !== nums[mid + 1]) {
            right = mid - 1
        } else if (mid % 2 !== 0 && nums[mid] == nums[mid - 1]) {
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
}

console.log(singleNonDuplicate(nums1))
console.log(singleNonDuplicate(nums2))