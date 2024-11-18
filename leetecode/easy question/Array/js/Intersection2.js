const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]

const nums3 = [4, 9, 5]
const nums4 = [9, 4, 9, 8, 4]

//==========>> My Solution
function Intersection(arrayOne, arraytwo) {
    let objOne = {}
    let objTwo = {}
    let result = []
    for (let num of arrayOne) {
        objOne[num] =  (objOne[num] || 0 ) +1
    }

    for (let num of arraytwo) {
        objTwo[num] =  (objTwo[num] || 0 ) +1
    }

    for (num in objOne) {
        if (objTwo[num]) {
            debugger
            // result.push(num)
            let x =[...new Array(objOne[num]).fill(num)]
            result.push(...x)
        }
    }
    return result;
}

console.log(Intersection(nums1, nums2))
console.log(Intersection(nums3, nums4))
