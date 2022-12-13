{
  /**
   * Runtime 168 ms Beats 42.59%
   * Memory 51.5 MB Beats 38.89%
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

  const pathSum = (root: TreeNode | null, targetSum: number): number => {
    if (!root) {
      return 0;
    }

    let count = 0;

    const checkIsValidTree = (node: TreeNode | null, sum: number) => {
      if (!node) {
        return;
      }

      if (sum === node.val) {
        count++;
      }

      checkIsValidTree(node.left, sum - node.val);
      checkIsValidTree(node.right, sum - node.val);
    };

    const dfs = (node: TreeNode | null, sum: number) => {
      if (!node) {
        return;
      }

      checkIsValidTree(node, sum);
      dfs(node.left, sum);
      dfs(node.right, sum);
    };

    dfs(root, targetSum);

    return count;
  };

  console.log(
    pathSum(
      new TreeNode(
        10,
        new TreeNode(
          5,
          new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
          new TreeNode(2, null, new TreeNode(1))
        ),
        new TreeNode(-3, null, new TreeNode(11))
      ),
      8
    )
  ); // 3
}
