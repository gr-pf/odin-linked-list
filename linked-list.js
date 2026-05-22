import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.sizeList = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.sizeList === 0) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
    this.sizeList++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.sizeList === 0) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      newNode.nextNode = this.head;
      this.headNode = newNode;
    }
    this.sizeList++;
  }

  size() {
    return this.sizeList;
  }

  head() {
    return this.headNode ? this.headNode : undefined;
  }

  tail() {
    return this.tailNode ? this.tailNode : undefined;
  }

  /**
   *
   * @param {Number} index
   */
  at(index) {
    if (index >= this.sizeList) {
      return undefined;
    }
    let currentIndex = 0;
    let current = this.headNode;
    while (currentIndex !== index) {
      current = current.nextNode;
      currentIndex++;
    }
    return current;
  }

  pop() {
    if (!this.headNode) {
      return undefined;
    }
    const popNode = this.headNode;
    this.headNode = this.headNode.nextNode;
    if (!this.headNode) {
      this.tailNode = null;
      this.sizeList = 0;
    }
    return popNode;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headNode;
    let currentIndex = 0;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
      currentIndex++;
    }
    return -1;
  }

  toString() {
    let llString = "";
    if (this.sizeList === 0) {
      return llString;
    }
    let current = this.headNode;
    while (current) {
      const currentString = `( ${current.value} ) -> `;
      llString += currentString;
      current = current.nextNode;
    }
    return llString + "null";
  }
}
