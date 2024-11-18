// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted license key.

const s1 = "5F3Z-2e-9-w";
const k1 = 4
Output: "5F3Z-2E9W"

const s2 = "2-5g-3-J";
const k2 = 2;
Output: "2-5G-3J"

const s3 ="2-4A0r7-4k"
const k3 = 4;
output: "24A0-R74K"

function License_Key_Formatting(arr, val) {
    let length = 0;
    let result = '';
    let temp = 0;
  

    for (let i = arr.length -1 ; i >= 0; i--) {
        debugger
        if (temp < val && arr[i] !== '-') {
            result = arr[i].toUpperCase() + result
            temp++;
        } else if (arr[i] === '-' && temp == val) {
            temp = 0;
            result = '-' + result
        }
    }

    return result;
}

// console.log(License_Key_Formatting(s1, k1))
// console.log(License_Key_Formatting(s2, k2))
console.log(License_Key_Formatting(s3, k3))