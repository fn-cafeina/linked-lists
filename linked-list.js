import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node();
    node.value = value;

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) current = current.nextNode;
      current.nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    if (!this.head) return 0;

    let size = 1;

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      size++;
    }

    return size;
  }
}
