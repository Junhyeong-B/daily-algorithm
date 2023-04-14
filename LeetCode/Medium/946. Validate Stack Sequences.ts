/**
 * Runtime 78 ms Beats 42.86%
 * Memory 44.9 MB Beats 85.71%
 */
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = [];

  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
