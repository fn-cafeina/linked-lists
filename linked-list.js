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

  head_() {
    return this.head ? this.head.value : undefined;
  }

  tail_(pointer = this.head) {
    if (!pointer) return undefined;
    if (!pointer.nextNode) return pointer.value;

    return this.tail_(pointer.nextNode);
  }
}
