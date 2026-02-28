import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value, pointer = this.head) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    if (!pointer.nextNode) {
      pointer.nextNode = new Node(value);
      return;
    }

    return this.append(value, pointer.nextNode);
  }

  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
  }

  size(pointer = this.head) {
    if (!pointer) return 0;

    return this.size(pointer.nextNode) + 1;
  }
}
