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

  function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const list1: number[] = [];
    const list2: number[] = [];

    while ((l1 && (l1.val || l1.val === 0)) || (l2 && (l2.val || l2.val === 0))) {
      if (l1) {
        list1.push(l1.val);
      }
      if (l2) {
        list2.push(l2.val);
      }

      if (l1 && !l1.next && l2 && !l2.next) {
        break;
      }

      if (l1 && l1.next) {
        l1 = l1.next;
      } else {
        l1 = new ListNode();
      }
      if (l2 && l2.next) {
        l2 = l2.next;
      } else {
        l2 = new ListNode();
      }
    }

    const answerNumList = Array.from({ length: list1.length }, () => 0);
    for (let i = 0; i < list1.length; i++) {
      const sum = +list1[i] + +list2[i];
      answerNumList[i] += sum;
      if (answerNumList[i] > 9) {
        answerNumList[i] = answerNumList[i] % 10;

        if (i === list1.length - 1) {
          answerNumList.push(1);
        } else {
          answerNumList[i + 1] += 1;
        }
      }
    }

    let node = new ListNode(answerNumList[answerNumList.length - 1]);
    for (let i = answerNumList.length - 2; i >= 0; i--) {
      const newNode = new ListNode(answerNumList[i]);
      newNode.next = node;
      node = newNode;
    }

    return node;
  };
}```