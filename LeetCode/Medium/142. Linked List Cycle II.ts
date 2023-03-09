/**
 * Runtime 70 ms Beats 97.35%
 * Memory 45.2 MB Beats 87.91%
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let nodeA = head;
  let nodeB = head;

  while (nodeA && nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next?.next as ListNode | null;

    if (nodeA == nodeB) {
      break;
    }
  }

  if (nodeB == null || nodeB?.next == null) {
    return null;
  }

  while (head != nodeA) {
    head = head?.next as ListNode | null;
    nodeA = nodeA?.next as ListNode | null;
  }

  return nodeA;
}

const listNodeA = new ListNode(3);
const listNodeB = new ListNode(2);
listNodeB.next = new ListNode(0);
listNodeB.next.next = new ListNode(-4);
listNodeB.next.next.next = listNodeB;
listNodeA.next = listNodeB;

console.log(detectCycle(listNodeA)); // listNode { val: 2, next: ... }
