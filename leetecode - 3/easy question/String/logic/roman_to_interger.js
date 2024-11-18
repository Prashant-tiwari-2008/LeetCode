// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M..

// Example 1:
const s1 = "IV"
const s = "VI"
// Output: 3

// Example 2:
const s2 = "LVIII"
// Output: 58

// Example 3:
const s3 = "MCMXCIV"
// Output: 1994

//==========>> My Solution
const roman_to_integer = (romanNumber) => {
    const constant = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    let result = 0;
    for (let i = 0; i < romanNumber.length; i++) {
        const curent = constant[romanNumber[i]]
        const next = constant[romanNumber[i + 1]]

        if (curent < next) {
            result += next - curent
            i++
        } else {
            result += curent
        }
    }
    return result;
}

console.log(roman_to_integer(s))
console.log(roman_to_integer(s1))
console.log(roman_to_integer(s2))
console.log(roman_to_integer(s3))

//===========>> Best Solution
var romanToInt = function (s) {
    const map = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < map[s[i + 1]]) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};