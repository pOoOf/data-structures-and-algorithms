class LinkedListNode {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
