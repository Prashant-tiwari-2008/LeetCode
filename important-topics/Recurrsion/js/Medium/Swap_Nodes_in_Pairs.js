// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// wrong solution
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    let cn = head;
    head = head.next;
    head.next = cn;
    return head.next.next = swapPairs(head.next.next)
};

// chatgpt_solution
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let current = head;
    head = head.next;
    current.next = swapPairs(head.next);
    head.next = current;

    return head;
};
