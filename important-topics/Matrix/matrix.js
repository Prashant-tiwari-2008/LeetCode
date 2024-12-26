console.log("Matrix");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// row-wise traversal
function rowTraversal() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j])
        }
    }
}

// rowTraversal();

// coloum-wise traversal
function coloumTraversal() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[j][i])
        }
    }
}

// coloumTraversal();

// Basic question
// 1.Problem: Given a matrix, print its elements row by row. => alreday solved


// 2.Problem: Print Matrix in Spiral Order
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//  Output: 1 2 3 6 9 8 7 4 5

function sqiralOrder(matrix) {
    let result = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i])
        top++;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right])
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) result.push(matrix[bottom][i])
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left])
            left++;
        }
    }
    return result;
}

// console.log(sqiralOrder(matrix1))

// 3. Problem: Transpose the given matrix (swap rows and columns).
function transposeMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i])
        }
        result.push(row)
    }
    return result;
}

// console.log(transposeMatrix(matrix1))

//4. Problem: Rotate the matrix 90 degrees clockwise in place.
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//[
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]

function rotate(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
    return matrix
}

console.log("90d rotation", rotate(matrix2))

// 5. Search in a Row-Wise and Column-Wise Sorted Matrix
let target = 5;
function searchMat(matrix, tar) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if(matrix[row][col] === tar) return true;
        if(matrix[row][col] > tar) col--;
        else row++
    }
    return false
}

console.log("searcing",searchMat(matrix1, target))

// 6. Find the Maximum Element in a Matrix
// 7. Print Diagonals of a Matrix
// 8. Count Zeros in a Matrix

// 9. Boundary Elements of a Matrix => Print only the boundary elements of the matrix.
// need to do
function printBoundary(matrix){

}

console.log(printBoundary(matrix1));

// 10. Row with Maximum Sum
// 11. Check if Matrix is Symmetric
