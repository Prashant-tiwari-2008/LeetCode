// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let input  = [1,2,3,6,4,5,6]
let val = 6;

var removeElements = function (head, val) {
    if (!head) return head
    head.next = removeElements(head.next, val)
    return head.val == val ? head.next : head;
};