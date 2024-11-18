console.log("find the index of first occurence");

var strStr = function (haystack, needle) {
    //==========>> My solution
    // let j = 0;
    // let isMatched = false
    // let index = 0;
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack[i] === needle[j]) {
    //         j++;
    //         isMatched = true;
    //         if (j === needle.length - 1) {
    //             return isMatched
    //         }
    //     } else {
    //         j = 0;
    //         isMatched = false;
    //         index = 0;
    //     }
    // }
    // return isMatched ? index : -1;


    if (needle.length == 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            k++, j++;
        }
        if (j == needle.length) return i;
    }
    return -1; 
};
const haystack = "sadbutsad"
const needle = "sad"

console.log(strStr(haystack, needle))