// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// The following test should pass:
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'
import assert from "assert";

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.val;
  }
}

function serializeNode(node) {
  let val = node.val;
  let left = null;
  let right = null;
  if (node.left) {
    left = serializeNode(node.left);
  }
  if (node.right) {
    right = serializeNode(node.right);
  }
  const serialized = [val, left, right];
  return serialized;
}

function deserializeNode(serialized) {
  let val = new Node(serialized[0]);
  let left = null;
  let right = null;
  if (serialized[1]) {
    left = deserializeNode(serialized[1]);
  }
  if (serialized[2]) {
    right = deserializeNode(serialized[2]);
  }
  return new Node(val, left, right);
}

const rootNode = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

assert(deserializeNode(serializeNode(rootNode)).left.left.val, "left.left");
