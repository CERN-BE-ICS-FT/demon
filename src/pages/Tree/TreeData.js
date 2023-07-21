function randomStatus() {
  return Math.random() > 0.5 ? 'active' : 'inactive';
}

export const treeData = {
  name: 'Root',
  status: randomStatus(),
  children: Array.from({ length: 10 }, (_, i) => ({
    name: `Child ${i + 1}`,
    status: randomStatus(),
    children: Array.from({ length: 10 }, (_, j) => ({
      name: `Grandchild ${i * 10 + j + 1}`,
      status: randomStatus(),
      children: Array.from({ length: 100 }, (_, k) => ({
        name: `Great Grandchild ${i * 1000 + j * 100 + k + 1}`,
        status: randomStatus()
      }))
    }))
  }))
};
