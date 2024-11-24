// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry = 0) {
    if (!l1 && !l2 && carry === 0) {
        return null;
    }

    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    const newNode = new ListNode(sum % 10);

    let next1 = l1 ? l1.next : null;
    let next2 = l2 ? l2.next : null;
    // const newCarry = sum > 9 ? 1 : 0;
    const newCarry = (sum / 10);

    newNode.next = addTwoNumbers(next1, next2, newCarry);;
    return newNode;
};