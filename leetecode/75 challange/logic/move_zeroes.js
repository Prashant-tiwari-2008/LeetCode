console.log("move Zeroes");
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeroes(nums) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if(nums[i] === 0){
            nums[nums.length] = nums[i];
            nums.splice(i,1)
            j--;
        }else{
            i++;
        }
    }
    return nums;

}

const input = [0, 1, 0, 3, 12]
const input1 = [0]

console.log(moveZeroes(input))
console.log(moveZeroes(input1))

//best solution one
var moveZeroes = function(nums) {
    let count = 0; 
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[count];
            nums[count] = temp;
            count++;
        }
    }
    return nums;
};

var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};