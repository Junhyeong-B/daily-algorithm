/**
 * Runtime 99 ms Beats 67.27%
 * Memory 44.8 MB Beats 77.27%
 */

function reverseWords(s: string): string {
  return s
    .trim()
    .split(' ')
    .filter((str) => str)
    .reverse()
    .join(' ');
}

console.log(reverseWords('a good   example'));
