// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var isPalindrom = function (head) {
    if(head == null || head.next == null) return head;


}

let head = [1,2,2,1] // true
let head1 = [1,2] // false


//   // Base case: if the list is empty or has reached the end
//   if (head === null || head.next === null) {
//     return head;
// }

// // Recursively reverse the rest of the list
// const newHead = reverseList(head.next);

// // Reversing the pointers: set head.next.next to head
// head.next.next = head;
// head.next = null; // Set the original next pointer to null

// // Return the new head of the reversed list
// return newHead;