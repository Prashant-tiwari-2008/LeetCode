// You are given 2 numbers n and m, the task is to find n√m (nth root of m). If the root is not integer then returns -1.

var nthRoot = (n, m) => {
    let low = 0;
    let high = m;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let power = Math.pow(mid, n);
        if (power === m) {
            return mid
        } else if (power < m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


let n1 = 2;
let m1 = 9;
let n2 = 3;
let m2 = 9;
let n3 = 1;
let m3 = 14

console.log(nthRoot(n1, m1))
console.log(nthRoot(n2, m2))
console.log(nthRoot(n3, m3))