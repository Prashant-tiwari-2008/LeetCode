console.log("SYMMETRIC TREE")


// first solution ==> Not working
var isSymmetric = function (root) {
    let isSymmetricTree = true
    if (root.left.val === root.right.val) {
        isSameNode(root.left, root.right)
    } else {
        return isSymmetricTree = false;
    }

    function isSameNode(FirstNode, SecondNode) {
        
        if (FirstNode.left.val === SecondNode.right.val) {
            if (FirstNode.left && SecondNode.right) {
                isSameNode(FirstNode.left, SecondNode.right)
            }
        } else {
            return isSymmetricTree = false
        }

        if (FirstNode.right.val === SecondNode.left.val) {
            if (FirstNode.right && SecondNode.left) {
                isSameNode(FirstNode.right, SecondNode.left)
            }
        } else {
            return isSymmetricTree = false;
        }

    }

    return isSymmetricTree;
};


var isSymmetric1 = function(root){
    if(!root) return true;
    
    return isSame(root.left,root.right)

    function isSame(leftNode,rightNode){
        if((!leftNode && rightNode) || (leftNode && !rightNode) || (leftNode && rightNode && leftNode.val !== rightNode.val)) return false;

        if(leftNode && rightNode){
           return isSame(leftNode.left, rightNode.right) && isSame(leftNode.right, rightNode.left)
        }
        return true;
    }

}


let firstTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null,
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

let seconTree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null,

        }
    }

}

console.log(isSymmetric1(firstTree))
console.log(isSymmetric1(seconTree))