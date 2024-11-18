console.log("Sorted Array to Binary Search Tree");

function createNode(val) {
    return {
        val: val,
        left: null,
        right: null
    }
}

var sortedArrayToBST = function (nums) {    
    let rootNode = createNode(nums[Math.floor(nums.length/2)])
    let currentNode = rootNode;
    
    
}






let nums = [-10, -3, 0, 5, 9]
let nums1 = [1, 3];

console.log(sortedArrayToBST(nums))
// console.log(sortedArrayToBST(nums1))