// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


let list1 = [1,2,4];
let list2 = [1,3,4];
// outPut => [1,1,2,3,4,4];

var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;

   if(list1.val < list2.val){
    list1.next = mergeTwoLists(list1.next,list2);
    return list1;
   }else{
    list2.next = mergeTwoLists(list1,list2.next)
    return list2;
   }
};

console.log(mergeTwoLists(list1,list2));