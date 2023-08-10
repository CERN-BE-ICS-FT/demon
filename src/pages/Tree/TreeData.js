function randomStatus() {
  return Math.random() > 0.5 ? 'active' : 'inactive';
}

function randomType() {
  return Math.random() > 0.5 ? 'group' : 'device';
}

let groupCounter = 1;
let deviceCounter = 1;

function generateChild(i, j, k) {
  const type = randomType();
  const status = randomStatus();
  let name;

  if (type === 'group') {
    name = `Group ${groupCounter++}`;
  } else {
    name = `Device ${deviceCounter++}`;
  }

  return {
    name,
    status,
    type,
    children:
      k !== undefined
        ? []
        : Array.from({ length: 10 }, (_, k) => generateChild(i, j, k))
  };
}

export const treeData = {
  name: 'Root',
  status: randomStatus(),
  type: randomType(),
  children: Array.from({ length: 10 }, (_, i) => generateChild(i))
};
