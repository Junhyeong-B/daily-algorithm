/**
 * Runtime 80 ms Beats 50%
 * Memory 45.1 MB Beats 66.67%
 */

function diffWaysToCompute(expression: string): number[] {
  const results: number[] = [];
  if (
    !(
      expression.includes('+') ||
      expression.includes('-') ||
      expression.includes('*')
    )
  ) {
    results.push(+expression);
    return results;
  }

  const sign = ['+', '-', '*'];

  for (let i = 0; i < expression.length; i++) {
    const currentExp = expression[i];
    if (sign.includes(currentExp)) {
      const leftExp = diffWaysToCompute(expression.substring(0, i));
      const rightExp = diffWaysToCompute(expression.substring(i + 1));

      for (const leftNum of leftExp) {
        for (const rightNum of rightExp) {
          switch (currentExp) {
            case '+':
              results.push(leftNum + rightNum);
              break;
            case '-':
              results.push(leftNum - rightNum);
              break;
            case '*':
              results.push(leftNum * rightNum);
              break;
          }
        }
      }
    }
  }

  return results;
}

console.log(diffWaysToCompute('2*3-4*5')); // [ -34, -10, -14, -10, 10 ]
