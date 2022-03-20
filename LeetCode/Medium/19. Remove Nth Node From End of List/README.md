```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

{
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
  }

  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let currentNode = head;
    if (n === 1 && currentNode) {
      while (currentNode && currentNode.next && currentNode.next.next) {
        currentNode = currentNode.next;
      }
      if (currentNode.next) {
        currentNode.next = currentNode.next.next;
      } else {
        return null;
      }
      return head;
    }

    let size = 0;
    while (currentNode && (currentNode.val === 0 || currentNode.val)) {
      size++;
      currentNode = currentNode.next;
    }
    if (size <= 1) {
      return null;
    }

    if (size - n - 1 < 0 && head) {
      head = head.next;
      return head;
    }

    let prevNode = head;
    for (let i = 0; i < size - n - 1; i++) {
      if (prevNode) {
        prevNode = prevNode.next;
      }
    }

    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next
    }

    return head;
  };
}```