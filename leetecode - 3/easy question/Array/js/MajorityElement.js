// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:
Input: nums1 = [3,2,3]
Output: 3

// Example 2:
Input: nums2 = [2,2,1,1,1,2,2]
Output: 2


//============== >>> MY SOLUTION
var majorityElement = function(nums) {
    let temp = nums.reduce((acc,cv) =>{
        if(cv in acc){
            acc[cv]++
        }else{
            acc[cv] = 1
        }
        return acc
    },{})
    for(let key in temp){
        if(temp[key] > nums.length/2){
            return key
        }
    }
};

//============== >>> BEST SOLUTION
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            count++;
            major = nums[i];
        } else if (nums[i] == major) {
            count++;
        } else {
            count--;
        }
    }
    return major;
};

console.log(majorityElement(nums1))
console.log(majorityElement(nums2))