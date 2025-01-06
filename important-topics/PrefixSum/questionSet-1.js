console.log("question one")

// 1.Range sum queries
function rangeSum(arr, l, r) {
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }
    return l === 0 ? prefixSum[r] : prefixSum[r] - prefixSum[l];
}

let arr = [1, 2, 4, 65, 2, 42, 3, 34, 12];
// console.log(rangeSum(arr, 2, 5));

// 2. Subarray sum
function subarraySum(nums, k) {
    let prefixSum = 0;
    let count = 0;
    let prefixMap = { 0: 1 }

    for (let num of nums) {
        prefixSum += num;

        if (prefixMap[prefixSum - k]) {
            count += prefixMap[prefixSum - k]
        }

        prefixMap[prefixSum] = ( prefixMap[prefixSum] || 0) + 1;
    }

}

let nums = [1, 1, 1]
let k = 2
console.log(subarraySum(nums, k))