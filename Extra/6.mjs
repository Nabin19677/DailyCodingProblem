// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

// If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

class Node {
  constructor(val) {
    this.val = val;
    this.both = null;
  }
}

class XORLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(element) {
    const node = new Node(element);
    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.both = getPointer(this.tail);
      this.tail.both = this.tail.both ^ getPointer(node);
      this.tail = node;
    }
  }

  get(index) {
    if (index == 0) {
      return this.head;
    }

    if (this.root == null) {
      return new Error("Cannot traverse if the head is null!");
    }

    let current = getPointer(this.head);
    let prev = null;

    let i = 0;

    while (current !== null) {
      if (i == index) break;
      const next = current ^ prev;
      prev = current;
      current = next;
      i++;
    }

    if (i !== index) {
      throw new Error("Less nodes than index. Index out of range");
    }

    return dereferencePointer(current);
  }
}
