import SelectButton, { SelectButtonProps, SelectOption } from './SelectButton';

const RuleSelectButton = ({
  text = 'Add new rule',
  onChange
}: Partial<SelectButtonProps>) => {
  const options: SelectOption[] = [
    { label: '<', value: '<' },
    { label: '>', value: '>' },
    { label: '==', value: '==' },
    { label: '!=', value: '!=' }
  ];

  return <SelectButton options={options} text={text} onChange={onChange} />;
};

export default RuleSelectButton;
