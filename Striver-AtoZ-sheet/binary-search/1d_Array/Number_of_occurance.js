// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

let arr1 = [1, 1, 2, 2, 2, 2, 2, 3]
let target1 = 2; // 4

let arr2 = [1, 1, 2, 2, 2, 2, 3];
let target2 = 4; // 0

let arr3 = [8, 9, 10, 12, 12, 12]
let target3 = 12; // 3


var countFreq = (arr, target) => {
    // your code here
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            count++;
            let leftvalue = mid - 1;
            let rightvalue = mid + 1;
            while (arr[leftvalue] == target || arr[rightvalue] === target) {
                if (arr[leftvalue] === target) {
                    count++;
                    leftvalue--
                }
                if (arr[rightvalue] === target) {
                    count++;
                    rightvalue++;
                }
            }
            return count;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return count;
}



var countFreq = (nums, target) => {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let first = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                first = mid;
                right = mid - 1
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    const findlast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let last = -1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                last = mid;
                left = mid + 1
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }

    return findlast(nums, target) - findFirst(nums, target)
}

console.log(countFreq(arr1, target1))
console.log(countFreq(arr2, target2))
console.log(countFreq(arr3, target3))