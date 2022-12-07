{
  /**
   * Runtime 239 ms Beats 82.2%
   * Memory 74.3 MB Beats 93.26%
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

  const rangeSumBST = (
    root: TreeNode | null,
    low: number,
    high: number
  ): number => {
    if (!root) {
      return 0;
    }

    let sum = 0;
    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return;
      }

      if (low <= node.val && node.val <= high) {
        sum += node.val;
      }

      dfs(node.left);
      dfs(node.right);
    };

    dfs(root);
    return sum;
  };

  console.log(
    rangeSumBST(
      new TreeNode(
        10,
        new TreeNode(5, new TreeNode(3), new TreeNode(7)),
        new TreeNode(15, null, new TreeNode(18))
      ),
      7,
      15
    )
  ); // 32
}
