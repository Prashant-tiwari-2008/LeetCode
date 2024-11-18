var containsNearbyDuplicate = function (nums, k) {
    //==========>>> My Solution
    // let number = {}
    // for (let i = 0; i < nums.length; i++) {
    //     if (number[nums[i]]) {
    //         number[nums[i]].push(i)
    //     } else {
    //         number[nums[i]] = [i];
    //     }
    // }
    // for (const ele in number) {
    //     for (let i = 0; i < number[ele].length; i++) {
    //         if (Math.abs(number[ele][i] - number[ele][i+1]) <= k) {
    //             return true
    //         }
    //     }
    // }

    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};



// nums = [1,2,3,1], k = 3
nums = [1, 0, 1, 1], k = 1
console.log(containsNearbyDuplicate(nums, k))