/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const answer = [];
  const countDNA = new Map();

  for (let i = 0; i <= s.length - 10; i++) {
    const currentDNA = s.slice(i, i + 10);
    countDNA.set(
      currentDNA,
      countDNA.has(currentDNA) ? countDNA.get(currentDNA) + 1 : 1
    );
  }

  for (const [DNA, count] of countDNA) {
    if (count >= 2) {
      answer.push(DNA);
    }
  }

  return answer;
};
