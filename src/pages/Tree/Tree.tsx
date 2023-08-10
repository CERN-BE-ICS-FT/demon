/* eslint-disable indent */
import React, { useState, MouseEvent } from 'react';

export interface TreeNode {
  name: string;
  status: string;
  type?: string;
  children?: TreeNode[];
}

interface TreeProps {
  item: TreeNode;
  onItemNameClick: (name: string) => void;
  activeNode: string;
  useMonoColor?: boolean;
}

const Tree: React.FC<TreeProps> = ({
  item,
  onItemNameClick,
  activeNode,
  useMonoColor = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSymbolClick = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleNameClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (item.name === activeNode) {
      onItemNameClick('');
    } else {
      onItemNameClick(item.name);
    }
  };

  return (
    <div>
      <li className="list-none">
        <div className="flex items-center">
          {item.type !== 'device' && ( // Check if it's not a device before showing expansion symbol
            <div
              onClick={handleSymbolClick}
              className={
                'cursor-pointer inline-flex justify-center items-center w-5 h-5 border border-black mr-1 text-xl bg-black text-white font-bold rounded-full pb-1'
              }
            >
              {isOpen ? '-' : '+'}
            </div>
          )}
          <span
            className={`inline-block mr-1 rounded ${
              item.type === 'device' ? 'ml-6 w-8 h-6 rounded-full' : 'w-8 h-6'
            } ${
              useMonoColor
                ? 'bg-white border border-black'
                : item.status.toLowerCase() === 'active'
                ? 'bg-green-500'
                : 'bg-red-500'
            }`}
          ></span>
          <span
            onClick={handleNameClick}
            className={`cursor-pointer text-lg ${
              activeNode === item.name
                ? 'bg-blue-500 rounded p-1 text-white'
                : ''
            }`}
          >
            {item.name}
          </span>
        </div>
        {isOpen && item.children && (
          <ul className="list-none pl-5">
            {item.children
              .sort((a, b) =>
                a.type === 'group' ? -1 : b.type === 'group' ? 1 : 0
              )
              .map((child, index) => (
                <Tree
                  key={index}
                  item={child}
                  onItemNameClick={onItemNameClick}
                  activeNode={activeNode}
                  useMonoColor={useMonoColor}
                />
              ))}
          </ul>
        )}
      </li>
    </div>
  );
};

export default Tree;
