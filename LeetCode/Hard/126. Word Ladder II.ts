/**
 * Runtime 97 ms Beats 55.56%
 * Memory 46.2 MB Beats 88.89%
 */
function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[]
): string[][] {
  const remainingWord = new Set(wordList);

  if (!remainingWord.has(endWord)) {
    return [];
  }

  const queue = [beginWord];
  remainingWord.delete(beginWord);

  const nodes: string[][] = [];
  let reached = false;

  while (queue.length && !reached) {
    nodes.push(queue.slice());
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift()!;

      for (const node of remainingWord) {
        if (!checkIsDiffersBySingleLetter(currentNode, node)) {
          continue;
        }

        if (node === endWord) {
          reached = true;
          break;
        }

        queue.push(node);
        remainingWord.delete(node);
      }
    }
  }

  if (!reached) return [];

  const result = [[endWord]];

  for (let i = nodes.length - 1; i >= 0; i--) {
    const resultLen = result.length;

    for (let j = 0; j < resultLen; j++) {
      const node = result.shift()!;
      const last = node[0];

      for (const word of nodes[i]) {
        if (!checkIsDiffersBySingleLetter(last, word)) {
          continue;
        }

        result.push([word, ...node]);
      }
    }
  }

  return result;
}

function checkIsDiffersBySingleLetter(word1: string, word2: string): boolean {
  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
  }

  return count === 1;
}

console.log(
  findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
); // [['hit', 'hot', 'dot', 'dog', 'cog'], ['hit', 'hot', 'lot', 'log', 'cog']]
