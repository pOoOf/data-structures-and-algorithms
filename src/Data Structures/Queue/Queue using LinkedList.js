import SinglyLinkedList from '../LinkedList/SinglyLinkedList';

class Queue {
  constructor() {
    this.queue = new SinglyLinkedList();
  }
  enqueue(data) {
    return this.queue.prepend(data);
  }
  dequeue(data) {
    if (this.queue.tail) {
      const data = this.queue.tail.data;
      this.queue.delete(data);
      return data;
    }
  }
  front() {
    if (this.queue.tail) {
      return this.queue.tail.data;
    }
    return null;
  }
}
