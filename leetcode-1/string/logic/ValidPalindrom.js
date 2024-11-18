const s1 = "A man, a plan, a canal: Panama"
Output: true
// Example 2:
const s2 = "race a car"
Output: false

var isPalindrome = function (s) {
    debugger
    let str = '';
    for (ele of s) {
        let x =ele.toLowerCase();
        if (s.charCodeAt(x) > 96 && s.charCodeAt(x) < 123 ) {
            debugger
            str += x
        }
    }

    console.log(str)
    for (let i = 0; i < str.length; i++) {

    }
};

console.log(isPalindrome(s1))
// console.log(isPalindrome(s2))