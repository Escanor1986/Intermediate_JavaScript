class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    Node.instances.push(this);
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }

  static getAllSeperateNodes() {
    Node.instances.forEach(data => console.log(data));
  }

  static getAllData() {
    for (let i = 0; i < Node.instances.length; i++) {
      console.log(Node.instances[i].data);
      console.log(Node.instances[i].next);
    }
  }

  static getAllNodes() {
    return Node.instances;
  }
}

Node.instances = [];

const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

console.log(Node.getAllNodes());
console.log(Node.instances.length);
console.log(Node.getAllSeperateNodes());
console.log(Node.getAllData());
console.log(
  parseInt(
    new Array(10)
      .fill(1)
      .map(elem => elem * Math.floor(Math.random() * 9))
      .join("")
  )
);
