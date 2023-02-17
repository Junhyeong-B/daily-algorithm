/**
 * Runtime 148 ms Beats 22.73%
 * Memory 47 MB Beats 13.64%
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

const insertionSortArray = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];

      for (let j = i; j >= 0; j--) {
        if (j === 0) {
          break;
        }

        if (nums[j] < nums[j - 1]) {
          [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
        }
      }
    }
  }

  return nums;
};

function insertionSortList(head: ListNode | null): ListNode | null {
  const values: number[] = [];
  let currentNode = head;

  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

  const sortedValues = insertionSortArray(values);
  const sortedNode = new ListNode(sortedValues[0]);
  let currentNewNode = sortedNode;

  for (let i = 1; i < sortedValues.length; i++) {
    currentNewNode.next = new ListNode(sortedValues[i]);
    currentNewNode = currentNewNode.next;
  }

  return sortedNode;
}

console.log(
  insertionSortList(
    new ListNode(
      -1,
      new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
    )
  )
); // [-1, 0, 3, 4, 5]
