{
  /**
   * Runtime 76 ms Beats 96.35%
   * Memory 45.6 MB Beats 28.47%
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

  const oddEvenList = (head: ListNode | null): ListNode | null => {
    if (!head) {
      return head;
    }

    const oddHead = head;
    let oddNode: ListNode | null = oddHead;
    const evenHead = oddHead.next;
    let evenNode = evenHead;

    while (oddNode && evenNode) {
      oddNode.next = evenNode.next;
      oddNode = oddNode.next ?? oddNode;
      if (oddNode) {
        evenNode.next = oddNode.next;
        evenNode = evenNode.next;
      }
    }

    if (oddNode) {
      oddNode.next = evenHead;
    }

    return head;
  };

  console.log(
    oddEvenList(
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(
              4,
              new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))
            )
          )
        )
      )
    )
  ); // 1 3 5 7 2 4 6 8
}
