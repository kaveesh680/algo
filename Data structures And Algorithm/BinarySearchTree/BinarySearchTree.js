class Node{
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.value) return undefined;
            if (val > current.value) {
                if (!current.right) {
                    current.right = node;
                } else {
                    current = current.right;
                }
            } else if (val < current.value) {
                if (!current.left) {
                    current.left = node;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find1(val) {
        if (!this.root) return false;
        let current = this.root;
        while (true) {
            if (val === current.value) {
                return true;
            } else if (val > current.value) {
                if (!current.right) {
                    return false;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    return false;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find2(val) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val === current.value) {
                found = true;
            } else if(val < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return found ? current : false;
    }

    BFS() {
        let node = this.root,
            queue = [],
            data = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
        let current = this.root,
            data = [];
        const traverse = (node) => {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data;
    }

    DFSPostOrder() {
        let current = this.root,
            data = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        let current = this.root,
            data = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data;
    }
}

const tree = new BinarySearchTree();
// tree.root = new Node(5);
// tree.root.right = new Node(6);
// tree.root.left = new Node(4);
tree.insert(6);
tree.insert(5);
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(8);
tree.insert(10);
console.log(tree.find1(2));
console.log(tree.find2(2));
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
// console.log(tree);