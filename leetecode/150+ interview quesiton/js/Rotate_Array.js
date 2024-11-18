console.log("Rotate Array");

// solution is right but for large array will take too much time
function rotateArray(nums,k){
    for(let i=0; i < k;i++){
        nums.unshift(nums.pop())
    }
    return [...nums];
}

function rotateArray1(nums,k){
    let length = nums.length;
    if(length < 2) return nums;
    let temp = [];
    for(let i=0; i < k;i++){
        temp.unshift(nums.pop())
    }
    temp = [...temp,...nums]
    for(let i=0; i < length;i++){
        nums[i] = temp[i] 
    }
    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    return nums;
}


const num = [1,2,3,4,5,6,7]
const k = 3;

const num1 =[-1,-100,3,99];
const k1= 2

const num2= [1,2];
const k2 =3;
// console.log(rotateArray1(num,k))
// console.log(rotateArray1(num1,k1))
// console.log(rotateArray1(num2,k2))

console.log(rotate(num,k))
console.log(rotate(num1,k1))
console.log(rotate(num2,k2))