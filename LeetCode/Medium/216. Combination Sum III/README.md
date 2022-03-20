```tsx
{
  /*
    Runtime: 64 ms, faster than 97.92% of TypeScript online submissions for Combination Sum III.
    Memory Usage: 45.2 MB, less than 10.42% of TypeScript online submissions for Combination Sum III.
  */
  const combinationSum3 = (k: number, n: number): number[][] => {
    const check = Array.from({ length: 10 }, () => 0);
    const answer: number[][] = [];

    const dfs = (sum: number, tmp: number[], lt: number) => {
      if (sum > n || tmp.length > k) {
        return;
      }

      if (sum === n) {
        if (tmp.length !== k) {
          return;
        }

        answer.push([...tmp]);
      } else {
        for (let i = 1; i < 10; i++) {
          if (sum + i > n) {
            break;
          }

          if (check[i] === 0 && i > lt) {
            check[i] = 1;
            dfs(sum + i, tmp.concat(i), i);
            check[i] = 0;
          }
        }
      }
    }

    dfs(0, [], 0);

    return answer;
  };
}```