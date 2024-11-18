console.log("Increasing Triplet Subsequence")

// my fist solution O{n^2} and O(1)
const TripletSubsequence = (nums) =>{
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j=i+1 ; j <nums.length; j++){
            if(nums[i] < nums[j]){
                count++;
            }
        }
    }
    return count >= 2;
}

let nums = [1,2,3,4,5]
let nums1 = [5,4,3,2,1]
let nums2 = [2,1,5,0,4,6]
let nums3 = [20,100,10,12,5,13] // true 
let nums4 = [0,4,2,1,0,-1,-3] // false 
console.log(TripletSubsequence(nums))
console.log(TripletSubsequence(nums1))
console.log(TripletSubsequence(nums2))
console.log(TripletSubsequence(nums3))