// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
const s = "abab"
Output: true
// Example 2:
const s1 = "aba"
Output: false
//Example 3:
const s2 = "abcabcabcabc"
Output: true
const s3 = "ababab"
Output: true

function Repeated_Substring_Pattern(string) {

    if (string.length % 2 !== 0) return false
    let temp = ''
    let result = ''
    let char = '';
    for (let i = 0; i < string.length; i++) {
        char += string[i]
        if (!temp.includes(char)){
            temp
        }
    }
}

// console.log(Repeated_Substring_Pattern(s))
// console.log(Repeated_Substring_Pattern(s1))
// console.log(Repeated_Substring_Pattern(s2))
console.log(Repeated_Substring_Pattern(s3))