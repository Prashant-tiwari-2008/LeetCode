// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

// Example 2:
Input: s1 = ["H", "a", "n", "n", "a", "h"]
Output: ["h", "a", "n", "n", "a", "H"]

var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let tempOne = s[i];
        let temptwo = s[s.length - (i + 1)];
        s[i] = temptwo;
        s[s.length - (i + 1)] = tempOne
    }
    return s
};
// console.log(reverseString(s))
// console.log(reverseString(s1))

// ============>>>> Best Solution
var reverseString1 = function (s) {
    s.unshift(...s.splice(0).reverse())
    return s;
};

// ============>>>> Best Solution
var reverseString = function(s) {
    let h = []
    for(i=s.length-1;i>=0;i--){
       h.push(s[i])
       s.pop(i)
       
    }
    s.push(...h)
};


console.log(reverseString1(s))
console.log(reverseString1(s1))