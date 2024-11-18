// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote. 

// Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

// Example 2:
Input: ransomNote1 = "aa", magazine1 = "ab"
Output: false

// Example 3:
Input: ransomNote2 = "aa", magazine2 = "aab"
Output: true

// ==============>> MySolution
var canConstruct = function (ransomNote, magazine) {
    let magazineArray = magazine.split('')
    let isConstruct = false
    if (magazine.length < ransomNote.length) {
        return false
    } else {
        for (let i = 0; i < ransomNote.length; i++) {
            if (magazineArray.includes(ransomNote[i])) {
                magazineArray.splice(magazineArray.indexOf(ransomNote[i]), 1)
                isConstruct = true
            } else {
                return false
            }
        }
    }
    return isConstruct
};
console.log(canConstruct(ransomNote, magazine))
console.log(canConstruct(ransomNote1, magazine1))
console.log(canConstruct(ransomNote2, magazine2))

//=============>> Best Solution
var canConstruct1 = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const counter = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        const index = magazine.charCodeAt(i) - 97;
        counter[index] += 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const index = ransomNote.charCodeAt(i) - 97;
        counter[index] -= 1;
        if (counter[index] < 0) {
            return false;
        }
    }

    return true;
};

console.log(canConstruct1(ransomNote, magazine))
console.log(canConstruct1(ransomNote1, magazine1))
console.log(canConstruct1(ransomNote2, magazine2))