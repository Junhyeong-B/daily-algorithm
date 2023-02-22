{
  /**
   * Runtime 64 ms Beats 82.76%
   * Memory 45.2 MB Beats 10.3%
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

  function swapPairs(head: ListNode | null): ListNode | null {
    const nodeValues: number[] = [];
    const resultNode = new ListNode();
    let currentNode = resultNode;

    while (head) {
      nodeValues.push(head.val);
      head = head.next;
    }

    const len =
      nodeValues.length % 2 === 0 ? nodeValues.length : nodeValues.length - 1;
    for (let i = 0; i < len; i++) {
      if (i % 2 === 0) {
        currentNode.next = new ListNode(nodeValues[i + 1]);
      } else {
        currentNode.next = new ListNode(nodeValues[i - 1]);
      }

      currentNode = currentNode.next;
    }

    if (nodeValues.length % 2 === 1) {
      currentNode.next = new ListNode(nodeValues[nodeValues.length - 1]);
      currentNode = currentNode.next;
    }

    return resultNode.next;
  }

  console.log(
    swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))))
  ); // [2, 1, 4, 3]

  console.log(swapPairs(new ListNode(1))); // [1]
}