{
  /**
   * Runtime: 115 ms, faster than 51.61% of TypeScript online submissions for Flatten Binary Tree to Linked List.
   * Memory Usage: 44.8 MB, less than 98.39% of TypeScript online submissions for Flatten Binary Tree to Linked List.
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

  /**
   Do not return anything, modify root in-place instead.
   */
  function flatten(root: TreeNode | null): void {
    let currentNode: TreeNode | null = null;

    const update = (node: TreeNode | null) => {
      if (!node) {
        return;
      }

      update(node.right);
      update(node.left);
      node.right = currentNode;
      node.left = null;
      currentNode = node;
    }

    update(root);
  };
}