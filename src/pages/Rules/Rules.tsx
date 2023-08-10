import { useEffect, useState } from 'react';
import Button from '../../app/common/buttons/Button';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import ImportRulesModal from '../Popups/ImportRulesModal';
import { useParams, matchRoutes, useLocation } from 'react-router-dom';

interface PropositionGroupProps {
  id: number;
  handleDelete: (id: number) => void;
}

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [propositionGroups, setPropositionGroups] = useState<number[]>([0]);
  const [propositionGroupCount, setPropositionGroupCount] = useState<number>(1);
  const [groupName, setGroupName] = useState('');

  const location = useLocation();

  const pathParts = location.pathname.split('/');

  useEffect(() => {
    const pathParts = location.pathname.split('/');

    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  if (!pathParts[3]) {
    return (
      <div>
        <p className="mt-4 text-xl">
          To edit rules, select a node on the tree view.
        </p>
      </div>
    );
  }

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

  return (
    <>
      <ImportRulesModal open={modalOpen} handleClose={closeModal} />
      <div className="h-full w-full min-w-fit">
        <h1 className="text-3xl pt-4">{groupName}</h1>
        <div className="text-gray-600 text-lg mb-4">Device</div>

        <div className="flex justify-end px-12">
          <Button onClick={handleAddPropositionGroup}>{'+ Proposition'}</Button>
          <div className="ml-auto flex space-x-4">
            <Button onClick={handleImport}>Import Rules</Button>
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
