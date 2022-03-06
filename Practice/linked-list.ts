/*
  연결 리스트는 각 요소를 포인터로 연결하여 관리하는 선형 자료구조이다.
  각 요소는 노드라고 부르고 데이터, 포인터 영역으로 구성된다.
  특징:
    1. 메모리가 허용되는 한 요소를 추가할 수 있다.
    2. 탐색은 O(n)
    3. 요소의 추가, 삭제는 O(1)
    4. Singly Linked List, Doubly Linked List, Circular Linked List가 존재한다.
    5. 배열과 비교했을 때 배열은 메모리의 영역을 순차적으로 사용하지만 연결 리스트는 메모리 영역이 퍼져있다.
      - 따라서 연결 리스트의 요소를 찾기 위해 포인터를 사용한다.
*/


/* 
  1. Singly Linked List
    - Head에서 Tail까지 단방향으로 이어지는 연결리스트
*/
{
  class Node<T> {
    value: T | Node<T>;
    next: Node<T> | null;

    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  interface SinglyLinkedListImpl<T> {
    find(value: T): null | Node<T>;
    append(value: T): void;
    insert(node: Node<T>, value: T): void;
    remove(value: T): null | void;
    display(): null | void;
  }

  class SinglyLinkedList<T> implements SinglyLinkedListImpl<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    find(value: T) {
      if (!this.head || !this.tail) {
        return null;
      }

      let currentNode = this.head;
      while (currentNode.value !== value) {
        if (!currentNode.next) {
          return null;
        }

        currentNode = currentNode.next;
      }

      return currentNode;
    }

    append(value: T) {
      const newNode = new Node(value);
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size += 1;
    }

    insert(node: Node<T> | null, value: T) {
      if (!node) {
        return;
      }

      const newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
      this.size += 1;
    }

    remove(value: T) {
      let prevNode = this.head;
      if (!prevNode || !prevNode.next) {
        return null;
      }
      while (prevNode.next && prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (!prevNode.next) {
        return null;
      }

      prevNode.next = prevNode.next.next;
      this.size -= 1;
    }

    display() {
      if (!this.head || !this.tail) {
        console.log("[]");
        return;
      }
      let currentNode = this.head;
      let displayingString: string[] = [];
      while (currentNode) {
        displayingString.push(currentNode.value + "");

        if (!currentNode.next) {
          break;
        }

        currentNode = currentNode.next;
      }
      console.log("[" + displayingString.join(", ") + "]");
    }
  }

  const singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.append(1);
  singlyLinkedList.append("ABC");
  singlyLinkedList.append(235);
  singlyLinkedList.display(); // [1, ABC, 235]
  console.log(singlyLinkedList.find("ABC")); // { value: 'ABC', next: Node { value: 235, next: null } }
  singlyLinkedList.insert(singlyLinkedList.find("ABC"), 1234);
  singlyLinkedList.display(); // [1, ABC, 1234, 235]
  singlyLinkedList.remove(1234);
  singlyLinkedList.display(); // [1, ABC, 235]
  console.log(singlyLinkedList.size); // 3
}