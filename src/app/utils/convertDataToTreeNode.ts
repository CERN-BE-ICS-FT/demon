import { TreeNode } from '../../pages/Tree/Tree';

export function convertDataToTreeNode(data: any): TreeNode {
  const { id, name, type, state, hidden, children } = data;

  let nodeType = '';
  if (type === 0) nodeType = 'group';
  else if (type === 1) nodeType = 'device';

  const treeNode: TreeNode = {
    id: id,
    name: name,
    status: state,
    hidden: hidden === 1,
    type: nodeType
  };

  if (children && children.length > 0) {
    treeNode.children = children.map(convertDataToTreeNode);
  }

  return treeNode;
}
