function treeTraversals(n, nodes) {
  // Initialize the tree from the adjacency list
  let tree = new Array(n);

  // Parse the input to create the tree structure
  for (let i = 0; i < n; i++) {
    let [val, left, right] = nodes[i].split(' ').map(Number);
    tree[i] = { val, left, right };
  }

  // Helper function for in-order traversal
  function inOrder(index) {
    if (index === -1) return [];
    let node = tree[index];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)];
  }

  // Helper function for pre-order traversal
  function preOrder(index) {
    if (index === -1) return [];
    let node = tree[index];
    return [node.val, ...preOrder(node.left), ...preOrder(node.right)];
  }

  // Helper function for post-order traversal
  function postOrder(index) {
    if (index === -1) return [];
    let node = tree[index];
    return [...postOrder(node.left), ...postOrder(node.right), node.val];
  }

  // Perform the traversals starting from the root (index 0)
  let inorder = inOrder(0).join(' ');
  let preorder = preOrder(0).join(' ');
  let postorder = postOrder(0).join(' ');

  // Print the results
  console.log(inorder);
  console.log(preorder);
  console.log(postorder);
}

// Example Input
let n = 5;
let nodes = ['4 1 2', '2 -1 -1', '5 3 4', '1 -1 -1', '3 -1 -1'];

// Call the function with the input
treeTraversals(n, nodes);
