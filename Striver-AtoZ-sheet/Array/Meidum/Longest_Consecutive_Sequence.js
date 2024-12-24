console.log("Longest Consecutive Sequence");
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

let nums1 = [100, 4, 200, 1, 3, 2]; // 4
let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] // 9

// not right approcah 
var longestConsecutive_ = function (nums) {
    let sotedArr = nums.sort((a, b) => a - b);
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < sotedArr.length; i++) {
        if (sotedArr[i + 1] - sotedArr[i] == 1) {
            currentCount++;
            if(currentCount > maxCount){
                maxCount = currentCount
            }
        }
    }
    return maxCount + 1
};

//chatGPT solution
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let maxCount = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentCount = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentCount++;
            }

            maxCount = Math.max(maxCount, currentCount);
        }
    }

    return maxCount;
};


console.log(longestConsecutive(nums1))
console.log(longestConsecutive(nums2))