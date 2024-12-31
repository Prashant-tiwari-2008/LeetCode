// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

let intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; //[[1,6],[8,10],[15,18]]
let intervals2 = [[1, 4], [4, 5]] //  [[1,5]]


var merge = (intervals) => {
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i + 1]) {
            if (intervals[i + 1][0] <= intervals[i][1]) {
                result.push([intervals[i][0], intervals[i + 1][1]])
                i++;
            } else {
                result.push(intervals[i])
            }
        }else{
            result.push(intervals[i])
        }
    }
    return result;
}

console.log(merge(intervals1))
console.log(merge(intervals2))