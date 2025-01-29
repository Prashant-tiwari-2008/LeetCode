// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

function minEatingSpeed(piles,) {

    // helper function to check if koko can eat all banana
    const canFinish = (piles, k, h) => {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k)
        }
        return hours <= h;
    }

    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if(canFinish(piles,mid,h)){
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    return low;
}