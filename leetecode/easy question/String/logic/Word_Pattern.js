// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
Input: pattern1 = "abba", s1 = "dog cat cat dog"
Output: true

// Example 2:
Input: pattern2 = "abba", s2 = "dog cat cat fish"
Output: false

// Example 3:
Input: pattern3 = "aaaa", s3 = "dog cat cat dog"
Output: false

function wordPattern(pattern, s) {
    debugger
    let x=s.split(' ')
    if (pattern.length !== x.length ) return false
    else {
        for (let i = 0; i < pattern.length; i++) {
            let pfirst = pattern[i]
            let strfirst = x[i]
            for (let j = 0; j < pattern.length; j++) {
                if(pattern.indexOf(pfirst) !== x.indexOf(strfirst)){
                    return false
                }
            }
        }
    }
    return true
}

console.log(wordPattern(pattern1, s1))
console.log(wordPattern(pattern2, s2))
console.log(wordPattern(pattern3, s3))