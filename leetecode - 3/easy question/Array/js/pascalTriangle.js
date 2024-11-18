console.log("create a pascal friangle")

function pascalTriangle(value) {
    let pascalT = [];
    let y = [];
    for (let i = 0; i < value; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i )
                y.push(1)
            else {
                let z = pascalT[i-1][j] + pascalT[i-1][j-1]
                y.push(z)
            }
        }
        pascalT.push(y)
        y = []
    }
    return pascalT
}


var generate = function(numRows) {
    let pascal = []
    for (let i = 0; i < numRows; i++){
        // create a new arr in pascal array, and add 1 as the first item
        pascal[i] = []
        pascal[i][0] = 1
    
        for (let j = 1; j < i; j++){
        // this loop will only run after the second loop of i for one time on each loop. right after -> [[1],[1,1]]
        // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        // finish the loop with adding 1 in the end for every child array
        pascal[i][i] = 1
    }   
  return pascal
};

var generate = function(numRows) {

    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let result = [[1]]
    let currentArray = []

    for(let i=0; i<numRows-1; i++) {
        let subArray = [];
        
        for(let j=0; j<currentArray.length-1; j++) {
            subArray.push(currentArray[j] + currentArray[j+1])
        }

        currentArray = subArray
        subArray.push(1)
        subArray.unshift(1)
        result.push(subArray);
        
    }

    // result.unshift([1,1])
    // result.unshift([1])
    return result;

};

console.log(pascalTriangle(5))
console.log(generate(5))