// **
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
    }
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    while (current) {
      const temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.next = next || null;
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
