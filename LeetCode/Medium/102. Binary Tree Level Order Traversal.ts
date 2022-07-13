{
  /**
   * Runtime: 114 ms, faster than 44.65% of TypeScript online submissions for Binary Tree Level Order Traversal.
   * Memory Usage: 48.3 MB, less than 5.26% of TypeScript online submissions for Binary Tree Level Order Traversal.
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

  function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
      return [];
    }

    const queue: [number, TreeNode][] = [[0, root]];
    const levelNode: number[][] = [];

    while (queue.length) {
      const [index, node] = queue.shift()!;
      levelNode.push([index, node.val]);

      if (node.left) {
        queue.push([index + 1, node.left]);
      }

      if (node.right) {
        queue.push([index + 1, node.right]);
      }
    }

    const organizedLevelNode = levelNode.reduce((acc, cur) => {
      const [key, value] = cur;
      const prevValues = acc[key] || [];
      return {
        ...acc,
        [key]: [...prevValues, value],
      }
    }, {});

    return Object.values(organizedLevelNode);
  };
}