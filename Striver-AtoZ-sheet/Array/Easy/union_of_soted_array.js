// Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order.

// Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

const a1 = [1, 2, 3, 4, 5]
const b1 = [1, 2, 3, 6, 7]
const a2 = [2, 2, 3, 4, 5]
const b2 = [1, 1, 2, 3, 4]
const a3 = [1, 1, 1, 1, 1]
const b3 = [2, 2, 2, 2, 2]

const a4 = [-8, -3, -3, -2, 0, 1, 2, 2, 6]
const b4 = [-9, -9, 0];

const mergeArray = (a, b) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] == b[j]) {
            if (result[result.length - 1] !== a[i]) {
                result.push(a[i])
            }
            i++;
            j++;
        }
        else if (a[i] < b[j]) {
            if (result[result.length - 1] !== a[i]) {
                result.push(a[i])
            }
            i++;
        } else {
            if (result[result.length - 1] !== b[j]) {
                result.push(b[j])
            }
            j++;
        }
    }

    while (i < a.length) {
        if (result[result.length - 1] !== a[i]) {
            result.push(a[i])
        }
        i++
    }

    while (j < b.length) {
        if (result[result.length - 1] !== b[j]) {
            result.push(b[j])
        }
        j++
    }

    return result;
}

console.log(mergeArray(a1, b1))
console.log(mergeArray(a2, b2))
console.log(mergeArray(a3, b3))
console.log(mergeArray(a4, b4))