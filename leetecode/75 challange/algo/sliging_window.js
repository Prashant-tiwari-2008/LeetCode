console.log("sliding windows");


// pattern 1. => constant windows
// Q1. max sum of k consucative ele in array 
const maxSum = (nums, k) => {
    let l = 0;
    let r = k - 1;
    let sum = 0
    let maxSum = 0
    let len = nums.length - 1;
    for (let s = 0; s < k; s++) {
        sum += nums[s]
    }
    while (r < len) {
        sum -= nums[l];
        r++;
        l++;
        sum += nums[r]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}

const array = [-1, 2, 3, 3, 4, 5, -1];
const k = 4;
// console.log(maxSum(array,k));

// pattern 2. => longest subarray/substring where condn
// Q1. longest subarray with sum <= k

const arr = [1, 2, 5, 1, 10, 10]
const targetSum = 14;

// ==> 1. Brut force approach => find all the possible array
const brutForce = (arr, k) => {
    let maxlength = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if(sum <= k){
                maxlength = Math.max(maxlength, j-i+1)
            }else{
                break;
            }
        }
    }
    return maxlength;
}
console.log(brutForce(arr, targetSum))

// ==> 2. better solution

const betterSolution = (arr,k) => {
    let r = 0;
    let l = 0;
    let n = arr.length - 1;
    let maxlength = 0

    while(r < n){
        sum += sum[r]
        while(sum > k){
            sum = sum - arr[l];
            i--;
        }
        while(sum <= k){
            maxlength = Math.max(maxlength, r - l + 1);
        }
        r++;
    }  
    return maxlength  
}


// ==> 3. optimal solution

const optimalSolution = (arr,k) => {
    let r = 0;
    let l = 0;
    let n = arr.length - 1;
    let maxlength = 0

    while(r < n){
        sum += sum[r]
        if(sum > k){
            sum = sum - arr[l];
            i--;
        }
        while(sum <= k){
            maxlength = Math.max(maxlength, r - l + 1);
        }
        r++;
    }  
    return maxlength  
}



// pattern 3. => no of Sub array =>better solution


// pattern 4 => finding shortes/min wind where condn