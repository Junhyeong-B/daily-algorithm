{
  /*
    Runtime: 236 ms, faster than 37.43% of TypeScript online submissions for Palindrome Linked List.
    Memory Usage: 85.4 MB, less than 31.44% of TypeScript online submissions for Palindrome Linked List.

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

  const isPalindrome = (head: ListNode | null): boolean => {
    const stack: number[] = [];
    let currentNode = head;

    while (currentNode) {
      stack.push(currentNode.val);
      currentNode = currentNode.next;
    }

    let left = 0;
    let right = stack.length - 1;

    while (left < right) {
      if (stack[left] === stack[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }

    return true;
  };
}