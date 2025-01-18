


let nums1 = [4, 5, 6, 7, 0, 1, 2];
let target1 = 0;

let nums2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 3

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is the target, return its index
        if (nums[mid] === target) return mid;

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Target is in the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
        // Otherwise, the right half must be sorted
        else {
            // Target is in the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    // If we exit the loop, the target is not in the array
    return -1;
};


console.log(search(nums1, target1))
console.log(search(nums2, target2))