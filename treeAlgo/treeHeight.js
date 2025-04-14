function computeTreeHeight(n, parentArray) {
  // Create an adjacency list to represent the tree
  const tree = new Array(n);
  for (let i = 0; i < n; i++) {
    tree[i] = [];
  }

  let root = -1;
  for (let i = 0; i < n; i++) {
    const parent = parentArray[i];
    if (parent === -1) {
      root = i;
    } else {
      if (parent >= 0 && parent < n) {
        tree[parent].push(i);
      } else {
        console.error(`Invalid parent index ${parent} for node ${i}`);
        return -1; // or handle the error as needed
      }
    }
  }

  if (root === -1) {
    console.error('No root found in the tree');
    return -1;
  }

  // Function to compute height recursively
  function getHeight(node) {
    let maxHeight = 0;
    for (const child of tree[node]) {
      const childHeight = getHeight(child);
      if (childHeight > maxHeight) {
        maxHeight = childHeight;
      }
    }
    return maxHeight + 1;
  }

  return getHeight(root);
}

// Example usage:
const n = 5;
const parentArray = [4, -1, 4, 1, 1];
console.log(computeTreeHeight(n, parentArray));
