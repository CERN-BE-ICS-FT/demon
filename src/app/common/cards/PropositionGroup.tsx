import { useState } from 'react';
import Separator from '../elements/Separator';
import OutputRow from '../rows/OutputRow';
import Group from './Group';
import Cross from '../elements/Cross';
import Button from '../buttons/Button';
import saveRule from '../../actions/saveRule';

const PropositionGroup = () => {
  const handleDelete = (id: number) => {
    setGroups((currentGroups) =>
      currentGroups.filter((group) => group.id !== id)
    );
  };

  const [groups, setGroups] = useState([
    { id: 0, component: <Group key={0} handleDelete={handleDelete} /> }
  ]);

  const addGroup = () => {
    setGroups((currentGroups) => [
      ...currentGroups,
      {
        id: currentGroups.length,
        component: (
          <Group key={currentGroups.length} handleDelete={handleDelete} />
        )
      }
    ]);
  };

  // const handleDelete = (id: number) => {
  //   setGroups((currentGroups) =>
  //     currentGroups.filter((group) => group.id !== id)
  //   );
  // };

  return (
    <div>
      <div className="main-container flex my-8">
        <Cross onClick={() => handleDelete(0)}></Cross>
        <div className="container w-full rounded-lg border-2 border-black text-left mx-4 p-4 space-y-2 min-w-fit">
          <h1 className="text-2xl">Proposition 1</h1>
          <Separator></Separator>
          <h1 className="text-2xl">IF:</h1>
          <Separator></Separator>
          {groups.map(({ component }) => component)}
          <Separator></Separator>
          <h1 className="text-2xl">THEN:</h1>
          <Separator></Separator>
          <OutputRow></OutputRow>
        </div>
      </div>
      <Button onClick={saveRule}>Save</Button>
    </div>
  );
};

export default PropositionGroup;
