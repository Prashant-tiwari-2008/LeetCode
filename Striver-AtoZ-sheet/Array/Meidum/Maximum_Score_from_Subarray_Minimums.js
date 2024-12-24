// Given an array arr[], with 0-based indexing, select any two indexes, i and j such that i < j. From the subarray arr[i...j], select the smallest and second smallest numbers and add them, you will get the score for that subarray. Return the maximum possible score across all the subarrays of array arr[]


let arr1 = [4, 3, 1, 5, 6] // 11
let arr2 = [5, 4, 3, 1, 6] // 9;

var pairWithMaxSum = (nums) => {
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let min1 = nums[0]
        let min2 = nums[0]
        for (let j = i + 1; j < nums.length; j++) {
            min1 = Math.max(min1,nums[j]);
            min2 = Math.min(min1,nums[j])
            let currentSum = max + min;
            maxSum = Math.max(maxSum,currentSum)
        }
    }
    return maxSum;
}

console.log(pairWithMaxSum(arr1))
console.log(pairWithMaxSum(arr2))