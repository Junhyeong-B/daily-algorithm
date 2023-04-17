/**
 * Runtime 78 ms Beats 78.13%
 * Memory 46.9 MB Beats 45%
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const stack = new Array<ListNode | null>();
  const newNode = new ListNode();
  let currentNode = newNode;

  while (head) {
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }

    if (stack.length === k) {
      while (stack.length) {
        currentNode.next = stack.pop()!;
        currentNode = currentNode.next;
      }

      currentNode.next = head;
    }
  }

  return newNode.next;
}

console.log(
  reverseKGroup(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    3
  )
); // [3, 2, 1, 4, 5]
