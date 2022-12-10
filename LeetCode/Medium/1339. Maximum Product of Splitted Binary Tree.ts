{
  /**
   * Runtime 241 ms Beats 66.67%
   * Memory 86.2 MB Beats 33.33%
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

  const getSum = (node: TreeNode | null): [number, number[]] => {
    const sumList: number[] = [];

    const dfs = (node: TreeNode | null) => {
      if (!node) {
        return 0;
      }
      const leftSum = dfs(node.left);
      const rightSum = dfs(node.right);
      const sum = leftSum + rightSum + node.val;
      sumList.push(sum);
      return sum;
    };

    const sum = dfs(node);

    return [sum, sumList];
  };

  const maxProduct = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }

    let max = 0;
    const MOD = 10 ** 9 + 7;

    const [totalSum, sumList] = getSum(root);

    for (const sum1 of sumList) {
      const sum2 = totalSum - sum1;
      max = Math.max(max, sum1 * sum2);
    }

    return max % MOD;
  };

  console.log(
    maxProduct(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6))
      )
    )
  );
}
