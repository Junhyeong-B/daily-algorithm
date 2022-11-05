/**
 * Runtime 97 ms Beats 72.22%
 * Memory 45.2 MB Beats 33.33%
 */

/**
 * Factorial 숫자를 구할 때 5 단위로 뒤에 0이 붙는다.
 * 1! = 1 | 2! = 2 | 3! = 6 | 4! = 24 | 5! = 120
 * 6! = 720 | 7! = 5040 | 8! = 40320 | 9! = 362880 | 10! = 3628800
 *
 * 단, 25에서는 0이 2개 증가한다.(25 = 5 * 5)
 * 마찬가지로 125는 0이 3개, 625는 4개 증가한다.
 * 이 특성을 이용해서 factorial 값을 계산하지 않고 0의 개수를 구한다.
 */
function trailingZeroes(n: number): number {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

console.log(trailingZeroes(25));
