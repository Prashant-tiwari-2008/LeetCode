console.log("prefix algo")

let arr = [1, 2, 3, 1, 1, 1, 1, 1, 4, 2, 3];
// prefix sum
function computePrefixSum(arr) {
    let prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum
}

// console.log(computePrefixSum(arr))

//1. Subarray Sum Query  => Calculate the sum of elements in a subarray arr[l....r] efficiently.
function rangeSum(arr, l, r) {
    debugger
    let prefixSum = computePrefixSum(arr);
    return l === 0 ? prefixSum[r] : prefixSum[r] - prefixSum[l - 1]

}

let arr1 = [2, 3, 6, 8, 10]
// console.log(rangeSum(arr1, 1, 3))



// 2.count Subarry with a given sum => given an array nums and a target sum k, count the number of subarray that sum up to k.
function subarraySum(nums, k) {
    debugger
    let prefixSum = 0;
    let count = 0;
    let hash = { 0: 1 } // store frequeency of prefix sums

    for (let num of nums) {
        prefixSum += num;
        //check if (prefixsum-k) exists
        if (hash[prefixSum - k]) {
            count += hash[prefixSum - k];
        }
        hash[prefixSum] = (hash[prefixSum] || 0) + 1;
    }
    return count
}

let nums = [1, 1, 1, 2];
let k = 2;
console.log(subarraySum(nums, k)) // 3




//3. Maximum Subarray Sum Less than or Equal to K => Given an array arr, find the maximum sum of a subarray that is less than or equal to k.

//chat_GPT solution
function maxSubArraySumLessThanOrEqualToK(nums, k) {
    const SortedSet = require("collections/sorted-set"); // For binary search
    let prefixSum = 0;
    let maxSum = -Infinity;

    // SortedSet to store prefix sums
    let prefixSet = new SortedSet([0]); // Initialize with 0 for the prefix sum case

    for (let num of nums) {
        prefixSum += num;

        // Find the smallest prefix sum >= (prefixSum - k)
        let target = prefixSum - k;
        let closest = prefixSet.ge(target); // Finds the closest >= target

        if (closest !== undefined) {
            maxSum = Math.max(maxSum, prefixSum - closest);
        }

        // Add the current prefix sum to the set
        prefixSet.add(prefixSum);
    }

    return maxSum;
}

// Example:
let nums1 = [2, -1, 3, -2, 5];
let k1 = 7;
// console.log(maxSubArraySumLessThanOrEqualToK(nums1, k1)); // Output: 7
