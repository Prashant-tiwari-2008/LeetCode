// 1. Print the Matrix
function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

// 2. Print Matrix in Spiral Order
function spiralOrder(matrix) {
    let result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }
    return result;
}

// 3. Transpose of a Matrix
function transposeMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    return result;
}

// 4. Rotate Matrix 90 Degrees
function rotateMatrix(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let row of matrix) {
        row.reverse();
    }
    return matrix;
}

// 5. Search in a Row-Wise and Column-Wise Sorted Matrix
function searchMatrix(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }
    return false;
}

// 6. Find the Maximum Element in a Matrix
function maxInMatrix(matrix) {
    let max = -Infinity;
    for (let row of matrix) {
        for (let num of row) {
            max = Math.max(max, num);
        }
    }
    return max;
}

// 7. Print Diagonals of a Matrix
function printDiagonals(matrix) {
    let mainDiagonal = [];
    let antiDiagonal = [];
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal.push(matrix[i][i]);
        antiDiagonal.push(matrix[i][matrix.length - i - 1]);
    }
    return { mainDiagonal, antiDiagonal };
}

// 8. Count Zeros in a Matrix
function countZeros(matrix) {
    let count = 0;
    for (let row of matrix) {
        for (let num of row) {
            if (num === 0) count++;
        }
    }
    return count;
}

// 9. Boundary Elements of a Matrix
function printBoundary(matrix) {
    let result = [];
    let rows = matrix.length, cols = matrix[0].length;

    for (let i = 0; i < cols; i++) result.push(matrix[0][i]);
    for (let i = 1; i < rows; i++) result.push(matrix[i][cols - 1]);
    if (rows > 1) {
        for (let i = cols - 2; i >= 0; i--) result.push(matrix[rows - 1][i]);
    }
    if (cols > 1) {
        for (let i = rows - 2; i > 0; i--) result.push(matrix[i][0]);
    }
    return result;
}

// 10. Row with Maximum Sum
function rowWithMaxSum(matrix) {
    let maxSum = -Infinity, rowIndex = -1;
    for (let i = 0; i < matrix.length; i++) {
        let sum = matrix[i].reduce((a, b) => a + b, 0);
        if (sum > maxSum) {
            maxSum = sum;
            rowIndex = i;
        }
    }
    return { rowIndex, maxSum };
}

// 11. Check if Matrix is Symmetric
function isSymmetric(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[j][i]) return false;
        }
    }
    return true;
}

// 12. Sum of All Elements in a Matrix
function sumOfMatrix(matrix) {
    let sum = 0;
    for (let row of matrix) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}

// 13. Set Matrix Zeros
function setZeroes(matrix) {
    let rows = new Set(), cols = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for (let i of rows) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let j of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

// 14. Matrix Multiplication
function multiplyMatrices(A, B) {
    let result = new Array(A.length).fill(0).map(() => new Array(B[0].length).fill(0));

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}
