/**
 * Runtime: 91 ms, faster than 89.53% of TypeScript online submissions for Top K Frequent Words.
 * Memory Usage: 49.9 MB, less than 5.81% of TypeScript online submissions for Top K Frequent Words.
 */

function topKFrequent(words: string[], k: number): string[] {
  const countFreq = words.reduce(
    (acc: Record<string, number>, cur: string) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );
  return Object.entries(countFreq)
    .sort((a, b) => {
      if (b[1] === a[1]) {
        if (b[0] < a[0]) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return b[1] - a[1];
      }
    })
    .slice(0, k)
    .map(([word]) => word);
}

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));
