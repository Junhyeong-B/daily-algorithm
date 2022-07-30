/**
 * Runtime: 347 ms, faster than 100.00% of TypeScript online submissions for Word Subsets.
 * Memory Usage: 68.6 MB, less than 100.00% of TypeScript online submissions for Word Subsets. 
 */

const getFreqArray = (word: string) => {
  const freq = Array(26).fill(0);

  for (const alpha of word) {
    const index = alpha.charCodeAt(0) - 97;
    freq[index] += 1;
  }

  return freq;
}

const isSubset = (freqA: number[], freqB: number[]) => {
  for (let i = 0; i < 26; i++) {
    if (freqA[i] < freqB[i]) {
      return false;
    }
  }

  return true;
}

function wordSubsets(words1: string[], words2: string[]): string[] {
  const answer: string[] = [];
  const freqB = Array(26).fill(0);

  for (const word of words2) {
    const currentFreqArray = getFreqArray(word);

    for (let i = 0; i < 26; i++) {
      freqB[i] = Math.max(freqB[i], currentFreqArray[i]);
    }
  }

  for (const word of words1) {
    const freqA = getFreqArray(word);
    if (isSubset(freqA, freqB)) {
      answer.push(word);
    }
  }

  return answer;
};
