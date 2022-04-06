{
  class Node<T> {
    value: T;
    prev: Node<T> | null;
    next: Node<T> | null;

    constructor(value: T) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }

  interface DoublyLinkedListImpl<T> {
    append(value: T): void;
    prepend(value: T): void;
    removeHead(): Node<T> | null;
    removeTail(): Node<T> | null;
    search(value: T): Node<T> | null;
    getSize(): number;
    getHead(): Node<T> | null;
    getTail(): Node<T> | null;
  }

  class DoublyLinkedList<T> implements DoublyLinkedListImpl<T> {
    private _head: Node<T> | null;
    private _tail: Node<T> | null;
    private _size: number;

    constructor() {
      this._head = null;
      this._tail = null;
      this._size = 0;
    }

    append(value: T) {
      if (!this._tail) {
        this._head = this._tail = new Node(value);
      } else {
        const oldTail = this._tail;
        this._tail = new Node(value);
        oldTail.next = this._tail;
        this._tail.prev = oldTail;
      }

      this._size += 1;
    }

    prepend(value: T) {
      if (!this._head) {
        this._head = this._tail = new Node(value);
      } else {
        const oldHead = this._head;
        this._head = new Node(value);
        oldHead.prev = this._head;
        this._head.next = oldHead;
      }

      this._size += 1;
    }

    removeHead() {
      if (!this._head) {
        return null;
      }

      const removedHead = this._head;
      this._head = this._head.next;
      removedHead.next = null;
      this._size -= 1;

      return removedHead;
    }

    removeTail() {
      if (!this._tail) {
        return null;
      }

      const removedTail = this._tail;
      this._tail = this._tail.prev;
      removedTail.prev = null;
      this._size -= 1;

      return removedTail;
    }

    search(value: T) {
      let currentNode: Node<T> | null = this._head;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }

    getSize() {
      return this._size;
    }

    getHead() {
      return this._head;
    }

    getTail() {
      return this._tail;
    }
  }

  const list = new DoublyLinkedList();
  list.append(1);
  list.append(23);
  list.append(456);
  console.log(list.search(23));
  /*
    Node { value: 23,
      prev: Node { value: 1, prev: null, next: [Circular] },
      next: Node { value: 456, prev: [Circular], next: null } }
  */

  list.prepend(-20);
  list.prepend(-99);
  console.log(list);
  /*
  DoublyLinkedList {
    _head: 
    Node { value: -99,
      prev: null,
      next: Node { value: -20, prev: [Circular], next: [Object] } },
      _tail: 
      Node { value: 456,
        prev: Node { value: 23, prev: [Object], next: [Circular] },
        next: null },
        _size: 3
      }
      */

  console.log(list.search(123456)); // null
  console.log(list.getSize()); // 5
  console.log(list.removeHead()); // Node { value: -99, prev: null, next: null }
  console.log(list.getSize()); // 4
  console.log(list);
  /*
    DoublyLinkedList {
      _head: 
        Node { value: -20,
          prev: Node { value: -99, prev: null, next: null },
          next: Node { value: 1, prev: [Circular], next: [Object] } },
      _tail:
        Node { value: 456,
          prev: Node { value: 23, prev: [Object], next: [Circular] },
          next: null },
      _size: 4
    }
   */
}