/**
 * Runtime 224 ms Beats 53.16%
 * Memory 52.3 MB Beats 47.47%
 */
function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    const divided = n / 3;

    if (divided !== Math.floor(divided)) {
      return false;
    }

    n = divided;
  }

  return true;
}

console.log(isPowerOfThree(27)); // true
