// Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

// Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

let arr1 = [2, 2] // [2,1]
let arr2 = [1, 3, 3] // [3,2]
let arr3 = [4, 3, 6, 2, 1, 1] // [1,5]

function findTwoElement(arr) {
    arr.sort((a, b) => a - b)
    let missingNumber;
    let repeatedNumber;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0 && arr[i] !== 1) {
            missingNumber = 1;
        } else if (!missingNumber && arr[i] + 1 !== arr[i + 1]) {
            missingNumber = arr[i] + 1;
        }
    }
    return missingNumber;
}

console.log(findTwoElement(arr1))
console.log(findTwoElement(arr2))
console.log(findTwoElement(arr3))