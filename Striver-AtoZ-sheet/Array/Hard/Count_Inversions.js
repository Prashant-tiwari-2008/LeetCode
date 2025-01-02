console.log("Count Inversions")
// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum. 

let arr1 = [2, 4, 1, 3, 5] //3
let arr2 = [2, 3, 4, 5, 6] //0
let arr3 = [10, 10, 10] //0
let arr4 = [24, 18, 38, 43, 14, 40, 1, 54] //12

function inversionCount(arr) {
    let count = 0;
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count
}

// console.log(inversionCount(arr1))
// console.log(inversionCount(arr2))
// console.log(inversionCount(arr3))
console.log(inversionCount(arr4))