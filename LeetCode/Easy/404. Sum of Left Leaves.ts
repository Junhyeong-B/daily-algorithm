{
  /**
   * Runtime: 99 ms, faster than 64.63% of TypeScript online submissions for Sum of Left Leaves.
   * Memory Usage: 45.8 MB, less than 7.32% of TypeScript online submissions for Sum of Left Leaves.
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

  const ROOT = 0;
  const LEFT = 1;
  const RIGHT = 2;

  function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    const queue = [[ROOT, root]];
    let sum = 0;

    const pushChildNodeInQueue = (node: TreeNode | null) => {
      if (node && node.left) {
        queue.push([LEFT, node.left]);
      }

      if (node && node.right) {
        queue.push([RIGHT, node.right])
      }
    }

    while (queue.length) {
      const [status, node] = queue.shift()! as [number, TreeNode];

      switch (status) {
        case LEFT:
          if (!node.left && !node.right) {
            sum += node.val;
          } else {
            pushChildNodeInQueue(node);
          }
          break;
        case ROOT:
        case RIGHT:
          pushChildNodeInQueue(node);
          break;

      }
    }

    return sum;
  };
}