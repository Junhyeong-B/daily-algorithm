{
  /**
   * Runtime: 77 ms, faster than 64.71% of TypeScript online submissions for Increasing Order Search Tree.
   * Memory Usage: 44.7 MB, less than 70.59% of TypeScript online submissions for Increasing Order Search Tree.
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

  function increasingBST(root: TreeNode | null): TreeNode | null {
    const queue = [root];
    const nodeArray: number[] = [];

    while (queue.length) {
      const currentNode = queue.shift() as TreeNode;
      nodeArray.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    nodeArray.sort((a, b) => b - a);

    const increasingTree = new TreeNode(nodeArray.pop());
    let currentNode = increasingTree;

    while (nodeArray.length) {
      currentNode.right = new TreeNode(nodeArray.pop());
      currentNode = currentNode.right;
    }

    return increasingTree;
  };
}