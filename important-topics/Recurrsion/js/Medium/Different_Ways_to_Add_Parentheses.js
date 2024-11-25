// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

var diffWaysToCompute = function (expression) {
    const memo = new Map();
    debugger

    const compute = (expr) => {
        // if the result is already computed, return from cache
        if (memo.has(expr)) return memo.get(expr);
        let result = [];

        //Traverse the expression
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];

            // if it's an operator, split the expression
            if (char === '+' || char === "-" || char === "*") {
                const leftPart = expr.substring(0, i);
                const rightPart = expr.substring(i + 1);

                // recursivelery compute left and right parts
                const LeftResult = compute(leftPart)
                const rightResult = compute(rightPart)

                // combine result the based on the operator 
                for (const left of LeftResult) {
                    for (const right of rightResult) {
                        if (char === '+') {
                            result.push(left + right)
                        } else if (char === '-') {
                            result.push(left - right);
                        } else if (char === '*') {
                            result.push(left * right)
                        }
                    }
                }
            }
        }

        // base case : if no opertor, the expression is a number
        if (result.length === 0) {
            result.push(parseInt(expr, 10));
        }

        //store the result in the cache
        memo.set(expr, result);
        return result

    }
    return compute(expression);
};

let expression = "2-1-1" // [0,2];
let expression1 = "2*3-4*5" // [-34,-14,-10,-10,10]

console.log(diffWaysToCompute(expression));