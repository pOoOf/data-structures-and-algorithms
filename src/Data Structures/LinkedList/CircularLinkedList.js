class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(data) {
    const node = new LinkedListNode(data);
    if (this.head) {
      node.next = this.head;
      this.tail.next = node;
      this.head = node;
    } else {
      node.next = node;
      this.head = node;
      this.tail = node;
    }
    return this;
  }
  append(data) {
    const node = new LinkedListNode(data);
    if (this.tail) {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    } else {
      return this.prepend(data);
    }
    return this;
  }
  deleteLast() {
    if (this.head) {
      let prev = this.head;
      let curr = this.head;
      while(curr.next !== this.head) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      this.tail = prev;
    }
    return this;
  }
  deleteFirst() {
    if (this.head) {
      this.tail.next = this.head.next;
      this.head = this.head.next;
    }
    return this;
  }
  count() {
    let current = this.head;
    let count = 0;
    do {
      ++count;
      current = current.next;
    } while(current !== this.head);
    return count;
  }
  print() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode.data);
      if (
        currentNode.next === currentNode ||
        currentNode.next === this.head
      ) {
        break;
      }
      currentNode = currentNode.next;
    }
  }
}
