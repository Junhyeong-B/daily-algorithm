```tsx
{
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

  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
  }

  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list: ListNode | null = new ListNode();
    let currentNode = list;
    while (list1 && (list1.val === 0 || list1.val) || list2 && (list2.val === 0 || list2.val)) {
      if (!list1 && !list2) {
        break;
      }

      if (!list2 || list1 && list1.val < list2.val) {
        if (list1) {
          currentNode.next = new ListNode(list1.val);
          currentNode = currentNode.next;
          if (list1.next) {
            list1 = list1.next;
          } else {
            list1 = null;
          }
        }
      } else if (!list1 || list2 && list1.val >= list2.val) {
        if (list2) {
          currentNode.next = new ListNode(list2.val);
          currentNode = currentNode.next;
          if (list2.next) {
            list2 = list2.next;
          } else {
            list2 = null;
          }
        }
      }
    }

    list = list.next;

    return list;
  };
}```