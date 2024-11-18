console.log("Maximum_Depth_of_Binary")

var maxDepth = function(root) {
    if(root == null) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right)

    return Math.max(leftDepth,rightDepth) + 1;
};

const firstTree = {
    val : 3,
    left : {
        val : 9,
        left : null,
        right :  null,
    },
    right : {
        val : 20,
        left : {
            val : 15,
            left : null,
            right : null
        },
        right : {
            val : 7,
            left : null,
            right : null
        }
    }
}

const secondTree = {
    val : 1,
    right : {
        val : 2,
    }
}

console.log(maxDepth(firstTree))
console.log(maxDepth(secondTree))