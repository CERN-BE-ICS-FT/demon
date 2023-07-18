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
    <li style={{ listStyleType: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          onClick={handleSymbolClick}
          style={{
            cursor: 'pointer',
            display: 'inline-block',
            width: '20px',
            height: '20px',
            lineHeight: '20px',
            borderRadius: '50%',
            textAlign: 'center',
            border: '1px solid black',
            marginRight: '5px',
            fontSize: '16px' // Added this line to increase the font size
          }}
        >
          {isOpen ? '-' : '+'}
        </span>
        <span
          style={{
            display: 'inline-block',
            width: '30px',
            height: '20px',
            backgroundColor:
              item.status.toLowerCase() === 'active' ? 'green' : 'red',
            marginRight: '5px',
            flex: 'none' // add this line
          }}
        ></span>
        <span onClick={handleNameClick} style={{ cursor: 'pointer' }}>
          {item.name}
        </span>
      </div>
      {isOpen && item.children && (
        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
          {item.children.map((child, index) => (
            <Tree key={index} item={child} onItemNameClick={onItemNameClick} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Tree;
