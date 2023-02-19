/**
 * Runtime 63 ms Beats 96.34%
 * Memory 45 MB Beats 65.16%
 */

function longestPalindrome(s: string): number {
  const 글자수 = s.split('').reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});
  const 짝수개글자수: number[] = [];
  const 홀수개글자수: number[] = [];

  for (const count of Object.values(글자수)) {
    if (count % 2 === 0) {
      짝수개글자수.push(count);
    } else {
      홀수개글자수.push(count - 1);
    }
  }

  const 짝수글자수 = 짝수개글자수.reduce((acc, cur) => acc + cur, 0);
  const 홀수글자수 =
    홀수개글자수.length === 0
      ? 0
      : 홀수개글자수.reduce((acc, cur) => acc + cur, 0) + 1;

  return 짝수글자수 + 홀수글자수;
}

console.log(longestPalindrome('abccccdd')); // 7
