{
  function lengthOfLongestSubstring(s: string): number {
    const checkStr = new Set();
    let answer = -Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      if (checkStr.has(s[right])) {
        while (s[left] !== s[right]) {
          checkStr.delete(s[left]);
          left++;
        }
        left++;
      } else {
        checkStr.add(s[right]);
      }
      answer = Math.max(answer, right - left + 1);
    }

    return answer === -Infinity ? 0 : answer;
  };
}