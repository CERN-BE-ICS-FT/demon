import { ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="h-9 w-44 max-w-200 bg-zinc-800 hover:bg-zinc-800 text-sm text-white font-bold py-1 mb-4 rounded-lg w-fit px-6 min-w-fit"
    >
      {children}
    </button>
  );
};

export default Button;
