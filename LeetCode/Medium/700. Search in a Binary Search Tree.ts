{
  /*
    Runtime: 90 ms, faster than 79.02% of TypeScript online submissions for Search in a Binary Search Tree.
    Memory Usage: 50 MB, less than 49.65% of TypeScript online submissions for Search in a Binary Search Tree.
  */

  /**
   * Definition for a binary tree node.
   */
  class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
    }
  }

  class QueueNode<T> {
    value: T;
    next: QueueNode<T> | null;
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  class CustomQueue<T> {
    head: QueueNode<T> | null;
    tail: QueueNode<T> | null;
    size: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    enqueue(value: T) {
      const newNode = new QueueNode(value);
      if (this.head === null || this.tail === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size += 1;
    }

    dequeue() {
      if (this.size === 0 || this.head === null) {
        return null;
      }

      const removedNode = this.head;
      this.head = this.head.next;
      this.size -= 1;

      return removedNode.value;
    }
  }

  function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
      return null;
    }

    const queue = new CustomQueue();
    queue.enqueue(root);

    while (queue.size) {
      let currentNode = queue.dequeue() as TreeNode | null;

      if (currentNode === null) {
        continue;
      }

      if (currentNode.val === val) {
        return currentNode;
      }

      queue.enqueue(currentNode.left);
      queue.enqueue(currentNode.right);
    }

    return null;
  };
}