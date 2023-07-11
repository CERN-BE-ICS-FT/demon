import { useState } from 'react';
import saveRule from '../../app/actions/saveRule';
import Button from '../../app/common/buttons/Button';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import myData from '../../data/tree.json';

export const handleSave = () => {
  console.log('saving', myData);
};

const Home = () => {
  const [propositionGroups, setPropositionGroups] = useState([
    <PropositionGroup key={0} />
  ]);
  const groupName = 'group-1.1';

  const handleAddPropositionGroup = () => {
    setPropositionGroups((oldPropositionGroups) => [
      ...oldPropositionGroups,
      <PropositionGroup key={oldPropositionGroups.length} />
    ]);
  };

  return (
    <div className="h-full w-full space-y-4 min-w-fit">
      <h1 className="text-3xl">
        Rule for <span className="font-bold">{groupName}</span>
      </h1>

      <Button onClick={handleAddPropositionGroup}>
        {'Add new proposition'}
      </Button>
      <br />
      {propositionGroups.map((propositionGroup) => (
        <>{propositionGroup}</>
      ))}
    </div>
  );
};

export default Home;
