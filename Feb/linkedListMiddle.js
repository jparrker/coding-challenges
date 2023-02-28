//leetCode 876

// Given the head of a linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

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

//nodes. head and a tail
// nodes can contain a pointer to next node.

//singly list
//value and a pointer

//doubly -> pointer to next and pointer to previous node.

//value and pointer
//point is next
//head will point to next node
//tail has no next, so it is null

//1->2->3->4->5
//3 is middle. return 3.

const middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
