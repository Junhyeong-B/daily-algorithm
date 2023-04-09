/**
 * Runtime 77 ms Beats 89.42%
 * Memory 52 MB Beats 73.8%
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

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;

  const calculateSumOfNodes = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }

    const left = calculateSumOfNodes(node.left);
    const right = calculateSumOfNodes(node.right);
    const allSum = left + right + node.val;
    const leftNodesSum = left + node.val;
    const rightNodesSum = right + node.val;

    maxSum = Math.max(maxSum, node.val, allSum, leftNodesSum, rightNodesSum);

    // 각 왼쪽 자식 노드, 오른쪽 자식 노드들 중 최대 합이 되는 경우를 리턴
    // 루트 밸류가 가장 큰 경우도 있을 수 있으므로 같이 비교 (-20 <- 10 -> -15)
    return Math.max(leftNodesSum, rightNodesSum, node.val);
  };

  calculateSumOfNodes(root);

  return maxSum;
}

console.log(
  maxPathSum(
    new TreeNode(
      -10,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
); // 42
