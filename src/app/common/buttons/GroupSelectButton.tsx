import SelectButton, { SelectButtonProps, SelectOption } from './SelectButton';

const GroupSelectButton = ({
  text = 'Add new group',
  onChange
}: Partial<SelectButtonProps>) => {
  const options: SelectOption[] = [
    { label: 'ADD', value: 'add' },
    { label: 'OR', value: 'or' }
  ];

  return <SelectButton options={options} text={text} onChange={onChange} />;
};

export default GroupSelectButton;
