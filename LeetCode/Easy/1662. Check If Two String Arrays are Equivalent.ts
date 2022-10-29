/**
 * Runtime: 75 ms, faster than 80.49% of TypeScript online submissions for Check If Two String Arrays are Equivalent.
 * Memory Usage: 44.8 MB, less than 12.20% of TypeScript online submissions for Check If Two String Arrays are Equivalent.
 */

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
};