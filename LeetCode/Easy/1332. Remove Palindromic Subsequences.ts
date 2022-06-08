function removePalindromeSub(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return 2;
    }
  }

  return 1;
};
