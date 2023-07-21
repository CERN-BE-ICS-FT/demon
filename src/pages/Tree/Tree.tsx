import React, { useState, MouseEvent } from 'react';

interface TreeNode {
  name: string;
  status: string;
  children?: TreeNode[];
}

interface TreeProps {
  item: TreeNode;
  onItemNameClick: (name: string) => void;
}

const Tree: React.FC<TreeProps> = ({ item, onItemNameClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSymbolClick = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleNameClick = (e: MouseEvent) => {
    e.stopPropagation();
    onItemNameClick(item.name);
  };

  return (
    <li className="list-none">
      <div className="flex items-center">
        <div
          onClick={handleSymbolClick}
          className={
            'cursor-pointer inline-flex justify-center items-center w-5 h-5 border border-black mr-1 text-xl bg-black text-white font-bold rounded-full pb-1'
          }
        >
          {isOpen ? '-' : '+'}
        </div>
        <span
          className={`inline-block w-8 h-6 mr-1 rounded ${
            item.status.toLowerCase() === 'active'
              ? 'bg-green-500'
              : 'bg-red-500'
          }`}
        ></span>
        <span onClick={handleNameClick} className="cursor-pointer text-lg">
          {item.name}
        </span>
      </div>
      {isOpen && item.children && (
        <ul className="list-none pl-5">
          {item.children.map((child, index) => (
            <Tree key={index} item={child} onItemNameClick={onItemNameClick} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Tree;
