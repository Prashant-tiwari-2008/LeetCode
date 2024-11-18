console.log("Excel_Sheet_Column_title");

function convertToTile (columnNumber){
    let x = columnNumber;
    if(columnNumber < 27){
        return  getValue(columnNumber)
    }else{
        // let result = '';
        // let first = Math.floor(columnNumber/26);
        // result += getValue(first)
        // remaing = columnNumber % 26
        // result += getValue(remaing)
        // return result;
        while(x > 26){
            let result = '';
            let x = Math.floor(columnNumber/26);
            result += getValue(first)
            remaing = columnNumber % 26
            result += getValue(remaing)
            return result;
        }
    }

    function getValue(val){
        return String.fromCharCode(val+64)
    }
}




let num1 = 1;
let num2 = 28;
let num3 = 705;
// console.log(convertToTile(num1))
console.log(convertToTile(num2))
console.log(convertToTile(num3))
