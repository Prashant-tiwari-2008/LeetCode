console.log("sliding window");

var containsNearbyDuplicate = function (nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            if (Math.abs(i - hash[nums[hash[nums[i]].length]]) <= k) {
                return true;
            }
            hash[nums[i]].push(i);
        } else {
            hash[nums[i]] = [i];
        }
    }
    console.log(hash)
    return false
};


let nums = [1, 0, 1, 1]
let k = 1;
console.log(containsNearbyDuplicate(nums, k))

// internet solution
var containsNearbyDuplicate1 = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // Check if the difference betweend duplicates is less than k
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

var containsNearbyDuplicate2 = function(nums, k) {
    let map = new Map()
    let j = 0
    for(let i = 0; i<nums.length; i++){
     if (i - j > k){
         map.delete(nums[j])
         j++
     }
     if (map.has(nums[i])){
         return true
     }
     map.set(nums[i])
    }
    return false
 };

 let nums1 = [1, 0, 1, 1]
let k1 = 1;
console.log(containsNearbyDuplicate2(nums1, k1))