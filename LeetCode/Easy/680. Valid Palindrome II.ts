/*
  Runtime: 124 ms, faster than 66.86% of TypeScript online submissions for Valid Palindrome II.
  Memory Usage: 60.4 MB, less than 19.53% of TypeScript online submissions for Valid Palindrome II.
*/

const reverse = (str: string) => {
  return str.split("").reverse().join("");
}

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return s.slice(left, right) === reverse(s.slice(left, right)) || s.slice(left + 1, right + 1) === reverse(s.slice(left + 1, right + 1));
    }
    left += 1;
    right -= 1;
  }

  return true;
};
