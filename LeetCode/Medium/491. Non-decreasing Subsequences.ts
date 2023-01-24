/**
 * Runtime 8118 ms Beats 5.55%
 * Memory 62.2 MB Beats 52.78%
 */

function findSubsequences(nums: number[]): number[][] {
  const answer: number[][] = [];
  const set = new Set<string>();
  const dfs = (index: number, temp: number[]) => {
    if (index === nums.length) {
      if (temp.length <= 1) {
        return;
      }
      const key = temp.join('/');
      if (set.has(key)) {
        return;
      }

      answer.push([...temp]);
      set.add(key);
    } else {
      const lastNumber = temp[temp.length - 1] ?? -101;
      for (let i = index; i < nums.length; i++) {
        dfs(i + 1, temp);
        if (lastNumber <= nums[i]) {
          dfs(i + 1, [...temp, nums[i]]);
        }
      }
    }
  };

  dfs(0, []);

  return answer;
}

console.log(findSubsequences([4, 6, 7, 7])); // [[7, 7], [6, 7], [6, 7, 7], [4, 7], [4, 7, 7], [4, 6], [4, 6, 7], [4, 6, 7, 7]]
