// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

let intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; //[[1,6],[8,10],[15,18]]
let intervals2 = [[1, 4], [4, 5]] //  [[1,5]]


var merge = (intervals) => {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (result.length == 0 || result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i])
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
        }
    }
    return result;
}

console.log(merge(intervals1))
console.log(merge(intervals2))