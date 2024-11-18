// Given the head of a singly linked list, reverse the list, and return the reversed list.

let head = [1, 2, 3, 4, 5]
//output = [5,4,3,2,1]

let head1 = [1, 2]
//[2,1]

let head2 = [];
// []



// chat_gpt
var reverseList_chat_gpt = (head) => {
    // Base case: if the list is empty or has reached the end
    if (head === null || head.next === null) {
        return head;
    }

    // Recursively reverse the rest of the list
    const newHead = reverseList(head.next);

    // Reversing the pointers: set head.next.next to head
    head.next.next = head;
    head.next = null; // Set the original next pointer to null

    // Return the new head of the reversed list
    return newHead;
}
