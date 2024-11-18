console.log("best timie to sell the stock");

function bestTimetoSellStock(num){
    let min = num[0];
    let max = num[0];
    let profit = 0;
    for(let i= 1 ; i < num.length;i++){
        if(num[i] < min){
            max = num[i];
            min = num[i]
        }else if(num[i] > max){
            max = num[i]
        }
        if(profit < (max-min)){
            profit = max-min
        }
    }
    return profit;
}


// let min = 0;
// let max = 0;
// let minIndex = 0;
// for(let i = 0; i < prices.length; i++){
//     if(min < prices[i]) min = prices[i]
// }
// minIndex = prices.indexOf

let num = [7,1,5,3,6,4];
let num1 = [7,6,4,3,1];
let num2 = [2,4,1]

console.log(bestTimetoSellStock(num))
console.log(bestTimetoSellStock(num))
console.log(bestTimetoSellStock(num2))