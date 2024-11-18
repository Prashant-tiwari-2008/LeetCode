console.log("working")

function twoSum(nums = [],target){
    let temp = {};
    for(let i=0; i<nums.length; i++){
        let x = target - nums[i];
        if(temp.hasOwnProperty(x)){
            return [temp[x],i]
        }
        temp[nums[i]] = i;
    }
}

let x = [3,2,4];
let y = [2,7,11,15];

console.log(twoSum(x,7));
console.log(twoSum(y,18));