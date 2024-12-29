// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

let numRows = 5; // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
let numRows1 = 1; // [[1]]

var generate = function (numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 && j == i) {
                result[i][j] = 1
            } else {
                result[i][j] = result[i-1][j] + result[i-1][j-1]
            }
        }
        result.push(temp)
    }
}

console.log(generate(numRows))
console.log(generate(numRows1))