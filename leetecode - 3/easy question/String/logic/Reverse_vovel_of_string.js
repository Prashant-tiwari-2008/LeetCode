// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

console.log("reverse vovel of sting")
// Example 1:
Input: s = "hello"
Output: "holle"
// Example 2:
Input: s1 = "leetcode"
Output: "leotcede"

const Reverse_vowel_of_string = (word) => {
    let output = '';
    let length = word.length - 1;
    for (let i = 0; i < word.length; i++) {
        if (word[length - i] == 'a' || word[length - i] == 'e' || word[length - i] == 'i' || word[length - i] == 'o' || word[length - i] == 'u') {
            output += word[length - i]
        }else{
            output += word[i]
        }
    }
    return output
}

console.log(Reverse_vowel_of_string(s1))
// console.log(Reverse_vowel_of_string(s1))