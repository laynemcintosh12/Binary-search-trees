class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let parent;
    while(current) {
      parent = current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (val < parent.val) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    this.root = this.insertRecursivelyHelper(this.root, val);
    return this;
  }

  insertRecursivelyHelper(current, val) {
    if (!current) {
      return new Node(val);
    }

    if (val < current.val) {
      current.left = this.insertRecursivelyHelper(current.left, val);
    } else {
      current.right = this.insertRecursivelyHelper(current.right, val);
    }

    return current;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current) {
      if(val === current.val) return current;
      if(val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.findRecursivelyHelper(this.root, val);
  }

  findRecursivelyHelper(current, val) {
    if(!current) return undefined;
    if(val === current.val) return current;
    if(val < current.val) {
      return this.findRecursivelyHelper(current.left, val);
    } else {
      return this.findRecursivelyHelper(current.right, val);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    this.dfsPreOrderHelper(this.root, result);
    return result;
  }

  dfsPreOrderHelper(node, result) {
    if (node) {
      result.push(node.val);
      this.dfsPreOrderHelper(node.left, result);
      this.dfsPreOrderHelper(node.right, result);
    }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    this.dfsInOrderHelper(this.root, result);
    return result;
  }

  dfsInOrderHelper(node, result) {
    if (node) {
      this.dfsInOrderHelper(node.left, result);
      result.push(node.val);
      this.dfsInOrderHelper(node.right, result);
    }
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
    this.dfsPostOrderHelper(this.root, result);
    return result;
  }

  dfsPostOrderHelper(node, result) {
    if (node) {
      this.dfsPostOrderHelper(node.left, result);
      this.dfsPostOrderHelper(node.right, result);
      result.push(node.val);
    }
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];
    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    return this.removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (node == null) return null;

    if (val < node.val) {
      node.left = this.removeNode(node.left, val);
      return node;
    }

    if (val > node.val) {
      node.right = this.removeNode(node.right, val);
      return node;
    }


    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }

    // node has one child
    if (node.left == null) {
      return node.right;
    }

    if (node.right == null) {
      return node.left;
    }

    // node has two children
    let tempNode = this.findMin(node.right);
    node.val = tempNode.val;
    node.right = this.removeNode(node.right, tempNode.val);
    return node;
  }

  findMin(node) {
    let current = node;
    while(current.left !== null) {
      current = current.left;
    }
    return current;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    
  }


  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
