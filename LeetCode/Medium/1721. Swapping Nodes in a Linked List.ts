/*
  Runtime: 543 ms, faster than 64.10% of TypeScript online submissions for Swapping Nodes in a Linked List.
  Memory Usage: 102.4 MB, less than 66.67% of TypeScript online submissions for Swapping Nodes in a Linked List.
 */

/**
  Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    length += 1;
    currentNode = currentNode.next;
  }

  let currBegin = head;
  let beginCount = 1;

  while (currBegin && beginCount !== k) {
    beginCount += 1;
    currBegin = currBegin.next;
  }

  let currAfter = head;
  let afterCount = 1;

  while (currAfter && afterCount !== (length - k + 1)) {
    afterCount += 1;
    currAfter = currAfter.next;
  }

  if (currBegin && currAfter) {
    [currBegin.val, currAfter.val] = [currAfter.val, currBegin.val];
  }

  return head;
};