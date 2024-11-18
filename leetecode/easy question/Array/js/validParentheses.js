console.log("Valid Parentheses");
//My solution
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        let top = stack[stack.length -1];
        if(["(","{","["].includes(s[i])){
            stack.push(s[i])
        }else if((top === '(' && s[i] === ")") || (top === '{' && s[i] === "}") || (top === '[' && s[i] === "]") )
        {
            stack.pop()
        }else return false
    }
    return stack.length === 0
};

//Best salution
const isValid = (s) => {
    const left = [];
    const legend = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    for (let i = 0; i < s.length; i++) {
        if (["(", "{", "["].includes(s[i])) {
            left.push(s[i])
        } else if (legend[left.pop()] !== s[i]) {
            return false;
        }
    }
    return left.length ? 0 : 1;
}