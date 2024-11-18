console.log("Is Subsequence");

const isSubsequence = (s, t) => {
    debugger
    let slength = s.length;
    if(slength == 0) return true
    let i = 0;
    let j = 0
    let result = false;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
            result = true
        } else {
            result = false
        }
        j++;
    }
    return (i == (slength) ? true : false);
}

let s = "abc";
let t = "ahbgdcdefkg";

let p = "axc"
let q = "ahbgdc"

// let u = "acb"
// let v = "ahbgdc"

let u = "bb"
let v = "ahbgdc" 
console.log(isSubsequence(s,t))
console.log(isSubsequence(p, q))
console.log(isSubsequence(u, v))


var isSubsequence = function(s, t) {

    if(s.length === 0) return true
    sIndex = 0;

    for(let i=0; i<t.length; i++){
        if(t[i] === s[sIndex]){
            sIndex++
        }
        if(sIndex === s.length) {
            return true
        }
    }

    

    return false
    
};