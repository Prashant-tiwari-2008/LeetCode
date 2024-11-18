const s = "Hello, my name is John"
// Output: 5
const s1 = "Hello"
// Output: 1
const s2 = ", , , ,        a, eaefa"
//output: 6
const s3 = "               ";
//output : 0
const s4 = "";

//======>> MY solution is best 99.74% 😗😎
function countSegmets(s) {
    let x = s.split(' ');
    let count = 0;
    for (ele of x) {
        if (ele !== ' ' && ele!== '') {
            count++
        }
    }
    return count;
}

console.log(countSegmets(s))
console.log(countSegmets(s1))
console.log(countSegmets(s2))
console.log(countSegmets(s3))
console.log(countSegmets(s4))