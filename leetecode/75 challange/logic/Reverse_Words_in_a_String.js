console.log("Reverse words of a string")

function reverseWords(s) {
    s = s.trim();
    s = s.split(" ");
    let result = [];
    let whiteSpaceCount = 0;
    for (let i = (s.length - 1); i >= 0; i--){
        if(s[i] === ' ' && whiteSpaceCount == 0){
            result.push(s[i])
            whiteSpaceCount++;
        }else if(s[i] !== ''){
            result.push(s[i])
            whiteSpaceCount == 0;
        }
    }
    return result.join(' ');
}

// let str = "the     sky      is      blue"
let str = "a good   example"
console.log(reverseWords(str))

//best solution
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(" ").reverse().filter(word => word.length != 0).join(" ")
};