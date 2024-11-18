// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.


var hIndex = (citations) => {
    let sortedValue = citations.sort((a, b) => b - a);
    let highestValue = 0;
    let length = citations.length;

    for (let i = 0; i < length; i++) {
        highestValue = Math.max(highestValue, sortedValue[i] * (i + 1))
        console.log(highestValue,"highest value")
    }
    
}

const citations = [3, 0, 6, 1, 5]
const citations1 = [1, 3, 1]

console.log(hIndex(citations))
// console.log(hIndex(citations1))