import { useContext, useEffect, useState } from 'react';
import Button from '../../app/common/buttons/Button';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import ImportRulesModal from '../Popups/ImportRulesModal';
import { useLocation } from 'react-router-dom';
import { loadRulesData } from '../../app/utils/loadRulesData';
import { TreeContext } from '../../app/contexts/TreeContext';

interface TreeNode {
  id: number;
  rule_id: number;
  children?: TreeNode[];
}

interface RuleGroup {
  id: number;
  // other properties of RuleGroup...
}

interface Rule {
  id: number;
  groups: RuleGroup[];
  // other properties of Rule...
}

interface RulesData {
  propositions: Rule[];
}

const Rules = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [propositionGroups, setPropositionGroups] = useState<number[]>([0]);
  const [propositionGroupCount, setPropositionGroupCount] = useState<number>(1);
  const [groupName, setGroupName] = useState('');

  const [rulesData, setRulesData] = useState(null);

  const location = useLocation();

  const pathParts = location.pathname.split('/');

  const [ruleId, setRuleId] = useState<number | null>(null);

  const { currentId } = useContext(TreeContext);

  const findRuleId = (
    node: TreeNode,
    currentId: number | null
  ): number | null => {
    if (currentId !== null && node.id === currentId) {
      return node.rule_id;
    }
    if (node.children) {
      for (const child of node.children) {
        const foundId = findRuleId(child, currentId);
        if (foundId !== null) return foundId;
      }
    }
    return null;
  };

  useEffect(() => {
    const treeDataString = localStorage.getItem('treeData');
    if (treeDataString && currentId !== null) {
      const treeDataObj = JSON.parse(treeDataString);
      const treeData: TreeNode = treeDataObj.tree; // Access the 'tree' property
      const foundRuleId = findRuleId(treeData, currentId);
      console.log(`Found Rule ID: ${foundRuleId}`); // Debugging log
      setRuleId(foundRuleId);
    }
  }, [currentId]);

  useEffect(() => {
    const pathParts = location.pathname.split('/');

    setGroupName(decodeURIComponent(pathParts[3]));
  }, [location.pathname]);

  if (!pathParts[3]) {
    return (
      <div>
        <p className="mt-4">To edit rules, select a node on the tree view.</p>
      </div>
    );
  }

  const checkAndLogRule = (ruleId: number) => {
    const rulesDataString = localStorage.getItem('rulesData');
    if (rulesDataString) {
      const rulesData: RulesData = JSON.parse(rulesDataString);

      const foundProposition = rulesData.propositions.find(
        (proposition) => proposition.id === ruleId
      );

      if (foundProposition) {
        console.log('Proposition Found for ID:', ruleId);
        console.log('Full Proposition:', foundProposition);
      } else {
        console.log('Proposition not found for ID:', ruleId);
      }
    }
  };

  useEffect(() => {
    if (ruleId) {
      checkAndLogRule(ruleId);
    }
  }, [ruleId]);

  // Load rules data
  useEffect(() => {
    const fetchData = async () => {
      const rules = await loadRulesData();
      if (rules) {
        setRulesData(rules);
      }
    };
    fetchData();
  }, []);

  // Update local storage when rules data changes
  useEffect(() => {
    if (rulesData) {
      localStorage.setItem('rulesData', JSON.stringify(rulesData));
    }
  }, [rulesData]);

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
        <h1 className="text-lg pt-4 font-bold">{groupName}</h1>
        <div className="text-zinc-600  mb-4">Device</div>

        <div className="flex px-8 space-x-4">
          <Button onClick={handleAddPropositionGroup}>{'+ Proposition'}</Button>
          <Button onClick={handleImport}>Import Rules</Button>
        </div>
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
