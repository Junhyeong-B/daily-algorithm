/**
 * Runtime: 119 ms, faster than 48.19% of TypeScript online submissions for Fizz Buzz.
 * Memory Usage: 45.6 MB, less than 20.49% of TypeScript online submissions for Fizz Buzz.
 */

function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const idx = i + 1;
    if (idx % 3 === 0 && idx % 5 === 0) {
      return 'FizzBuzz';
    } else if (idx % 3 === 0) {
      return 'Fizz';
    } else if (idx % 5 === 0) {
      return 'Buzz';
    } else {
      return '' + idx;
    }
  });
}
