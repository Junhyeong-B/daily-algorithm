/**
 * Runtime 71 ms Beats 67.72%
 * Memory 45.6 MB Beats 16.54%
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const temp = new ListNode();
  temp.next = head;
  let currentNode = temp;

  while (currentNode.next && currentNode.next.next) {
    if (currentNode.next.val === currentNode.next.next.val) {
      const duplicateValue = currentNode.next.val;

      while (currentNode.next && currentNode.next.val === duplicateValue) {
        currentNode.next = currentNode.next.next;
      }
    } else {
      currentNode = currentNode.next;
    }
  }

  return temp.next;
}

console.log(
  deleteDuplicates(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
        )
      )
    )
  )
); // [1, 2, 5]
