console.log("Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.")

// case 1:
Input: nums1 = [1, 3, 5, 6], target1 = 5
Output: 2

// case 2:
Input: nums2 = [1, 3, 5, 6], target2 = 2
Output: 1

// case 3:
Input: nums3 = [1, 3, 5, 6], target3 = 7
Output: 4

//===========>>> MY SOLUTION
function Search_Insert_Position(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        // if () return i;
        if (arr[i] === value || arr[i] > value) return i;
        else if (arr[i + 1] > value) return i + 1
    }
    return arr.length;
}

//==========>>> BEST SOULTION
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }

    return left;
};

console.log(Search_Insert_Position(nums1, target1))
console.log(Search_Insert_Position(nums2, target2))
console.log(Search_Insert_Position(nums3, target3))
console.log(Search_Insert_Position([1, 3, 5, 6], 0))