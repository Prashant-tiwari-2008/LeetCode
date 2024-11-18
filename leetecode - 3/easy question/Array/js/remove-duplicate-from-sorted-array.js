console.log("remove-duplicate-from-sorted-array")

//Solution first and seconde will return new array so not right solution
function removeDuplicate(num1) {
    let x = []
    num1.map((ele) => {
        if (!x.includes(ele)) {
            x.push(ele)
        }
    })
    return x;
}

function removeDuplicate1(num1) {
    let x = num1.reduce((acc, cv) => {
        if (!acc.includes(cv)) {
            acc.push(cv)
        }
        return acc
    }, [])
    return x;
}

const removeDuplicates2 = function (nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
};


const a = [1, 1, 2, 2, 2, 3, 4]
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(removeDuplicate(a))
// console.log(removeDuplicate(nums))

// console.log(removeDuplicate1(a))
// console.log(removeDuplicate1(nums))

removeDuplicates2(a)
removeDuplicates2(nums)


console.log(a)
console.log(nums)