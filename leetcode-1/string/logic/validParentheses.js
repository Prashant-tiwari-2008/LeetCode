const s1 = "()"
Output: true
// Example 2:
const s2 = "()[]{}"
Output: true
// Example 3:
const s3 = "(]"
Output: false

function isValidParentheses(str) {
    let hash = {
        '(': ')', '{': '}', '[': ']'
    };
    if (str % 2 === 1) return false;
    if (str[0] === ')' || str[0] === '}' || str[0] === ']') return false
    if (str[str.length - 1] === '(' || str[str.length - 1] === '{' || str[str.length - 1] === '[') return false
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            stack.push(str[i])
        }else if(hash[stack.pop()] !== str[i]){
            return false
        }
    }
    return stack.length === 0
}

console.log(isValidParentheses(s1))
console.log(isValidParentheses(s2))
console.log(isValidParentheses(s3))

