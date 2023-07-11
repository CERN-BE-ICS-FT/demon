import React, { useState } from 'react';
import SelectButton, { SelectOption } from '../buttons/SelectButton';
import Separator from '../elements/Separator';
import Cross from '../elements/Cross';
import VerticalSeparator from '../elements/VerticalSeparator';

const opts: SelectOption[] = [
  { label: '🟩 Green', value: '0' },
  { label: '🟥 Red', value: '1' },
  { label: '🟨 Yellow', value: '2' }
];

const handleCross = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!', event);
};

const operators: SelectOption[] = [
  { label: 'AND', value: 'and' },
  { label: 'OR', value: 'or' }
];

const states: SelectOption[] = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '0' }
];

const fields: SelectOption[] = [
  { label: 'CPU Status', value: 'CPU' },
  { label: 'MEM Status', value: 'MEM' },
  { label: 'NET Status', value: 'NET' },
  { label: 'RAM Status', value: 'RAM' }
];

const values: SelectOption[] = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '0' }
];

const quantifiers: SelectOption[] = [
  { label: 'Any', value: 'any' },
  { label: 'All', value: 'all' },
  { label: 'At least _', value: 'at least' }
];

const RuleRow = () => {
  const [field, setField] = useState('');
  const [value, setValue] = useState('');

  const handleFieldSelect = (value: string) => {
    const selectedOption = fields.find((option) => option.value === value);
    if (selectedOption) {
      setField(selectedOption.label);
    }
  };

  const handleValueSelect = (value: string) => {
    const selectedOption = values.find((option) => option.value === value);
    if (selectedOption) {
      setValue(selectedOption.label);
      setValue(selectedOption.label);
    }
  };

  return (
    <div className="">
      <Separator></Separator>
      <div className="flex items-center p-2 min-w-fit">
        <h1 className="pl-8 text-2xl align-middle pl-24 min-w-fit"></h1>
        <Cross onClick={handleCross}></Cross>
        <VerticalSeparator></VerticalSeparator>
        <SelectButton text={'Output state'} options={opts} />
        <h1 className="pl-0 text-2xl align-middle pl-24">state</h1>
        <SelectButton text={'Output state'} options={opts} />
        <SelectButton text={'Output state'} options={states} />
      </div>
    </div>
  );
};

export default RuleRow;
