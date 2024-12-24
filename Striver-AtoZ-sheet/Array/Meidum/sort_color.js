console.log("sort color");
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

let nums1 = [2, 0, 2, 1, 1, 0];
let nums2 = [2, 0, 1];

var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp; 
            }
        }
    }
    return nums;
};

console.log(sortColors(nums1))
console.log(sortColors(nums2))