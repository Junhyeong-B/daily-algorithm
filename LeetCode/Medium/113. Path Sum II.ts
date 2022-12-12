{
  /**
   * Runtime 146 ms Beats 39.19%
   * Memory 61.5 MB Beats 12.16%
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

  const pathSum = (root: TreeNode | null, targetSum: number): number[][] => {
    if (!root) {
      return [];
    }

    const paths: number[][] = [];
    const dfs = (node: TreeNode | null, sum: number, path: number[]) => {
      if (!node) {
        return;
      }

      if (!node.left && !node.right && sum + node.val === targetSum) {
        paths.push([...path, node.val]);
        return;
      }

      dfs(node.left, sum + node.val, [...path, node.val]);
      dfs(node.right, sum + node.val, [...path, node.val]);
    };

    dfs(root, 0, []);

    return paths;
  };

  console.log(
    pathSum(
      new TreeNode(
        5,
        new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
        new TreeNode(
          8,
          new TreeNode(13),
          new TreeNode(4, new TreeNode(5), new TreeNode(1))
        )
      ),
      22
    )
  ); // [[5, 4, 11, 2], [5, 8, 4, 5]]
}
