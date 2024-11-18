/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    debugger
    let isSame = false;
    if(!p && !q){
        return true;
    }
    function matchTree(p,q){
        if(!p || !q){
            return false;
        }
        if(p.left && q.left){
            if(p.left.val == q.left.val){
            isSame = true;
            p = p.left;
            q = q.left;
            matchTree(p,q)
            }else{
            return isSame = false;   
            }
        }
        if(p.right && q.right){
            
            if(p.right.val == q.right.val){
                isSame = true;
                p = p.right
                q = q.right
                matchTree(p,q)
            }else{
                return isSame = false;
            }
        }if(p.val == q.val){
            return true;
        }
    }    
    matchTree(p,q)
    return isSame;
};

var isSameTree1 = function(p, q) {
    return JSON.stringify(p)===JSON.stringify(q)
};


let firstNode = {
    val : 1,
    left : {
        val :  2,
        left : null,
        right : null,
    },
    right : {
        val : 3,
        left :null,
        right:null,
    }
}

let SecondNode = {
    val : 1,
    left : {
        val :  2,
        left : null,
        right : null,
    },
    right : {
        val : 3,
        left : null,
        right : null,
    }
}

let ThirdNode = {
    val : 1,
    left : {
        val :  2,
        left : null,
        right : null,
    },
    right : {
        val : 1,
        left : null,
        right : null,
    }
}

let FourthNode = {
    val : 1,
    left : {
        val :  1,
        left : null,
        right : null,
    },
    right : {
        val : 2,
        left : null,
        right : null,
    }
}

let FiveNode = {val :1,
                left : undefined,
                right :2
                }
let SixNode = {val:1,left : null,right : 2}
console.log(isSameTree1(firstNode,SecondNode))
console.log(isSameTree1(ThirdNode,FourthNode))
console.log(isSameTree1(FiveNode,SixNode))


// 
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(p&&!q || q&&!p) return false;
    if(p.val != q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};