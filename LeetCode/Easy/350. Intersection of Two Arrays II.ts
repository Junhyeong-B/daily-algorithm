/**
 * Runtime 143 ms Beats 7.98%
 * Memory 48.8 MB Beats 5.22%
 */

 function intersect(nums1: number[], nums2: number[]): number[] {
  const map2 = nums2.reduce(
    (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
    {} as Record<number, number>
  );
  const answer: number[] = [];

  for (const num of nums1) {
    if (map2[num] > 0) {
      map2[num] -= 1;
      answer.push(num);
    }
  }
  return answer;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
