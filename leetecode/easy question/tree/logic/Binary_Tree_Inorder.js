/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {

    //==============>>>>  Recurrsion
    // let result = [];
    // function inorder(root){
    //     if (!root) {
    //         return;
    //     }
    //     result.push(root.val);
    //     if (root.left) {
    //         inorder(root.left);
    //     } else if (root.right) {
    //         inorder(root.right)
    //     }
    // }
    // inorder(root);
    // return result;

    //==============>>>> Iteration
     let result =[];
     let stack = [];
     debugger
     while(root || stack.length){
        if(root){
            stack.push(root);
            root = root.left
        }else{
            root = stack.pop();
            result.pop(root.val);
            root = root.right;
        }
     }
     return result;
};




let firstTree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null,
    }
}

console.log(inorderTraversal(firstTree));