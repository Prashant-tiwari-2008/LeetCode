console.log("You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.")

const prices = [7, 1, 5, 3, 6, 4] //5
const prices1 = [7, 6, 4, 3, 1] // 0

function Sell_Stock(arr) {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while(right < arr.length){
        if(arr[left] < arr[right]){
            let profit=arr[right]-arr[left]

            max_profit = Math.max(max_profit,profit)
        }else{
            left = right;
        }
        right ++;
    }
    return max_profit
}

console.log(Sell_Stock(prices))
console.log(Sell_Stock(prices1))