/**
 * Runtime 82 ms Beats 85.71%
 * Memory 44.6 MB Beats 80.95%
 */

function isUgly(n: number): boolean {
  if (n === 0) return false;

  let num = n;

  while (true) {
    if (num === 1) return true;

    if (num % 2 === 0) {
      num /= 2;
      continue;
    } else if (num % 3 === 0) {
      num /= 3;
      continue;
    } else if (num % 5 === 0) {
      num /= 5;
      continue;
    }

    return false;
  }
}

console.log(isUgly(14)); // false
