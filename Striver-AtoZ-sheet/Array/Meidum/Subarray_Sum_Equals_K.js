// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

let nums = [1, 1, 1]
let k = 2
let nums1 = [1, 2, 3];
let k1 = 3

var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        let temp = -Infinity;
        while (temp <= k) {
            temp += nums[j]
            if (temp === k) {
                count++;
            } else {
                j++;
            }
        }
    }
    return count;
}

let prefixSum = 0;
let count = 0;
let prefixMap = new Map();
prefixMap.set(0, 1); // Initialize with prefixSum 0 having frequency 1

for (let num of nums) {
    prefixSum += num;

    // Check if (prefixSum - k) exists in the map
    if (prefixMap.has(prefixSum - k)) {
        count += prefixMap.get(prefixSum - k);
    }

    // Update the frequency of the current prefixSum in the map
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
}

return count;


console.log(subarraySum(nums, k))
console.log(subarraySum(nums1, k1))