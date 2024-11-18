const nums1 = [0, 0, 1] //  [1,0,]
const nums2 = [0, 1, 0, 3, 12] // [1,3,12,0,0]
const nums3 = [0] // [0]

//==========>> MY SOLUTION
function sortArray(nums) {
    let pos = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        } else {
            count++;
        }
    }
    for (let i = (nums.length - 1); i > (nums.length - 1 - count); i--) {
        nums[i] = 0
    }
    return nums
}

// console.log(sortArray(nums1))
// console.log(sortArray(nums2))
// console.log(sortArray(nums3))

//===========>> BEST SOLUTION
const moveZeroes = (nums) => {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            const temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
        }
        right++;
    }
    return nums;
}

// console.log(moveZeroes(nums1))
console.log(moveZeroes(nums2))
// console.log(moveZeroes(nums3))