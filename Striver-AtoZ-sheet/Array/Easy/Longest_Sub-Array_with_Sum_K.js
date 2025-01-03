console.log("Longest Sub-Array with Sum K");
// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. It is guaranteed that a valid subarray exists.

let arr1 = [10, 5, 2, 7, 1, 9];
let k1 = 15; // 4
let arr2 = [-1, 2, -3];
let k2 = -2; // 3
let arr3 = [1, -1, 5, -2, 3];
let k3 = 3 // 4

function lenOfLongestSubarr(arr, k) {
    let prefixSum = 0;
    let maxLength = 0;
    const prefixMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // Check if the current prefix sum equals `k`
        if (prefixSum === k) {
            maxLength = i + 1;
        }

        // Check if prefixSum - k exists in the map
        if (prefixMap.has(prefixSum - k)) {
            maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
        }

        // Store the prefix sum if not already in the map
        if (!prefixMap.has(prefixSum)) {
            prefixMap.set(prefixSum, i);
        }
    }

    return maxLength;
}

console.log(lenOfLongestSubarr(arr1, k1))
console.log(lenOfLongestSubarr(arr2, k2))
console.log(lenOfLongestSubarr(arr3, k3))