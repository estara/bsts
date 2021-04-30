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
    if (this.root === null) {
      this.root = newNode;
      return this
    }
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return undefined
      }
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    function insert (current) {
      if (!current) {return}
      if (val === current.val) {
        return undefined
      }
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        insert(current.left)
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        insert(current.right)
      }
    }
    insert(this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {return undefined}
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      if (val < current.val) {
      current = current.left;
      } else {
        current = current.right;
      }
   
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) {return undefined}
    let result;

    function findIt (current) {
      if(!current) {result = undefined; return undefined}
      if (current.val === val) {
        result = current
        return current;
      }
      if (val < current.val) {
        findIt(current.left);
      } else {
        findIt(current.right);
      }
    }
    findIt(this.root)
    return result

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) {return undefined}
    let result = [];
    function traverse(node) {
      result.push(node.val);
      if (node.left) {traverse(node.left)};
      if (node.right) {traverse(node.right)};
    }
    traverse(this.root)
    return result
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) {return undefined}
    let result = [];
    function traverse(node) {
      if (node.left) {traverse(node.left)};
      result.push(node.val);
      if (node.right) {traverse(node.right)};
    }
    traverse(this.root);
    return result
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
      if (this.root === null) {return undefined}
      let result = [];
      function traverse(node) {
        if (node.left) {traverse(node.left)};
        if (node.right) {traverse(node.right)};
        result.push(node.val);
      }
      traverse(this.root);
      return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) {return undefined}
    let result = [];
    let queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      result.push(current.val);
      if (current.left) {queue.push(current.left)};
      if (current.right) {queue.push(current.right)};
    }
    return result
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

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
