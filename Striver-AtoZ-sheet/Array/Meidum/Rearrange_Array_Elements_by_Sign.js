console.log("Rearrange Array Elements by Sign");
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions

let nums = [3, 1, -2, -5, 2, -4]; // [3,-2,1,-5,2,-4]
let nums1 = [-1, 1];

var rearrangeArray = function (nums) {
    let positiveArr = [];
    let negativeArr = [];

    for (ele of nums) {
        if (ele > 0) {
            positiveArr.push(ele)
        } else {
            negativeArr.push(ele)
        }
    }

    let result = [];
    let n = positives.length; // Both arrays are of the same size
    for (let i = 0; i < n; i++) {
        result.push(positives[i]);
        result.push(negatives[i]);
    }
    
    return result;
};

console.log(rearrangeArray(nums))
console.log(rearrangeArray(nums1))

// best solution
var rearrangeArray = function(nums) {
    let result = new Int32Array(nums.length)
    let posIndex = 0;
    let negIndex = 1;
    for(let i=0;i<nums.length;i++){
     if(nums[i]>=0){
         result[posIndex] = nums[i]
         posIndex+=2;
     }else{
         result[negIndex] = nums[i]
         negIndex+=2
     }
    }
    return result
 };