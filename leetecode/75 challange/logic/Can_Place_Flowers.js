console.log("Can Place Flowers")

function placeFlowers(flowerbed, n) {
    if(n=== 0) return true;
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        n--;
        return n === 0;
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if(n > 0){
            if (i == 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
            }else if(i === (flowerbed.length-1) && flowerbed[i - 1] === 0 && flowerbed[i] === 0){
                flowerbed[i] = 1;
                n--;
            }else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
            }
        }else{
            return (n === 0)
        }
    }
    return (n === 0)
}

// let flowerbed = [1, 0, 0, 0, 1];
// let n = 2
// let flowerbed = [1,0,0,0,0,1]
// let n = 2
// let flowerbed = [0,0,1,0,1]
// let n = 1
let flowerbed = [0,0,1,0,0]
let n = 1

// let flowerbed = [0]
// let n = 1
console.log(placeFlowers(flowerbed, n));

// best
//1.
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i]==0){
            let emptyLeftPlot = (i == 0) || (flowerbed[i - 1] == 0);
            let emptyRightPlot = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);
            if(emptyLeftPlot && emptyRightPlot)
            {
                flowerbed[i]=1;
                count++;
                if(count >= n) return true;
            }
        }
    
    }

    return count >= n;
};

for ( let i = 0 ; i < flowerbed.length ; i++ ) {
    if ( flowerbed[ i ] == 0 && ( i == 0 || flowerbed[ i - 1 ] == 0 ) && ( i == flowerbed.length - 1 || flowerbed[ i + 1 ] == 0 ) ) {
        flowerbed[ i ] = 1
        n--
    }
}
return n <= 0