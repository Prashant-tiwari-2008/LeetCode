console.log("Max Number of K-Sum Pairs");


// ===>> time limit excied
const maxOperation = (nums, k) => {
    // let i = 0;
    // while(i<j){
    //     if(nums[i] + nums[j] === k){
    //         count++;
    //         nums.splice(j,1);
    //         nums.splice(i,1);
    //         j -= 2;
    //     }else{
    //         i++;
    //         j--;
    //     }
    // }
    // return count;/
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i;) {
            if (nums[i] + nums[j] === k) {
                count++;
                nums.splice(j, 1);
                nums.splice(i, 1);
                j = nums.length - 1;
            }else{
                j--;
            }
        }
    }
    return count;
}

const nums = [1,2,3,4];
const k = 5;
const nums1 = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
const k1 = 2;
console.log(maxOperation(nums, k))
console.log(maxOperation(nums1, k1))