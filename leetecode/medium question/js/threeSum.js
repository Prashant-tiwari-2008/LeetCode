function threeSum(array) {
    let result = [];
    let i = 0;
    let j = 1;
    let k = 2;
    while (i < array.length) {
        debugger
        if(array[i] + array[j] + array[k] == 0){
            result.push([array[i],array[j],array[k]])
        }
        if(k == (array.length-1) && j == (array.length-1)){
            i++;
            j = i+1;
            k = j+1;
        }else if(k == (array.length-1) && j < array.length){
            if(j === (array.length-1)){
                j++;
                k = 
            }
            j++;
            k = j+1
        }else{
            k++;
        }
    }
    return result;
}

let array = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(array))