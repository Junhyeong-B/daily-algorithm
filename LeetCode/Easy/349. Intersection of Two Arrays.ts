/**
 * Runtime: 60 ms, faster than 95.73% of TypeScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 45.3 MB, less than 18.29% of TypeScript online submissions for Intersection of Two Arrays.
 */

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);
  return Array.from(set1).filter(num => set2.has(num));
};
