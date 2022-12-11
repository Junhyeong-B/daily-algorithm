{
  /**
   * Runtime 127 ms Beats 43.46%
   * Memory 47.3 MB Beats 23.46%
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

  const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
    if (!root) {
      return false;
    }

    let flag = false;
    const dfs = (node: TreeNode | null, sum: number) => {
      if (flag || !node) {
        return;
      }

      if (!node.left && !node.right && sum + node.val === targetSum) {
        flag = true;
        return;
      }

      dfs(node.left, sum + node.val);
      dfs(node.right, sum + node.val);
    };

    dfs(root, 0);

    return flag;
  };

  console.log(
    hasPathSum(
      new TreeNode(
        5,
        new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
        new TreeNode(
          8,
          new TreeNode(13),
          new TreeNode(4, null, new TreeNode(1))
        )
      ),
      22
    )
  ); // true

  console.log(hasPathSum(new TreeNode(-2, null, new TreeNode(-3)), -5)); // true
}
