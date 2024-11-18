const s = "abccccdd"; //7
const s1 = "a" //1
const s2 ="bananas" //5

function findTheLongestPalindrom(word) {
    let hash = {}
    let result = 0
    for (let char of word) {
        hash[char] = (hash[char] || 0) + 1
        if(hash[char] %2 === 0) result += 2
    }
    return word.length > result  ? result + 1 : result    
}
console.log(findTheLongestPalindrom(s))
console.log(findTheLongestPalindrom(s1))
console.log(findTheLongestPalindrom(s2))