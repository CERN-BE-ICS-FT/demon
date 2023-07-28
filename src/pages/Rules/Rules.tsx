import { useState } from 'react';
import Button from '../../app/common/buttons/Button';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import ImportRulesModal from '../Popups/ImportRulesModal';

interface PropositionGroupProps {
  id: number;
  handleDelete: (id: number) => void;
}

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [propositionGroups, setPropositionGroups] = useState<number[]>([0]);
  const [propositionGroupCount, setPropositionGroupCount] = useState<number>(1);

  const handleDeletePropositionGroup = (id: number) => {
    setPropositionGroups((currentPropositionGroups) =>
      currentPropositionGroups.filter((group) => group !== id)
    );
  };

  const handleAddPropositionGroup = () => {
    setPropositionGroupCount(propositionGroupCount + 1);
    setPropositionGroups((currentPropositionGroups) => [
      ...currentPropositionGroups,
      propositionGroupCount
    ]);
  };

  const handleSave = () => {
    console.log(propositionGroups);
  };

  const handleImport = () => {
    setModalOpen(true);
    console.log('trying to import rules/popups');
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log('trying to import rules/popups');
  };

  const groupName = 'group-1.1';

  return (
    <>
      <ImportRulesModal open={modalOpen} handleClose={closeModal} />
      <div className="h-full w-full space-y-4 min-w-fit">
        <h1 className="text-3xl">
          Rule for <span className="font-bold">{groupName}</span>
        </h1>

        <div className="flex justify-end px-12">
          <Button onClick={handleAddPropositionGroup}>
            {'Add new proposition'}
          </Button>
          <div className="ml-auto flex space-x-4">
            <Button onClick={handleImport}>Import Rules</Button>
            <Button onClick={handleSave}>Save Rules</Button>
          </div>
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
    </>
  );
};

export default Rules;
