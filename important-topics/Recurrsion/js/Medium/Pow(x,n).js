// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// not optimise solution
var myPow = (x, n) => {
    if (n == 0) return 1;
    if (n == 1) return x;

    let result = x * myPow(x, n > 0 ? (n - 1) : (n + 1))
    return result;
}

let x = 2;
let n = -3;
console.log(myPow(x, n));

// optimise solution

//chat gpt
var myPow = (x, n) => {
    // Base case
    if (n === 0) return 1;

    // Handle negative power by inverting x and making n positive
    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    // Recursive case: divide and conquer
    const half = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half; // Even power
    } else {
        return half * half * x; // Odd power
    }
}