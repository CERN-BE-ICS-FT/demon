/* eslint-disable indent */
import React, { useState, MouseEvent } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

export interface TreeNode {
  id: number;
  name: string;
  status: string;
  hidden: boolean;
  type?: string;
  children?: TreeNode[];
}

interface Item {
  id: number;
  type: 'groups' | 'devices';
}

interface TreeProps {
  item: TreeNode;
  onItemNameClick: (id: number, type: string, name: string) => void;
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
    onItemNameClick(item.id, item.type || '', item.name);
  };

  return (
    <div className="max-h-screen ">
      <li className="list-none">
        <div className="flex items-center">
          {item.type !== 'device' && ( // Check if it's not a device before showing expansion symbol
            <div
              onClick={handleSymbolClick}
              className={
                'cursor-pointer inline-flex justify-center items-center w-4 h-4 border border-zinc-800 mr-1 bg-zinc-800 text-white text-sm rounded-full pb-0.5'
              }
            >
              {isOpen ? '-' : '+'}
            </div>
          )}
          <span
            className={`inline-block mr-1 rounded ${
              item.type === 'device' ? 'ml-5 w-5 h-4 rounded-full' : 'w-5 h-4'
            } ${
              useMonoColor
                ? 'bg-white border border-zinc-800'
                : item.status.toLowerCase() === 'active'
                ? 'bg-green-500'
                : 'bg-red-500'
            }`}
          ></span>
          <span
            onClick={handleNameClick}
            className={`cursor-pointer ${
              activeNode === item.name
                ? 'bg-zinc-800 px-1 rounded text-white'
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
