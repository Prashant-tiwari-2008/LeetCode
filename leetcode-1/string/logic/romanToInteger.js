console.log("roman to integer")

function getIntergerFromRoman(number) {
    let result = 0;
    const constant = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    for (let i = 0; i < number.length; i++) {
        if (constant[number[i]] < constant[number[i + 1]]) {
            result -= constant[number[i]]
        } else {
            result += constant[number[i]]
        }
    }
    return result;
}

console.log(getIntergerFromRoman("III"))
console.log(getIntergerFromRoman("IX"))