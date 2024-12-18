// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let nums = [1, 1, 0, 1, 1, 1]  //3
let nums1 = [1, 0, 1, 1, 0, 1] // 2

//corner cases
let nums2 = [0]
let nums3 = [0, 1]
let nums4 = [0, 0, 0]

// not best solution
var findMaxConsecutiveOnes = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            let temp = 1;
            let j = i + 1;
            while (arr[j] == 1) {
                j++;
                temp++;
            }
            if (temp > count) {
                count = temp;
            }
            i = j;
        }
    }
    return count;
};

//chatGpt
var findMaxConsecutiveOnes_chatgpt = function (arr) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        }else{
            count = 0;
        }
    }
    return maxCount;
}

console.log(findMaxConsecutiveOnes(nums))
console.log(findMaxConsecutiveOnes(nums1))
console.log(findMaxConsecutiveOnes(nums2))
console.log(findMaxConsecutiveOnes(nums3))
console.log(findMaxConsecutiveOnes(nums4))