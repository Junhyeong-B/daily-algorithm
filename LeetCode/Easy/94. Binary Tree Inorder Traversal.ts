{
  /**
   * Runtime 100 ms Beats 56.13%
   * Memory 44.4 MB Beats 62.91%
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

  function inorderTraversal(root: TreeNode | null): number[] {
    const answer: number[] = [];
    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return;
      } else {
        dfs(node.left);
        answer.push(node.val);
        dfs(node.right);
      }
    };

    dfs(root);
    return answer;
  }

  const node = new TreeNode(
    0,
    new TreeNode(
      1,
      new TreeNode(3, new TreeNode(7), new TreeNode(8)),
      new TreeNode(4, new TreeNode(9), new TreeNode(10))
    ),
    new TreeNode(2, new TreeNode(5, new TreeNode(11)), new TreeNode(6))
  );

  console.log(inorderTraversal(node)); // [7, 3, 8, 1, 9, 4, 10, 0, 11, 5, 2, 6]
}
