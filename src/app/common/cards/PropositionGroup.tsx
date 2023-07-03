import React from 'react';
import Separator from '../elements/Separator';
import RuleRow from '../rows/RuleRow';
import OutputRow from '../rows/OutputRow';

const PropositionGroup = () => {
  return (
    <div className="container w-full rounded-lg border-2 border-black text-left m-4 p-4 space-y-2">
      <h1 className="text-2xl">Proposition 1</h1>
      <Separator></Separator>
      <h1 className="text-2xl">IF:</h1>
      <Separator></Separator>
      <RuleRow></RuleRow>
      <Separator></Separator>
      <h1 className="text-2xl">THEN:</h1>
      <Separator></Separator>
      <OutputRow></OutputRow>
    </div>
  );
};

export default PropositionGroup;
