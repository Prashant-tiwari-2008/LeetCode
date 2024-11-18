console.log("Maximum Count of Positive Integer and Negative Integer")
let nums = [-2, -1, -1, 1, 2, 3]
let nums1 = [-3, -2, -1, 0, 0, 1, 2]
let nums2 = [5, 20, 66, 1314]

// with Math.sign
function countNumber(num) {
    let negcount = 0;
    let poscount = 0;
    num.forEach(element => {
        if (Math.sign(element) == -1) {
            negcount++;
        } else if (Math.sign(element) == +1) {
            poscount++;
        }
    });
    count = (negcount > poscount ? negcount : poscount)
    return count;
}

// with Math.sign
function countNumber1(num) {
    let negcount = 0;
    let poscount = 0;
    num.forEach(element => {
        if (element < 0) {
            negcount++;
        }
        if (element > 0) {
            poscount++;
        }
    });
    count = (negcount > poscount ? negcount : poscount)
    return count;
}




// console.log(countNumber(nums)) // 3
// console.log(countNumber(nums1)) //3
// console.log(countNumber(nums2)) // 4

console.log(countNumber1(nums)) // 3
console.log(countNumber1(nums1)) //3
console.log(countNumber1(nums2)) // 4