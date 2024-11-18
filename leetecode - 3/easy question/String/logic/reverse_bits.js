console.log("Reverse Bits")

function reverseBits(bnumber){
    debugger
    let output = 0
    for(let i= 0 ;i < bnumber.length;i++){
        output += bnumber[(bnumber.length - 1 - i)] * Math.pow(2,i)
    }
    return output
}

console.log(reverseBits(00111001011110000010100101000000))