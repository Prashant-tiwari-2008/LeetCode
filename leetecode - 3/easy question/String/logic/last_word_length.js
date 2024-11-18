// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal  substring consisting of non-space characters only.



// Example 1:
Input: s = "Hello World"
Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
Input: s1 = "   fly me   to   the moon  "
Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
Input: s2 = "luffy is still joyboy"
Output: 6
// Explanation: The last word is "joyboy" with length 6.

//===========>>> MY SOLUTION
function last_word_length(string) {
    let str = string.trim();
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            count++
        } else {
            return count;
        }
    }
    return count
}

function last_word_length1(string) {
    let str = string.trim();
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            count++
        } else {
            return count;
        }
    }
    return count
}

console.log(last_word_length(s))
console.log(last_word_length(s1))
console.log(last_word_length(s2))
console.log(last_word_length("a"))

//===========>>> BEST SOLUTION
var lengthOfLastWord = function (s) {
    debugger
    if (s.length === 1) return 1
    let arr = s.split(' ')
    for (let i = arr.length - 1; i >= 0; i--) {
        let char = arr[i]
        if (char === '') continue
        return char.length

    }

};

console.log(lengthOfLastWord(s))
console.log(lengthOfLastWord(s1))
console.log(lengthOfLastWord(s2))
console.log(lengthOfLastWord("a"))