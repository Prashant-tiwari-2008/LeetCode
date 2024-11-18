console.log("valid Anagram")

// Example 1:
Input: s1 = "anagram", t1 = "nagaram"
Output: true

// Example 2:
Input: s2 = "rat", t2 = "car"
Output: false

// ====>> MY SOLUTION
function checkAnagram(s, t) {
    let hash = {}
    for (ele of s) {
        hash[ele] = (hash[ele] || 0) + 1;
    }
    for (char of t) {
        if (hash[char]) hash[char]--
        else {
            return false
        }
    }

    for (ele in hash) {
        if (hash[ele] !== 0) {
            return false
        } else {
            return true
        }
    }
    return true
}
console.log(checkAnagram(s1, t1))
console.log(checkAnagram(s2, t2))

//=========>> best solution
function checkAnagram1(s, t) {
    if (s.length !== t.length) return false
    let letterS = {}
    let letterT = {}

    for (char of s) {
        letterS[char] = (letterS[char] || 0) + 1
    }

    for (char of t) {
        letterT[char] = (letterT[char] || 0) + 1
    }

    for (key in letterS) {
        if (letterS[key] !== letterT[key]) return false
    }
    return true
}

console.log(checkAnagram1(s1, t1))
console.log(checkAnagram1(s2, t2))
