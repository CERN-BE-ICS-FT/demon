import { useState, MouseEvent } from 'react';
import Button from '../buttons/Button';
import SelectButton, { SelectOption } from '../buttons/SelectButton';
import Cross from '../elements/Cross';
import Separator from '../elements/Separator';
import VerticalSeparator from '../elements/VerticalSeparator';
import RuleRow from '../rows/RuleRow';

interface GroupProps {
  handleDelete?: (id: number) => void;
}

const operators: SelectOption[] = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' }
];

const Group = ({ handleDelete }: GroupProps) => {
  const [ruleRows, setRuleRows] = useState([
    { id: 0, component: <RuleRow key={0} /> }
  ]);

  const addRuleRow = () => {
    setRuleRows((currentRows) => [
      ...currentRows,
      {
        id: currentRows.length,
        component: <RuleRow key={currentRows.length} />
      }
    ]);
  };

  const handleCross = (id: number) => {
    setRuleRows((currentRows) => currentRows.filter((row) => row.id !== id));
  };

  return (
    <div className="bg-sky-300 rounded-xl ml-24 border-2 border-black min-w-fit">
      <div className="flex items-center p-2 space-x-8 w-full min-w-fit">
        {/* Uncomment the line below to use handleDelete */}
        {/* <Cross onClick={handleDelete}></Cross> */}
        <Button>+ Subgroup</Button>
        <Button onClick={addRuleRow}>+ Rule</Button>
        <div className="flex items-center justify-end w-full min-w-fit">
          <h1 className="pl-0 text-2xl align-middle min-w-fit">Group 1</h1>
          <SelectButton text={'Operators'} options={operators}></SelectButton>
        </div>
      </div>
      {ruleRows.map(({ id, component }) => (
        <div key={id}>
          <Cross onClick={() => handleCross(id)} />
          {component}
        </div>
      ))}
    </div>
  );
};

export default Group;
