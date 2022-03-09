{
  /*
    Trie 자료구조
    트라이는 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

    특징: 
      1. 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
      2. 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
        - 문자열을 그냥 탐색한다면 O(문자열 갯수 * 문자열 길이)의 시간 복잡도를 가지지만
          Trie 자료구조를 사용하면 찾는 문자열의 길이 만큼만 시간 복잡도를 가진다.
      3. n이 문자열의 길이일 때 탐색, 삽입은 O(n) 만큼 걸린다.
      4. 단점) 각 정점이 자식에 대한 링크를 전부 가지고 있기에 공간을 더 많이 사용한다.

    구조:
      1. 루트는 비어있다.
      2. 각 간선은 추가될 문자를 키로 가진다.
      3. 각 정점은 이전 정점의 값, 간선의 키를 값으로 갖는다.
      4. 해시 테이블과 연결리스트를 이용하여 구현할 수 있다.
  */

  class Node {
    value: string;
    children: Map<string, Node>;
    isWord: boolean;

    constructor(value: string = "") {
      this.value = value;
      this.children = new Map();
      this.isWord = false;
    }
  }

  interface TrieImpl {
    addWord(str: string): void;
    has(str: string): boolean;
  }

  class Trie implements TrieImpl {
    root: Node;

    constructor() {
      this.root = new Node();
    }

    addWord(str: string) {
      let currentNode: Node = this.root;
      for (const s of str) {
        if (!currentNode.children.has(s)) {
          currentNode.children.set(s, new Node(currentNode.value + s));
        }

        currentNode = currentNode.children.get(s) as Node;
      }
      currentNode.isWord = true;
    }

    has(str: string) {
      let currentNode = this.root;

      for (const s of str) {
        if (!currentNode.children.has(s)) {
          return false;
        }

        currentNode = currentNode.children.get(s) as Node;
      }

      return true;
    }
  }

  const trie = new Trie();
  trie.addWord('can');
  console.log(trie.has('can')); // true
  trie.addWord('cat');
  console.log(trie.has('ca')); // true

  trie.addWord('cannot');
  console.log(trie.has('cann')) // true
  console.log(trie.has('cannt')) // false
}