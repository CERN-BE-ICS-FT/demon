import SelectButton, { SelectOption } from '../buttons/SelectButton';

const opts: SelectOption[] = [
  { label: '🟩 Ok', value: '0' },
  { label: '🟥 Error', value: '1' },
  { label: '🟨 Warning', value: '2' }
];

const OutputRow = () => (
  <div className="flex items-center p-2 ml-[24px] mr-[8px] bg-amber-300 rounded-xl border border-black">
    <h1 className="pl-4">Output state is</h1>
    <SelectButton text={'Output state'} options={opts} />
  </div>
);

export default OutputRow;
