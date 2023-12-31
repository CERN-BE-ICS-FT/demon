import { useState } from 'react';
import Button from '../buttons/Button';
import SelectButton, { SelectOption } from '../buttons/SelectButton';
import Cross from '../elements/Cross';
import RuleRow from '../rows/RuleRow';

interface GroupProps {
  id: string;
  handleDelete: (id: string) => void;
  isRoot?: boolean;
}

const operators: SelectOption[] = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' }
];

const colors = [
  'bg-sky-300',
  'bg-green-300',
  'bg-red-300',
  'bg-purple-300',
  'bg-teal-400'
];

const determineColor = (id: string) => {
  const depth = id.split('.').length - 1;
  return colors[depth % colors.length];
};

const Group = ({ id, handleDelete, isRoot = false }: GroupProps) => {
  const [ruleRows, setRuleRows] = useState<number[]>([0]);
  const [subGroups, setSubGroups] = useState<string[]>([]);
  const [subGroupCount, setSubGroupCount] = useState<number>(0);

  const addRuleRow = () => {
    const newId = ruleRows.length;
    setRuleRows((currentRows) => [...currentRows, newId]);
  };

  const handleCross = (id: number) => {
    setRuleRows((currentRows) => currentRows.filter((rowId) => rowId !== id));
  };

  const addSubGroup = () => {
    setSubGroupCount(subGroupCount + 1);
    const newId = `${id}.${subGroupCount + 1}`;
    setSubGroups((currentSubGroups) => [...currentSubGroups, newId]);
  };

  const handleDeleteSubGroup = (subGroupId: string) => {
    setSubGroups((currentSubGroups) =>
      currentSubGroups.filter((groupId) => groupId !== subGroupId)
    );
  };

  const color = determineColor(id);

  return (
    <div className="flex ml-4 p-1 pr-2">
      {!isRoot && <Cross onClick={() => handleDelete(id)} />}
      <div className={`rounded-xl border border-zinc-800 min-w-fit ${color}`}>
        <div className="flex items-center p-2 space-x-4 w-full min-w-fit">
          <Button onClick={addSubGroup}>+ Subgroup</Button>
          <Button onClick={addRuleRow}>+ Rule</Button>
          <div className="flex items-center space w-full min-w-fit mb-4 space-x-4">
            <h1 className="min-w-fit font-bold">Group {id}</h1>
            <SelectButton text={'Logical'} options={operators} width="w-28" />
          </div>
        </div>
        {ruleRows.map((id) => (
          <div key={id}>
            <RuleRow handleDelete={() => handleCross(id)} />
          </div>
        ))}
        {subGroups.map((groupId) => (
          <div key={groupId}>
            <Group id={groupId} handleDelete={handleDeleteSubGroup} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
