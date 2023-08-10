import React, { useState } from 'react';
import OutputRow from '../rows/OutputRow';
import Group from './Group';
import Cross from '../elements/Cross';

interface PropositionGroupProps {
  id: number;
  handleDelete: (id: number) => void;
}

const PropositionGroup: React.FC<PropositionGroupProps> = ({
  id,
  handleDelete: deletePropositionGroup
}) => {
  const [groups, setGroups] = useState<string[]>(['1']);
  // const [groupCount, setGroupCount] = useState<number>(1);

  const handleDeleteGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group !== groupId)
    );
  };

  // const addGroup = () => {
  //   setGroupCount(groupCount + 1);
  //   setGroups((currentGroups) => [...currentGroups, `${groupCount + 1}`]);
  // };

  return (
    <div className="main-container flex my-4">
      <Cross onClick={() => deletePropositionGroup(id)} />
      <div className="container w-fit rounded-lg border-2 border-black text-left p-4 space-y-1 min-w-fit mb-4">
        <h1 className="font-bold">Proposition {id + 1}</h1>
        <h1>If:</h1>
        {groups.map((groupId, index) => (
          <Group
            key={groupId}
            id={groupId}
            handleDelete={handleDeleteGroup}
            isRoot={index === 0}
          />
        ))}
        <h1>Then:</h1>
        <OutputRow></OutputRow>
      </div>
    </div>
  );
};

export default PropositionGroup;
