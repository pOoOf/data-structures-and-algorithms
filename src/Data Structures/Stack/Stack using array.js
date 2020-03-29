class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    return this.arr.push(data);
  }
  pop() {
    return this.arr.pop();
  }
}
