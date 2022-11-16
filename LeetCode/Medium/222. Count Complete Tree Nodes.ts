{
  /**
   * Runtime 193 ms Beats 60.46%
   * Memory 70.4 MB Beats 81.40%
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

  function countNodes(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return 0;
      }

      return dfs(node.left) + dfs(node.right) + 1;
    };

    return dfs(root);
  }

  const node = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, null, null),
      new TreeNode(5, null, new TreeNode(5, null, null))
    ),
    new TreeNode(3, new TreeNode(6, null, null), null)
  );

  console.log(countNodes(node)); // 7
}
