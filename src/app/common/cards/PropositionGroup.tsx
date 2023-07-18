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
  const [groupCount, setGroupCount] = useState<number>(1); // add a groupCount state

  const handleDeleteGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group !== groupId)
    );
  };

  const addGroup = () => {
    setGroupCount(groupCount + 1); // increment groupCount by 1 whenever a new group is created
    setGroups((currentGroups) => [...currentGroups, `${groupCount + 1}`]);
  };

  return (
    <div className="main-container flex my-12">
      <Cross onClick={() => deletePropositionGroup(id)} />
      <div className="container w-fit rounded-lg border-2 border-black text-left mx-4 p-4 space-y-2 min-w-fit mb-4">
        <h1 className="text-2xl font-bold">Proposition {id + 1}</h1>
        {/* <Separator></Separator> */}
        <h1 className="text-2xl">IF:</h1>
        {/* <Separator></Separator> */}
        {groups.map((groupId, index) => (
          <Group
            key={groupId}
            id={groupId}
            handleDelete={handleDeleteGroup}
            isRoot={index === 0}
          />
        ))}
        {/* <Separator></Separator> */}
        <h1 className="text-2xl">THEN:</h1>
        {/* <Separator></Separator> */}
        <OutputRow></OutputRow>
      </div>
    </div>
  );
};

export default PropositionGroup;
