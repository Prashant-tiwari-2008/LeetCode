var lengthOfLastWord = function (str) {
    let count = 0;
    let temp = 0
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ') {
            if (temp == 1) {
                return count
            }
        } else {
            count++
            temp = 1;
        }
    }
    return count
};