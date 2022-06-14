{
  /**
   * Runtime: 124 ms, faster than 28.74% of TypeScript online submissions for Remove Duplicates from Sorted List.
   * Memory Usage: 44.9 MB, less than 77.25% of TypeScript online submissions for Remove Duplicates from Sorted List. 
   */

  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
  }

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
      return null;
    }

    let currentNode = head;

    while (currentNode.next) {
      if (currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next;
        continue;
      }

      if (!currentNode.next) {
        break;
      }
      currentNode = currentNode.next;
    }

    return head;
  };

  const listnode = new ListNode(1, new ListNode(1, new ListNode(1)))
  const listnode2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))
  console.log(deleteDuplicates(listnode))
}