function romanToInteger(rnumber) {
    console.log(rnumber,"roman number")
    let dic = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let num = 0;
    for (let i = (rnumber.length - 1); i >= 0; i--) {
        debugger
        let cur = dic[rnumber[i]];
        let prev = dic[rnumber[i - 1]];
        console.log("Current", cur)
        console.log("Previous", prev)
        if (i != 0 && prev < cur) {
            num -= prev;
            i--
        }
        num += cur;
        console.log("num", num)
    }
    return num
}


// romanToInteger("LVIII");
romanToInteger('MMMCML')