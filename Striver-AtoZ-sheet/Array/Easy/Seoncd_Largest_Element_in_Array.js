let arr = [12, 35, 1, 10, 34, 1]
let arr1 = [10, 5, 10]
let arr2 = [10, 10, 10]

function secondLarget(arr) {
    let largest = arr[0];
    let secondLarget = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLarget = largest;
            largest = arr[i];
        }
        if (arr[i] < largest && arr[i] > secondLarget) {
            secondLarget = arr[i]
        }
    }
    return secondLarget;
}

console.log(secondLarget(arr))