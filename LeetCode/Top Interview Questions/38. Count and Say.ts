{
  /**
   * Runtime: 213 ms, faster than 7.27% of TypeScript online submissions for Count and Say.
   * Memory Usage: 49.9 MB, less than 5.45% of TypeScript online submissions for Count and Say.
   */

  const read = (word: string) => {
    return word
      .split('')
      .reduce((acc: string[], cur: string, index) => {
        if (index === 0) {
          return [cur];
        } else if (acc[acc.length - 1][0] === cur) {
          acc[acc.length - 1] += cur;
          return acc;
        } else {
          return [...acc, cur];
        }
      }, [])
      .map((value) => `${value.length}${value[0]}`)
      .join('');
  };

  function countAndSay(n: number): string {
    if (n <= 1) {
      return '1';
    } else {
      return read(countAndSay(n - 1));
    }
  }

  console.log(countAndSay(4)); // 1211
}
