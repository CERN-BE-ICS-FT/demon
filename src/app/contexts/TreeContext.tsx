import React from 'react';

export const TreeContext = React.createContext<{ currentId: number | null }>({
  currentId: null
});
