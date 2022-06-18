/**
 * Runtime: 95 ms, faster than 36.92% of TypeScript online submissions for Text Justification.
 * Memory Usage: 44.5 MB, less than 16.92% of TypeScript online submissions for Text Justification.
 */

function fullJustify(words: string[], maxWidth: number): string[] {
  const separatedWords: string[][] = [];

  let len = 0;
  let currentWords: string[] = [];
  for (const word of words) {
    len += word.length;
    if (len + currentWords.length - 1 >= maxWidth) {
      separatedWords.push(currentWords.slice());
      len = word.length;
      currentWords = [word];
    } else {
      currentWords.push(word);
    }
  }

  if (!separatedWords.length) {
    if (maxWidth === 1) {
      return currentWords;
    } else {
      let tempWords = currentWords.join(" ");
      while (tempWords.length !== maxWidth) {
        tempWords += " ";
      }
      return [tempWords];
    }
  }

  if (separatedWords[separatedWords.length - 1].join("") !== currentWords.join("")) {
    separatedWords.push(currentWords.slice());
  }

  const answer: string[] = [];
  for (let i = 0; i < separatedWords.length; i++) {
    const n = separatedWords[i].length;
    const len = separatedWords[i].join("").length;
    const totalLen = len + n - 1;
    if (totalLen === maxWidth) {
      answer.push(separatedWords[i].join(" "));
    } else {
      if (i === separatedWords.length - 1) {
        let tempWords = currentWords.join(" ");
        while (tempWords.length !== maxWidth) {
          tempWords += " ";
        }
        answer.push(tempWords)
        break;
      }
      for (let j = 0; j < maxWidth - len; j++) {
        const currentIndex = j % (n - 1) || 0;
        separatedWords[i][currentIndex] += " ";
      }

      answer.push(separatedWords[i].join(""));
    }
  }

  return answer;
};
