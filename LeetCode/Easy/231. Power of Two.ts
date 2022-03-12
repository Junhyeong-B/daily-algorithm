{
  /*
    Runtime: 112 ms, faster than 61.35% of TypeScript online submissions for Power of Two.
    Memory Usage: 44.9 MB, less than 36.20% of TypeScript online submissions for Power of Two.
  */
  const isPowerOfTwo = (n: number): boolean => {
    return n.toString(2).split("").filter(num => num !== "0").length === 1;
  };
}