{
  /**
   * Runtime 83 ms Beats 87.58%
   * Memory 45.7 MB Beats 13.94%
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

  const isSymmetric = (root: TreeNode | null): boolean => {
    if (!root) {
      return false;
    }

    let flag = true;
    const dfs = (left: TreeNode | null, right: TreeNode | null) => {
      if (!flag) {
        return;
      }

      if ((!left && right) || (left && !right)) {
        flag = false;
        return;
      }

      if (!left || !right) {
        return;
      }

      if (left.val !== right.val) {
        flag = false;
        return;
      }

      dfs(left.left, right.right);
      dfs(left.right, right.left);
    };

    dfs(root.left, root.right);

    return flag;
  };

  console.log(
    isSymmetric(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3))
      )
    )
  );
}
