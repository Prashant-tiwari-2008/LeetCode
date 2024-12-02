// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let nums1 = [3, 0, 1]
let nums2 = [0, 1]
let nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]

// corner case/
let num4 = [0]
let num5 = [1]
let num6 = [1, 2]

let missingNumber = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b)

    for (let i = 0; i < sortedArray.length; i++) {
        if(arr[0] !== 0) return 0;
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
}

console.log(missingNumber(nums1))
console.log(missingNumber(nums2))
console.log(missingNumber(nums3))
console.log(missingNumber(num4))
console.log(missingNumber(num5))
console.log(missingNumber(num6))

//best solution
const missingNumber_chatgpt = (arr) => {
    const n = arr.length;
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of array elements
    return totalSum - actualSum; // Missing number
};