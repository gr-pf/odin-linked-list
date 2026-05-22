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
      newNode.nextNode = this.headNode;
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
    } else {
      this.sizeList--;
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
        return currentIndex;
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

  insertAt(index, ...values) {
    if (index >= this.sizeList || index < 0) {
      throw new RangeError(`Index ${index} is out of bound!`);
    }

    if (index === 0) {
      const currentNext = this.headNode;
      this.headNode = new Node(values[0]);
      let current = this.headNode;

      for (let i = 1; i < values.length; i++) {
        const newNode = new Node(values[i]);
        current.nextNode = newNode;
        current = newNode;
      }

      current.nextNode = currentNext;
      // } else if (index === this.sizeList - 1) {
      //   let current = this.tailNode;

      //   for (let i = 0; i < values.length; i++) {
      //     const newNode = new Node(values[i]);
      //     current.nextNode = newNode;
      //     current = newNode;
      //   }

      //   this.tailNode = current;
    } else {
      let currentIndex = 0;
      let current = this.headNode;

      while (currentIndex !== index - 1) {
        current = current.nextNode;
        currentIndex++;
      }
      const currentNext = current.nextNode;

      for (let i = 0; i < values.length; i++) {
        const newNode = new Node(values[i]);
        current.nextNode = newNode;
        current = newNode;
      }
      current.nextNode = currentNext;
    }
    this.sizeList += values.length;
  }

  removeAt(index) {
    if (index >= this.sizeList || index < 0) {
      throw new RangeError(`Index ${index} is out of bound!`);
    }

    if (index === 0) {
      this.pop();
      return;
    }

    let current = this.headNode;
    let currentIndex = 0;
    let prev;
    while (currentIndex !== index) {
      prev = current;
      current = current.nextNode;
      currentIndex++;
    }
    prev.nextNode = prev.nextNode.nextNode;
    if (!prev.nextNode) {
      this.tailNode = prev;
    }

    this.sizeList--;
  }
}
