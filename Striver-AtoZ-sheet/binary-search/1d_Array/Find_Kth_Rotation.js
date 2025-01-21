// Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
// Let's suppose we have an array arr = [2, 4, 6, 9], so if we rotate it by 2 times so that it will look like this:
// After 1st Rotation : [9, 2, 4, 6]
// After 2nd Rotation : [6, 9, 2, 4]

let arr1 = [4,5, 1, 2, 3] // 1
let arr2 = [1, 2, 3, 4, 5] // 0
let arr3 = [39,6,11,14,18,36,37,38] // 0


var findKRotation = (nums) => {
    
    let left = 0;
    let right = nums.length - 1;
    let result = Infinity;
    let test = Infinity;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] < result) {
            test = mid;
        }
        result = Math.min(nums[mid], result)
        
        if (nums[right] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return test
}

console.log(findKRotation(arr1))
console.log(findKRotation(arr2))
console.log(findKRotation(arr3))