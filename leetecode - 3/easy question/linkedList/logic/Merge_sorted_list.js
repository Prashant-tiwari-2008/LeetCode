
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//=======>>> Recursive Approach
var mergeTwoLists = function(list1, list2) {
  debugger
   if(!list1) return list2;
   if(!list2) return list1;
   if(list1.val < list2.val){
      list1.next = mergeTwoLists(list1.next,list2)
      return list1;
   }else{
       list2.next = mergeTwoLists(list1,list2.next);
       return list2;
   }
};

const l1 = [1,2,4]

const l2 = [1,3,4]
console.log(mergeTwoLists(l1,l2))