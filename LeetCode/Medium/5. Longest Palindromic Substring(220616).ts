{
  /**
   * Runtime: 138 ms, faster than 79.80% of TypeScript online submissions for Longest Palindromic Substring.
   * Memory Usage: 46.1 MB, less than 68.37% of TypeScript online submissions for Longest Palindromic Substring.
   */

  const longestPalindrome = (s: string): string => {
    let longestPalindrome = "";

    for (let i = 0; i < s.length; i++) {
      let left = i;
      let right = i;

      while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
        if (longestPalindrome.length < right - left + 1) {
          longestPalindrome = s.slice(left, right + 1);
        }
        left--;
        right++;
      }

      left = i;
      right = i + 1;
      while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
        if (longestPalindrome.length < right - left + 1) {
          longestPalindrome = s.slice(left, right + 1);
        }
        left--;
        right++;
      }
    }

    return longestPalindrome;
  };
}