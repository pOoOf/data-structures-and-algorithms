import SinglyLinkedList from '../LinkedList/SinglyLinkedList';

class Stack {
  constructor() {
    this.linkedList = new SinglyLinkedList();
  }
  push(data) {
    this.linkedList.prepend(data);
  }
  pop() {
    return this.linkedList.deleteFirst();
  }
  isEmpty() {
    return !this.linkedList.head;
  }
  peek() {
    return this.linkedList.head;
  }
}