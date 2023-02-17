{
  /**
   * Runtime 70 ms Beats 76.47%
   * Memory 44.3 MB Beats 94.12%
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

  function minDiffInBST(root: TreeNode | null): number {
    const nums: number[] = [];

    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return;
      } else {
        nums.push(node.val);
        dfs(node.left);
        dfs(node.right);
      }
    };

    dfs(root);
    nums.sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
      min = Math.min(min, Math.abs(nums[i] - nums[i + 1]));
    }

    return min;
  }

  console.log(
    minDiffInBST(
      new TreeNode(
        27,
        null,
        new TreeNode(
          34,
          null,
          new TreeNode(58, new TreeNode(50), new TreeNode(44))
        )
      )
    )
  ); // 6
}
