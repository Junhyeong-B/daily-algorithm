{
  /**
   * Runtime 84 ms Beats 77.43%
   * Memory 45.1 MB Beats 5.90%
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

  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
      return true;
    }

    if ((p === null && q !== null) || (p !== null && q === null)) {
      return false;
    }

    let answer = true;
    const dfs = (pNode: TreeNode | null, qNode: TreeNode | null) => {
      if (!pNode || !qNode || !answer) {
        return;
      } else {
        if (
          pNode.val !== qNode.val ||
          (pNode.left && pNode.left.val) !== (qNode.left && qNode.left.val) ||
          (pNode.right && pNode.right.val) !== (qNode.right && qNode.right.val)
        ) {
          answer = false;
          return;
        } else {
          dfs(pNode.left, qNode.left);
          dfs(pNode.right, qNode.right);
        }
      }
    };

    dfs(p, q);

    return answer;
  }

  var a = new TreeNode(
    0,
    new TreeNode(
      1,
      new TreeNode(3, new TreeNode(7), new TreeNode(8)),
      new TreeNode(4, new TreeNode(9), new TreeNode(10))
    ),
    new TreeNode(2, new TreeNode(5, new TreeNode(11)), new TreeNode(6))
  );

  var b = new TreeNode(
    0,
    new TreeNode(
      1,
      new TreeNode(3, new TreeNode(7), new TreeNode(8)),
      new TreeNode(4, new TreeNode(9), new TreeNode(10))
    ),
    new TreeNode(2, new TreeNode(5, new TreeNode(11)), new TreeNode(6))
  );

  console.log(isSameTree(a, b)); // true
}
