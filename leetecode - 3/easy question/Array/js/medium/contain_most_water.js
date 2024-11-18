
//with two loop
function containMostWater(arr){
    let length = arr.length-1
    let max = 0;
    for(let i=0; i< arr.length;i++){
        for(let j=length;j > i;j--){
            let temp = Math.min(arr[i],arr[j]) * (j - i)
            if(temp > max){
                max = temp;
            }
        }
    }
    return max;
}


//with two pointer
function containMostWater_with_twoPointer(arr){
    let left = 0;
    let right = (arr.length - 1);
    let result = 0;
    while( left < right){
        let temp = Math.min(arr[left],arr[right]) * (right - left)
        if(temp > result){
            result = temp;
        }
        if(arr[left] < arr[right]){
            left++;
        }else{
            right--;
        }
    }
    return result;
}

let height = [1,8,6,2,5,4,8,3,7]
let height1 = [1,1]


console.log(containMostWater(height))
console.log(containMostWater(height1))
console.log(containMostWater_with_twoPointer(height))
console.log(containMostWater_with_twoPointer(height1))