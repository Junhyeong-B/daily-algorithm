{
  /**
   * Runtime 143 ms Beats 9.68%
   * Memory 48.3 MB Beats 5.35%
   */

  /**
   * Definition for a binary tree node.
   */
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const maxDepth = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    let maxDepth = 1;
    const queue: [TreeNode | null, number][] = [[root, 1]];

    while (queue.length) {
      const [currentNode, depth] = queue.shift()!;
      maxDepth = Math.max(maxDepth, depth);
      if (!currentNode) {
        continue;
      }

      if (currentNode.right) {
        queue.push([currentNode.right, depth + 1]);
      }

      if (currentNode.left) {
        queue.push([currentNode.left, depth + 1]);
      }
    }

    return maxDepth;
  };

  console.log(
    maxDepth(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      )
    )
  ); // 3
}
