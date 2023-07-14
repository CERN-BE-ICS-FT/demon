import React, { useState } from 'react';
import Separator from '../elements/Separator';
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
  const [groups, setGroups] = useState<string[]>(['0']);

  const handleDeleteGroup = (groupId: string) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group !== groupId)
    );
  };

  return (
    <div className="main-container flex my-12">
      <Cross onClick={() => deletePropositionGroup(id)} />
      <div className="container w-full rounded-lg border-2 border-black text-left mx-4 p-4 space-y-2 min-w-fit mb-4">
        <h1 className="text-2xl">Proposition {id + 1}</h1>
        <Separator></Separator>
        <h1 className="text-2xl">IF:</h1>
        <Separator></Separator>
        {groups.map((groupId) => (
          <Group key={groupId} id={groupId} handleDelete={handleDeleteGroup} />
        ))}
        <Separator></Separator>
        <h1 className="text-2xl">THEN:</h1>
        <Separator></Separator>
        <OutputRow></OutputRow>
      </div>
    </div>
  );
};

export default PropositionGroup;
