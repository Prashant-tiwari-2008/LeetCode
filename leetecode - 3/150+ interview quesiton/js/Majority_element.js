console.log("inside Majority Element");

function MajorityElement(nums){
    if(nums.length < 2) return nums[0];
    let hash = {};
    for(let i = 0; i < nums.length; i++ ){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    console.log(hash);

    let max = 0
    let value = 0;
    for(key in hash){
        if(hash[key] > max){
            max = hash[key];
            value = key;
        }
    }
    return value;
}

function best_solution_Majority(nums){
    let ele = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === ele) {
            count++
        }
        else {
            count--;
        }

        if (count < 0) {
            ele = nums[i];
            count = 1;
        }
    }

    return ele;
}

let nums = [3,2,3] // 3
let nums1 = [2,2,1,1,1,2,2,2,1] //2
let nums2 = [1] //2

console.log(MajorityElement(nums))
console.log(MajorityElement(nums1))
console.log(MajorityElement(nums2))

console.log(best_solution_Majority(nums))
console.log(best_solution_Majority(nums1))
console.log(best_solution_Majority(nums2))