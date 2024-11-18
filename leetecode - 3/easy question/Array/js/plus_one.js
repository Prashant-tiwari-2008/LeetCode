// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.



// Example 1:
Input: digits1 = [1, 2, 3]
Output: [1, 2, 4]

// Example1 2:
Input: digits2 = [4, 3, 2, 1]
Output: [4, 3, 2, 2]

// Example 3:
Input: digits3 = [9]
Output: [1, 0]

function plus_One(arr) {
    let y = []
    for (let i = 0; i < arr.length; i++) {
      
    }
    return y;
}

// console.log(plus_One(digits1))
// console.log(plus_One(digits2))
// console.log(plus_One(digits3))

// ===========>>> SOlution from net
let plusOne = function(digits) {
  debugger
    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i]>9){
            digits[i]=0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

// ==========>>> Best solution
var plusOne1 = function(digits) {
    if (digits.length === 1) {
      if (digits[0] === 9) {
        return [1, 0];
      } else {
        return [digits[0] + 1]
      }
    }
    const res = [];
    let acc = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const curr = digits[i];
        if (acc && curr === 9) {
            res.unshift(0);
            acc = 1;
        } else {
            res.unshift(acc ? curr + 1 : curr);
            acc = 0;
        }
    }
  
    if (res[0] === 0) {
      res.unshift(1);
    }
  
    return res;
  };


// console.log(plusOne(digits1))
// console.log(plusOne(digits2))
// console.log(plusOne(digits3))
console.log(plusOne([1,9,9]))