import React, { MouseEvent, FC } from 'react';
import { ReactComponent as CloseIcon } from './icons8-close.svg';

interface CrossProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Cross: FC<CrossProps> = ({ onClick }) => {
  return (
    <button
      className="rounded-full flex items-center justify-center text-black font-bold text-md w-6 h-6 mr-2"
      onClick={onClick}
    >
      <CloseIcon className="w-9 h-9" />
    </button>
  );
};

export default Cross;
