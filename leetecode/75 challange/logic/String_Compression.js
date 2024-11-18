console.log("String Compression")

// modify the input array inplace of craeting new one
const stringCompression = (nums) => {
    let count  = 1;
    let temp;
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            count++
            nums.unshift();
        }else{
            if(count == 1){
                result.push(nums[i])
            }else if(count > 9){
                let digits = count.toString().split("");
                result.push(nums[i])
                result.push(...digits);
            }else{
                result.push(nums[i])
                result.push(count.toString());
            }
            count = 1
        }
    }
    nums = [...result];
    return nums


}

const str1 = ["a","a","b","b","c","c","c"];
const str2 = ["a"];
const str3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log(stringCompression(str1))
console.log(stringCompression(str2))
console.log(stringCompression(str3))
// console.log(stringCompression(str))