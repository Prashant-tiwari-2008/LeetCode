console.log('set_Matrix_Zeros');
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

let matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]] //[[1,0,1],[0,0,0],[1,0,1]]
let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]; //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeros(matrix) {
    let zeroPosition = []
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroPosition.push({ row: i, col: j })
            }
        }
    }

    for (let ele of zeroPosition) {
        let row = ele.row;
        let col = ele.col;
        for (let x = 0; x < matrix[row].length; x++) {
            matrix[row][x] = 0;
        }
        for (let y = 0; y < length; y++) {
            matrix[y][col] = 0;
        }
    }
    return matrix;
}

// console.table(setZeros(matrix1));
console.table(setZeros(matrix2));