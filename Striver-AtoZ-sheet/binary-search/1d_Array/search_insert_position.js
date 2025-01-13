// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

let nums1 = [1, 3, 5, 6]
let target1 = 5;  // 2

let nums2 = [1, 3, 5, 6];
let target2 = 2; // 1

let nums3 = [1, 3, 5, 6];
let target3 = 7 // 4

let nums4 = [1, 3]
let target4 = 2

var searchInsert = function (arr, target) {
    if (arr[0] > target) return 0;
    if (arr[arr.length - 1] < target) return arr.length
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left;
};


// console.log(searchInsert(nums1, target1))
// console.log(searchInsert(nums2, target2))
// console.log(searchInsert(nums3, target3))
console.log(searchInsert(nums4, target4))
// first solution

// var searchInsert = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] === target){
//             return i;
//         }else if(nums[i] < target && nums[i+1] > target){
//                 return i + 1;
//         }else if(nums[i] > target){
//             return i;
//         }
//     }
//     return nums.length;
// };