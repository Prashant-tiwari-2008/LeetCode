console.log("best time to buy and sell stock");


function best_profit(prices){
    let min = prices[0];
    let max = prices[0];
    let profit = 0;
    for(let i=1; i < prices.length; i++){
        if(prices[i] < min){
            max = prices[i];
            min = prices[i]
        }else if(prices[i] > max){
            max = prices[i];
        }else if(prices[i] < max){
            profit += max - min;
            max = prices[i];
            min = prices[i];
        }
    }
    if(profit < (max-min)){
        return  profit += max - min;
    }
    return profit
}

const prices = [7,1,5,3,6,4];
const prices1 = [1,2,3,4,5];
const prices2 = [7,6,4,3,1];
const prices3 = [6,1,3,2,4,7]
const prices4 = [2,4,1];


// console.log(best_profit(prices))
// console.log(best_profit(prices1))
// console.log(best_profit(prices2))
// console.log(best_profit(prices3))  // 7
console.log(best_profit(prices4))  // 2