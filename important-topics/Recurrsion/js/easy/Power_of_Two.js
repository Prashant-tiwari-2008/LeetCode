// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

let n = 1;
let n1 = 16;
let n2 = 19;

var isPowerOfTwo = function (n) {
    if (n === 1) return true;
    if (n < 1) return false
    return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(n))
console.log(isPowerOfTwo(n1))
console.log(isPowerOfTwo(n2))