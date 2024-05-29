/**
 * Contains the value property and link to the 'nextNode', both are set as null by default. Updated to utilize key-value pairs instead of just a value.
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export default Node;
