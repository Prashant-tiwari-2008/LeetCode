
function removeDuplicates(nums) {
    let hash = {};

    for (let i = 0; i < nums.length;) {
        hash[nums[i]] = hash[nums[i]] + 1 || 0;
        if(hash[nums[i]]){
            nums.splice(i,1) 
        }else{
            i++
        }
    }
    return [nums,nums.length]
};

let nums1 = [1,1,2]
let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))