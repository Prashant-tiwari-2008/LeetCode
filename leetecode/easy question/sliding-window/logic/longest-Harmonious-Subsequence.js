console.log("Longest Harmonious Subsequence");

var findLHS = function (nums) {
    let result = [];
    nums = nums.sort((a, b) => a - b);
    console.log("sorted array", nums);
    for (let i = 0; i < nums.length; i++) {

    }
};

let nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));

let nums1 = [1, 2, 3, 4];
console.log(findLHS(nums1));

let nums2 = [1, 1, 1, 1];
console.log(findLHS(nums2));

