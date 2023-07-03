import Button from '../../app/common/buttons/Button';
import GroupSelectButton from '../../app/common/buttons/GroupSelectButton';
import RuleSelectButton from '../../app/common/buttons/RuleSelection';
import RuleRow from '../../app/common/rows/RuleRow';

const Home = () => {
  return (
    <div className="h-full w-full space-y-1">
      <h1>Home</h1>
      <Button>{'Add new group'}</Button>
      <br></br>
      <RuleSelectButton />
      <GroupSelectButton />
      <br></br>
      <RuleRow></RuleRow>
    </div>
  );
};

export default Home;
