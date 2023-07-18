export const treeData = {
  name: 'Root',
  status: 'active',
  children: [
    {
      name: 'Child 1',
      status: 'inactive',
      children: [
        {
          name: 'Grandchild 1',
          status: 'active'
        },
        {
          name: 'Grandchild 2',
          status: 'inactive'
        }
      ]
    },
    {
      name: 'Child 2',
      status: 'active'
    }
  ]
};
