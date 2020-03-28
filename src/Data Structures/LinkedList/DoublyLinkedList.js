class LinkedListNode {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null;
  }
  prepend(data) {
    const node = new LinkedListNode(data);
    if (this.head) {
      node.next = this.head;
      node.previous = null;
      this.head.previous = node;
      this.head = node;
    } else {
      node.next = null;
      node.previous = null;
      this.head = node;
      this.tail = node;
    }
    return this;
  }
  append(data) {
    const node = new LinkedListNode(data);
    if (this.tail) {
      node.previous = this.tail;
      this.tail.next = node;
      node.next = null;
      this.tail = node;
    } else {
      // List is empty
      this.prepend(data);
    }
    return this;
  }
  delete(data) {
    let previousNode = this.head;
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.data === data) {
        if (this.head === currentNode && this.tail === currentNode) {
          // List has only one node
          this.head = null;
          this.tail = null;
        } else if (this.head === currentNode) {
          // List has multiple nodes
          // detach first node from list
          this.head.next.previous = null;
          this.head = this.head.next;
        } else if (this.tail === currentNode) {
          // List has multiple nodes
          // detach last node from list
          this.tail.previous.next = null;
          this.tail = this.tail.previous;
        } else {
          // somewhere in the middle of list
          currentNode.previous.next = currentNode.next;
          currentNode.next.previous = currentNode.previous;
        }
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return this;
  }
  insert(data, position) {
    if (!this.head && position === 1) {
      this.prepend(data);
      return this;
    }
    let pos = 1;
    let currentNode = this.head;
    let previousNode = this.head;
    let boolNodeInserted = false;
    while(currentNode) {
      if (pos === position) {
        boolNodeInserted = true;
        const node = new LinkedListNode(data);
        if (this.head === currentNode) {
          // on first node
          node.next = this.head;
          this.head.previous = node;
          this.head = node;
        } else if (this.tail === currentNode) {
          node.next = this.tail;
          node.previous = this.tail.previous;
          this.tail.previous.next = node;
          this.tail = node;
        } else {
          node.next = currentNode;
          node.previous = previousNode;
          previousNode.next = node;
        }
        break;
      }
      ++pos;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!boolNodeInserted && position === pos) {
      return this.append(data);
    }
    return this;
  }
}
