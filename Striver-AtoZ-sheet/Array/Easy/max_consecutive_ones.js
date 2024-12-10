// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let nums = [1, 1, 0, 1, 1, 1]  //3
let nums1 = [1, 0, 1, 1, 0, 1] // 2

//corner cases
let nums2 =[0]
let nums3 =[0,0]
let nums4 =[0,0,0]

var findMaxConsecutiveOnes = function (arr) {
    let count = 1;
    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] === 1 && arr[i + 1] === 1){
            temp++;
            if(temp > count){
                count = temp;
            }
        }else{
            temp = 1
        }
    }
    return count
}; 

console.log(findMaxConsecutiveOnes(nums))
console.log(findMaxConsecutiveOnes(nums1))
console.log(findMaxConsecutiveOnes(nums2))
console.log(findMaxConsecutiveOnes(nums3))
console.log(findMaxConsecutiveOnes(nums4))