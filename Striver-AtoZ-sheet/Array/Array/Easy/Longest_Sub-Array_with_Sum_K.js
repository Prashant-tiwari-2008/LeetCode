// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. It is guaranteed that a valid subarray exists.

let arr1 = [10, 5, 2, 7, 1, 9]
let k1 = 15

let arr2 = [-1, 2, -3]
let k2 = 3

let arr3 = [1, -1, 5, -2 - 3]
let k4 = 3

// not right solution
function lenOfLongestSubarr(arr, k) {
    let prefix = 0;
    let maxLength = 0;
    let hash = { 0: 1 };
    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i];
        if (hash[prefix - k]) {
            Math.max(maxLength, ([hash[prefix - k], i].length));
        }
        hash[prefix] = i;
    }
    return maxLength;
}

console.log(lenOfLongestSubarr(arr1, k1))