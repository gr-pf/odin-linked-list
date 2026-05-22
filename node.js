export class Node {
  /**
   *
   * @param {String|Number|null} value
   * @param {Node|null} nextNode
   */
  constructor(value = null, nextNode = null) {
    ((this.value = value), (this.nextNode = nextNode));
  }
}
