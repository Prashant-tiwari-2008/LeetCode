// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
    let l = 0;
    let sum = 0;
    let length = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        while (sum >= target) {
            length = Math.min(length, i - l + 1);
            sum -= nums[l++]
        }
    }
    return length === Infinity ? 0 : length;
}