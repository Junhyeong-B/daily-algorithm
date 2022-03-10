{
  /*
    Runtime: 8549 ms, faster than 6.25% of TypeScript online submissions for Shortest Palindrome.
    Memory Usage: 46.5 MB, less than 18.75% of TypeScript online submissions for Shortest Palindrome.
    다음에 다시 풀어보자
  */
  const shortestPalindrome = (s: string): string => {
    if (!s) {
      return "";
    }
    const n = s.length;
    let logestPalindrome = "";

    for (let i = 0; i < n; i++) {
      let left = i;
      let right = i;

      while (left >= 0 || right < n) {
        if (s[left] === s[right]) {
          if (left === 0 && logestPalindrome.length < right - left + 1) {
            logestPalindrome = s.slice(left, right + 1);
          }
          left--;
          right++;
        } else {
          break;
        }
      }

      left = i;
      right = i + 1;
      while (left >= 0 || right < n) {
        if (s[left] === s[right]) {
          if (left === 0 && logestPalindrome.length < right - left + 1) {
            logestPalindrome = s.slice(left, right + 1);
          }
          left--;
          right++;
        } else {
          break;
        }
      }
    }

    const leftString = s.replace(logestPalindrome, "");

    return leftString.split("").reverse().join("") + logestPalindrome + leftString;
  };
}