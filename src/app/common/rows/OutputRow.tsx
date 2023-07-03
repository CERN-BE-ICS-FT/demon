import React from 'react';
import SelectButton, { SelectOption } from '../buttons/SelectButton';

const opts: SelectOption[] = [
  { label: '🟩 Green', value: '0' },
  { label: '🟥 Red', value: '1' },
  { label: '🟨 Yellow', value: '2' }
];

const OutputRow = () => (
  <div className="flex items-center p-2 ml-24 bg-amber-300 rounded-xl border-2 border-black">
    <h1 className="pl-8 text-2xl align-middle">Output state is</h1>
    <SelectButton text={'Output state'} options={opts} />
  </div>
);

export default OutputRow;
