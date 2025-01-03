// Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest element in arr[] that is less than or equal to k. This element is called the "floor" of k. If such an element does not exist, return -1.

let arr1 = [1, 2, 8, 10, 11, 12, 19]
let k1 = 0 // -1
let arr2 = [1, 2, 8, 10, 11, 12, 19]
let k2 = 5 // 1
let arr3 = [1, 2, 8]
let k3 = 1 //0

var findFloor = (arr, k) => {
    if (arr[0] > k) return -1;
    let result = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === k)  return mid;
        if (arr[mid] < k) {
            left = mid + 1;
            if(arr[result] < arr[mid]){
                result = mid;
            }
        }
        if(arr[mid] > k){
            right = mid - 1;
        }
    }
    return result;
}

console.log(findFloor(arr1, k1))
console.log(findFloor(arr2, k2))
console.log(findFloor(arr3, k3))