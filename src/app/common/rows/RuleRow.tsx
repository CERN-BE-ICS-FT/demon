import React from 'react';
import SelectButton, { SelectOption } from '../buttons/SelectButton';
import Cross from '../elements/Cross';

interface RuleRowProps {
  handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const operators: SelectOption[] = [
  { label: '==', value: '==' },
  { label: '!=', value: 'or' },
  { label: '<', value: 'or' },
  { label: '>', value: 'or' }
];

const inputs: SelectOption[] = [
  { label: 'All of inputs', value: 'all' },
  { label: 'None of inputs', value: 'none' },
  { label: 'Any of inputs', value: 'any' },
  { label: 'Current group', value: 'c_group' }
];

const values: SelectOption[] = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '0' }
];

const RuleRow = ({ handleDelete }: RuleRowProps) => {
  return (
    <div className="">
      <div className="flex items-center p-1 pb-2 min-w-fit space-x-2">
        <h1 className="pl-2 align-middle min-w-fit"></h1>
        <Cross onClick={handleDelete}></Cross>
        <SelectButton text={'Input'} options={inputs} />
        <h1 className="align-middle pl-2 pr-2">state</h1>
        <SelectButton text={'Relation'} width="w-28" options={operators} />
        <SelectButton text={'Output'} width="w-28" options={values} />
      </div>
    </div>
  );
};

export default RuleRow;
