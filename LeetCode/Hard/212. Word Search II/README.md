```tsx
{
  function findWords(board: string[][], words: string[]): string[] {
    class TrieNode {
      children: Map<string, TrieNode>;
      isWord: boolean;

      constructor() {
        this.children = new Map();
        this.isWord = false;
      }

      addWord(value: string) {
        let currentNode: TrieNode = this;
        for (const str of value) {
          if (!currentNode.children.has(str)) {
            currentNode.children.set(str, new TrieNode());
          }

          if (currentNode.children.has(str)) {
            currentNode = currentNode.children.get(str)!;
          }
        }

        currentNode.isWord = true;
      }
    }

    const m = board.length;
    const n = board[0].length;
    const answer = new Set<string>();
    const visit = new Set<string>();
    const trie = new TrieNode();

    for (const word of words) {
      trie.addWord(word);
    }

    const dfs = (x: number, y: number, node: TrieNode, word: string) => {
      if (x < 0 || y < 0 || x >= m || y >= n || visit.has((x + "") + (y + "")) || !node.children.has(board[x][y])) {
        return;
      }

      visit.add((x + "") + (y + ""));
      node = node.children.get(board[x][y])!;
      word += board[x][y]
      if (node.isWord) {
        answer.add(word);
      }

      dfs(x + 1, y, node, word);
      dfs(x - 1, y, node, word);
      dfs(x, y + 1, node, word);
      dfs(x, y - 1, node, word);

      visit.delete((x + "") + (y + ""));
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (trie.children.has(board[i][j])) {
          dfs(i, j, trie, "");
        }
      }
    }

    return Array.from(answer);
  };
}```