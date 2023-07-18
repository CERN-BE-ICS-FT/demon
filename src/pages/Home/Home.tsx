import { useState } from 'react';
import saveRule from '../../app/actions/saveRule';
import Button from '../../app/common/buttons/Button';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import myData from '../../data/tree.json';

interface PropositionGroupProps {
  id: number;
  handleDelete: (id: number) => void;
}

// export const handleSave = () => {
//   console.log(propositionGroups);
// };

const Home = () => {
  const [propositionGroups, setPropositionGroups] = useState<number[]>([0]);
  const [propositionGroupCount, setPropositionGroupCount] = useState<number>(1); // add a propositionGroupCount state

  const handleDeletePropositionGroup = (id: number) => {
    setPropositionGroups((currentPropositionGroups) =>
      currentPropositionGroups.filter((group) => group !== id)
    );
  };

  const handleAddPropositionGroup = () => {
    setPropositionGroupCount(propositionGroupCount + 1); // increment propositionGroupCount by 1 whenever a new group is created
    setPropositionGroups((currentPropositionGroups) => [
      ...currentPropositionGroups,
      propositionGroupCount
    ]);
  };

  const handleSave = () => {
    console.log(propositionGroups);
  };

  const groupName = 'group-1.1';

  return (
    <div className="h-full w-full space-y-4 min-w-fit mb-20">
      <h1 className="text-3xl">
        Rule for <span className="font-bold">{groupName}</span>
      </h1>

      <div className="flex justify-between text-center px-12">
        <Button onClick={handleAddPropositionGroup}>
          {'Add new proposition'}
        </Button>
        <Button onClick={handleSave}>Save Rules</Button>
      </div>

      <br />
      {propositionGroups.map((id) => (
        <PropositionGroup
          key={id}
          id={id}
          handleDelete={handleDeletePropositionGroup}
        />
      ))}
    </div>
  );
};

export default Home;
