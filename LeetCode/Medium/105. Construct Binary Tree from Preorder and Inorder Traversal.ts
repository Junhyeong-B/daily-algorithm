{
  /*
    Runtime 147 ms Beats 71.60%
    Memory 45.6 MB Beats 93.49%
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

  function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) {
      return null;
    }

    if (preorder.length === 1) {
      return new TreeNode(preorder[0]);
    }

    const dfs = (
      preIndex1: number,
      preIndex2: number,
      inIndex1: number,
      inIndex2: number
    ) => {
      if (preIndex1 > preIndex2 || inIndex1 > inIndex2) {
        return null;
      }

      const value = preorder[preIndex1];
      const index = inorder.indexOf(value);
      const nLeft = index - inIndex1;
      const root = new TreeNode(value);

      root.left = dfs(preIndex1 + 1, preIndex1 + nLeft, inIndex1, index - 1);
      root.right = dfs(preIndex1 + nLeft + 1, preIndex2, index + 1, inIndex2);

      return root;
    };

    return dfs(0, preorder.length - 1, 0, inorder.length - 1);
  }

  console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
  /*
    TreeNode { val: 3,
      left: TreeNode { val: 9, left: null, right: null },
      right:  TreeNode { val: 20,
        left: TreeNode { val: 15, left: null, right: null },
        right: TreeNode { val: 7, left: null, right: null }}}
  */

  /*
    preorder: 1 2 4 5 3 6
    inorder: 4 2 5 1 3 6

    이런 형태로 들어온다면, preorder 첫 번째 요소가 root value가 되고, inorder에서 root value를 기준으로 left, right 가 나뉜다.

    inorder에서 index를 구하면 각 preorder, inorder에서 left, right를 표시하면 다음과 같다.

    preorder: 1 (2 4 5) [3 6]
    inorder: (4 2 5) 1 [3 6]

    여기서 2 4 5 | 4 2 5 로 들어오면 또 똑같이
    preorder: 2 (4) [5]
    inorder: (4) 2 [5]
    로 left, right를 분리할 수 있다. 이걸 dfs로 반복해서 TreeNode를 구성할 수 있다.
   */
}
