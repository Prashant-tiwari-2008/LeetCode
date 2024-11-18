let candies = [2,3,5,1,3]
let extraCandies = 3

var kidsWithCandies = function(candies, extraCandies) {
    let greatest = 0;
    let result = [];
    for(let candie of candies){
        if(greatest < candie){
            greatest = candie
        }
    }
    for(let candie of candies){
        result.push((candie + extraCandies) >= greatest ? true : false )
    }
    return result;
};


// best solution
var kidsWithCandies = function (candies, extraCandies) {
    return candies.map((ele) => ele + extraCandies >= Math.max(...candies));
};

//2.
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies) - extraCandies
    return candies.map(x => x >= max)
  }