// Given an array arr containing both positive and negative integers, the task is to compute the length of the largest subarray that has a sum of 0.

let arr1 = [15, -2, 2, -8, 1, 7, 10, 23]; //5
let arr2 = [2, 10, 4]; // 0
let arr3 = [1, 0, -4, 3, 1, 0]; // 5

var maxlan = (arr) => {
    let maxlan = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempSum = 0;
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            tempSum += arr[j];
            count++;
            if (tempSum == 0 && count > maxlan) {
                maxlan = count;
            }
        }
    }
    return maxlan;
}

console.log(maxlan(arr1))
console.log(maxlan(arr2))
console.log(maxlan(arr3))