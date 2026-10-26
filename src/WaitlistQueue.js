class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class WaitlistQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(person) {
    const node = new Node(person);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const person = this.head.value;

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return person;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = WaitlistQueue;