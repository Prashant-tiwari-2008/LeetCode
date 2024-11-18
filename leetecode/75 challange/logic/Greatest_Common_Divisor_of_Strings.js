console.log("Greatest Common Divisor of Strings");

// Euclidean algorithm
function commonPrefix(str1, str2) {
    let result = ''
    let i = 0;
    let j = 0;
    while( i < str1.length){
        if(str1[i] === str2[j]){
            result += str2[j]
            i++;
            j++; 
        }else{
            i++;
        }
    }
    return result;
}

// let str1 = "ABCABC";
// let str2 = "ABC"
// let str1 = "ABABAB"
// let str2 = "ABAB"
let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
// let str1 = "LEET";
// let str2 = "CODE"
console.log(commonPrefix(str1, str2))