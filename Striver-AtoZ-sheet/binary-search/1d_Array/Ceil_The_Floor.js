// Given an unsorted array arr[] of integers and an integer x, find the floor and ceiling of x in arr[].

// Floor of x is the largest element which is smaller than or equal to x. Floor of x doesn’t exist if x is smaller than smallest element of arr[].
// Ceil of x is the smallest element which is greater than or equal to x. Ceil of x doesn’t exist if x is greater than greatest element of arr[].

// Return an array of integers denoting the [floor, ceil]. Return -1 for floor or ceiling if the floor or ceiling is not present.

let arr1 = [5, 6, 8, 9, 6, 5, 5, 6]  //6, 8
let x1 = 7

let arr2 = [5, 6, 8, 8, 6, 5, 5, 6] // 8, -1
let x2 = 10

var getFloorAndCeil = (x, arr) => {
    let floor = -Infinity
    let ceil = Infinity
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x){
            return [arr[i],arr[i]]
        }
        if (arr[i] < x && arr[i] > floor) {
            floor = arr[i]
        }
        if (arr[i] > x && arr[i] < ceil) {
            ceil = arr[i]
        }
    }

    return [floor !== -Infinity ? floor : -1, ceil !== Infinity ? ceil : -1]
}

console.log(getFloorAndCeil(x1, arr1))
console.log(getFloorAndCeil(x2, arr2))