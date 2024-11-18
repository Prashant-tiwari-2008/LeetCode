console.log("isPalindrom testing");

function isPalindrom(number){
    debugger
    let y = number.toString();
    let z =  y.length; 
    let x = z/2;
    let i = 0;
    while(i < x) {
        if(y[i++] !== y[z - i]){
            return false
        }
    }
    return true;

}

console.log(isPalindrom(122))
console.log(isPalindrom(121))