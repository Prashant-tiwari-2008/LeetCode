console.log("Pascal triangle - II")


// ==========>> My
function createPascalTriangel(noOfRows) {
    let pascalTriangle = [[1],]
    for (let i = 0; i < noOfRows; i++) {
        let row = [];
        for (let j = 0; j <= (i + 1); j++) {
            if (j == 0 || j == (i+1)) {
                row[j] = 1;
            } else {
                row[j] = pascalTriangle[i][j] + pascalTriangle[i][j - 1]
            }
        }
        pascalTriangle.push(row);
    }
    return pascalTriangle[noOfRows];
}

// console.log(createPascalTriangel(3))
// console.log(createPascalTriangel(0))
// console.log(createPascalTriangel(1))


var getRow = function(r) {
    debugger
    var ans = new Array(r+1)
    ans[0]=ans[r]=1
    for(i=1,up=r;i<r;i++,up--)
        ans[i] = ans[i-1]*up/i
    return ans
};

console.log(getRow(5))
console.log(getRow(0))
console.log(getRow(1))