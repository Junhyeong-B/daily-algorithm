{
  /**
   * Runtime 124 ms Beats 26.32%
   * Memory 45.8 MB Beats 5.26%
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

  const getLeafValues = (node: TreeNode) => {
    const leafs: number[] = [];

    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return;
      }

      if (!node.left && !node.right) {
        leafs.push(node.val);
        return;
      }

      dfs(node.left);
      dfs(node.right);
    };

    dfs(node);

    return leafs;
  };

  const leafSimilar = (
    root1: TreeNode | null,
    root2: TreeNode | null
  ): boolean => {
    if (!root1 || !root2) {
      return false;
    }

    const leaf1 = getLeafValues(root1);
    const leaf2 = getLeafValues(root2);
    console.log(leaf1, leaf2);

    if (leaf1.length !== leaf2.length) {
      return false;
    }

    for (let i = 0; i < leaf1.length; i++) {
      if (leaf1[i] !== leaf2[i]) {
        return false;
      }
    }

    return true;
  };

  console.log(
    leafSimilar(
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6),
          new TreeNode(2, new TreeNode(7), new TreeNode(4))
        ),
        new TreeNode(1, new TreeNode(9), new TreeNode(8))
      ),
      new TreeNode(
        3,
        new TreeNode(5, new TreeNode(6), new TreeNode(7)),
        new TreeNode(
          1,
          new TreeNode(4),
          new TreeNode(2, new TreeNode(9), new TreeNode(8))
        )
      )
    )
  ); // true
}
