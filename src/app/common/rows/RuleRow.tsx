import React from 'react';
import SelectButton, { SelectOption } from '../buttons/SelectButton';
import Separator from '../elements/Separator';
import Cross from '../elements/Cross';
import VerticalSeparator from '../elements/VerticalSeparator';

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
      <Separator></Separator>
      <div className="flex items-center p-2 min-w-fit">
        <h1 className="pl-8 text-2xl align-middle pl-24 min-w-fit"></h1>
        <Cross onClick={handleDelete}></Cross>
        <VerticalSeparator></VerticalSeparator>
        <SelectButton text={'Input'} options={inputs} />
        <h1 className="pl-0 text-2xl align-middle pl-12 pr-12">state</h1>
        <SelectButton text={'Operator'} options={operators} />
        <SelectButton text={'Output'} options={values} />
      </div>
    </div>
  );
};

export default RuleRow;
