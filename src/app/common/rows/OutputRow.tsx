import SelectButton, { SelectOption } from '../buttons/SelectButton';

const opts: SelectOption[] = [
  { label: '🟩 OK', value: '0' },
  { label: '🟥 Error', value: '1' },
  { label: '🟨 Warning', value: '2' }
];

const OutputRow = () => (
  <div className="flex items-center p-2 ml-[24px] mr-[8px] bg-amber-300 rounded-xl border-2 border-black">
    <h1 className="pl-8 text-2xl align-middle">Output state is</h1>
    <SelectButton text={'Output state'} options={opts} />
  </div>
);

export default OutputRow;
