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

  at(index, pointer = this.head) {
    if (!index) return pointer.value;
    if (!pointer || !pointer.nextNode) return undefined;

    return this.at(index - 1, pointer.nextNode);
  }

  pop() {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.nextNode;

    return value;
  }

  contains(value, pointer = this.head) {
    if (value === pointer.value) return true;
    if (!pointer.nextNode) return false;

    return this.contains(value, pointer.nextNode);
  }

  findIndex(value, pointer = this.head, index = 0) {
    if (!pointer) return -1;
    if (value === pointer.value) return index;

    return this.findIndex(value, pointer.nextNode, index + 1);
  }

  toString() {
    if (!this.head) return "";

    let pointer = this.head;
    let string = `( ${pointer.value} ) ->`;

    while (pointer.nextNode) {
      pointer = pointer.nextNode;
      string += ` ( ${pointer.value} ) ->`;
    }

    string += " null";

    return string;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("The index must be beetween 0 and " + this.size());
    }

    if (index === 0) {
      values.reverse().forEach((value) => this.prepend(value));
      return;
    }

    if (index === this.size()) {
      values.forEach((value) => this.append(value));
      return;
    }

    let pointer = this.head;

    while (index - 1) {
      pointer = pointer.nextNode;
      index--;
    }

    const clone = structuredClone(pointer.nextNode);
    pointer.nextNode = null;

    values.forEach((value) => this.append(value, pointer));

    while (pointer.nextNode) pointer = pointer.nextNode;
    pointer.nextNode = clone;
  }

  removeAt(index) {
    const currentNodesValue = [];

    let pointer = this.head;
    currentNodesValue.push(pointer.value);
    while (pointer.nextNode) {
      pointer = pointer.nextNode;
      currentNodesValue.push(pointer.value);
    }

    currentNodesValue.splice(index, 1);
    this.head = null;
    currentNodesValue.forEach((value) => this.append(value));
  }
}
