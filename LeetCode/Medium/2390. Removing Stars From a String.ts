/**
 * Runtime 113 ms Beats 50%
 * Memory 53.3 MB Beats 88.89%
 */
function removeStars(s: string): string {
  const stack: string[] = [];

  for (const str of s.split('')) {
    if (str === '*') {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.join('');
}

console.log(removeStars('leet**cod*e')); // lecoe
