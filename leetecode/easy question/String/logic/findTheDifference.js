// Input: s = "abcd", t = "abcde"
// Input: s = "", t = "y"
// ==================>MY Solution
var findTheDifference = function (s, t) {
    let sourceObj = {}
    let targetObj = {}
    for (char of t) {
        targetObj[char] = (targetObj[char] || 0) + 1;
    }

    for (char of s) {
        sourceObj[char] = (sourceObj[char] || 0) + 1;
    }

    for (char in targetObj) {
        if (sourceObj[char] !== targetObj[char]) {
            return char
        }
    }
};

// ======>> My Solution =====>> 80ms - 45%
var findTheDifference = function (s, t) {
    let sum1 = 0
    let sum2 = 0
    for (char of t) {
        sum1 = sum1 + char.charCodeAt()
    }

    for (char of s) {
       sum2 = sum2 + char.charCodeAt()
    }
    return String.fromCharCode(sum1-sum2)
};

console.log(findTheDifference(s, t))

// ==================>Best Solution
//  ====>  43ms -- 99%
var findTheDifference = function (s, t) {
    const sum1 = s.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    const sum2 = t.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    return String.fromCharCode(sum2 - sum1);
};