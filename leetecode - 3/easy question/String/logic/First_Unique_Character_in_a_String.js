// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
Input: s = "leetcode"
Output: 0

// Example 2:
Input: s1 = "loveleetcode"
Output: 2

// Example 3:
Input: s2 = "aabb"
Output: -1

// not right solution
var firstUniqChar = function (s) {
    let hash = {};
    for(let i=0;i<s.length;i++){
        if(hash[s[i]]){
            hash[s[i]].push(i)
        }else{
            hash[s[i]] = [i]
        }
    }
    
    for(val in hash){
        if(hash[val].length === 1){
            return val
        }
    }
    
    return -1
};

console.log(firstUniqChar(s))
console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))