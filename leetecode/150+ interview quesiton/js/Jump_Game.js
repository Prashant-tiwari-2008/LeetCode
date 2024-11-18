console.log("Jumg Game");

function jumpGame(nums) {
    if (nums.length < 2) return true;
    if (nums[0] === 0) return false;
    let jumStr = nums[0];
    for (let i = 0; i < (nums.length -1); i++) {
        if (nums[i] >= (nums.length - (i + 1))) {
            return true;
        }
    }
    return false
}

const nums = [2, 3, 1, 1, 4]
const nums1 = [3, 1, 1, 0, 4]
const nums2 = [0,2,3] // false
const nums3 = [1,0,1,0]
console.log(jumpGame(nums))
console.log(jumpGame(nums1))
console.log(jumpGame(nums2))
