console.log("Pivot index")
function PivotIndex(nums) {
    let leftTotal = 0
    let rightTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {     
            if (j < i) {
                leftTotal += nums[j];
            } else if(j>i) {
                rightTotal += nums[j]
            }
        }
        if (leftTotal === rightTotal) {
           return i;
        }
        leftTotal =0;
        rightTotal =0
    }
    return -1;
}

const q=PivotIndex([1, 7, 3, 6, 5, 6])
const p =PivotIndex([2,1,-1])
console.log(q)
console.log(p)