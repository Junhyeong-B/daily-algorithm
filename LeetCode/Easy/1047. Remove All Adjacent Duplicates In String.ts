{
  /**
   * Runtime 148 ms Beats 62.7%
   * Memory 52.7 MB Beats 62.7%
   */

  const removeDuplicates = (s: string): string => {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
      if (stack.length === 0) {
        stack.push(s[i]);
      } else {
        if (stack[stack.length - 1] === s[i]) {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
      }
    }

    return stack.join('');
  };

  console.log(removeDuplicates('abbaca')); // ca
}
