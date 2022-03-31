{
  /*
    Runtime: 70 ms, faster than 76.00% of TypeScript online submissions for Word Pattern.
    Memory Usage: 43.1 MB, less than 48.00% of TypeScript online submissions for Word Pattern.
  */
  const wordPattern = (pattern: string, s: string): boolean => {
    const hash = new Map<string, string>();
    const ptn = pattern.split("");
    const str = s.split(" ");
    if (ptn.length !== str.length) {
      return false;
    }


    for (let i = 0; i < ptn.length; i++) {
      if (hash.has(str[i])) {
        if (ptn[i] !== hash.get(str[i])) {
          return false;
        }
      } else {
        if (Array.from(hash.values()).includes(ptn[i])) {
          return false;
        }
        hash.set(str[i], ptn[i]);
      }
    }


    return true;
  };
}