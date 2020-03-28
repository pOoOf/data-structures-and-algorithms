class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null;
  }
  prepend(data) {
    const node = new LinkedListNode(data);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.display();
    return this;
  }
  append(data) {
    if (!this.head) {
      return this.prepend(data);
    }
    const node = new LinkedListNode(data);
    node.next = null;
    this.tail.next = node;
    this.tail = node;
    this.display();
    return this;
  }
  delete(data) {
    let previousNode = this.head;
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.data === data) {
        if (this.head === currentNode && this.tail === currentNode) {
          this.head = null;
          this.tail = null;
        } else if (this.head === currentNode) {
          this.head = currentNode.next;
        } else if (this.tail === currentNode) {
          previousNode.next = null;
          this.tail = previousNode;
        } else {
          previousNode.next = currentNode.next;
        }
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.display();
    return this;
  }
  display() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  insert(data, position) {
    if (!this.head) {
      this.prepend(data);
      return this;
    }
    let previousNode = this.head;
    let currentNode = this.head;
    let pos = 1;
    const node = new LinkedListNode(data);
    let boolNodeInserted = false;
    while(currentNode) {
      if (pos === position) {
        boolNodeInserted = true;
        if (this.head === currentNode && this.tail === currentNode) {
          node.next = currentNode;
          this.head = node;
          this.tail = currentNode;
        } else if (this.head === currentNode) {
          this.head = node;
          node.next = currentNode;
        } else if (this.tail === currentNode) {
          this.tail = currentNode;
          node.next = currentNode;
          previousNode.next = node;
          currentNode.next = null;
        } else {
          previousNode.next = node;
          node.next = currentNode;
        }
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      ++pos;
    }
    if (!boolNodeInserted && position === pos) {
      return this.append(data);
    }
    this.display();
    return this;
  }
}