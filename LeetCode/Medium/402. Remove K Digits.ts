/**
 * Runtime: 81 ms, faster than 100.00% of TypeScript online submissions for Remove K Digits.
 * Memory Usage: 49.6 MB, less than 46.67% of TypeScript online submissions for Remove K Digits.
 */

function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];
  let removed = 0;

  for (const currentNumber of num) {
    while (stack.length && removed < k && currentNumber < stack[stack.length - 1]) {
      stack.pop();
      removed++;
    }

    stack.push(currentNumber);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("") || "0";
};
