// My Solution
Array.prototype.last = function() {
    if(this.length == 0){
        return -1
    } else{
        return this[this.length-1]
    }
};

// Best Solution
Array.prototype.last = function() {
    if(this.length <= 0 ) return -1;
    return this.at(-1);
};
