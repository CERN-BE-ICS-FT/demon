import React, { useState } from 'react';
import SelectButton, { SelectOption } from '../buttons/SelectButton';

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
    <div className="flex border-2 border-sky-500 rounded-xl p-4 px-16 w-auto space-x-6">
      <h1 className="flex-1 text-center text-3xl">AND</h1>
      <SelectButton
        text={'Field'}
        options={quantifiers}
        onChange={handleFieldSelect}
      />
      <div className="m-auto"> with state </div>
      <SelectButton
        text={'Field'}
        options={fields}
        onChange={handleFieldSelect}
      />
      <div className="m-auto"> == </div>
      <SelectButton
        text={'Value'}
        options={values}
        onChange={handleValueSelect}
      />
    </div>
  );
};

export default RuleRow;
