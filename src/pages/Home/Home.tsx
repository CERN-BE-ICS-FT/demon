import Button from '../../app/common/buttons/Button';
import GroupSelectButton from '../../app/common/buttons/GroupSelectButton';
import RuleSelectButton from '../../app/common/buttons/RuleSelection';
import PropositionGroup from '../../app/common/cards/PropositionGroup';
import RuleRow from '../../app/common/rows/RuleRow';

const Home = () => {
  return (
    <div className="h-full w-full space-y-1">
      <h1>Home</h1>
      <Button>{'Add new group 123'}</Button>
      <br></br>
      <PropositionGroup></PropositionGroup>
    </div>
  );
};

export default Home;
