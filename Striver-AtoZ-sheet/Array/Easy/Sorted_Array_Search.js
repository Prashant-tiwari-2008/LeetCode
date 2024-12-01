// Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.

let arr1 = [1, 2, 3, 4, 6]
let k1 = 6

let arr2 = [1, 2, 4, 5, 6]
let k2 = 3

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return true; // Target found at index mid
        } else if (arr[mid] < target) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }

    return false; // Target not found
}

console.log(binarySearch(arr1, k1))
console.log(binarySearch(arr2, k2))