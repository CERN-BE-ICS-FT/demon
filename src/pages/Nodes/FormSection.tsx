import React, { useEffect, useState } from 'react';
import ToggleButton from '../../app/common/buttons/ToggleButton';
import hideIcon from '../../assets/icons/hide.png';
import { WithContext as ReactTags } from 'react-tag-input';
import { loadTreeData } from '../../app/utils/loadTreeData';
import { useLocation } from 'react-router-dom';
import Button from '../../app/common/buttons/Button';

const ICSTAGS = ['Tag1', 'Tag2'];

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

type Node = {
  id: number;
  name: string;
  type: number;
  rule_id: number;
  state: string;
  hidden: number;
  tags: string[];
  children: Node[];
};

type TreeData = {
  tree: Node;
};

const FormSection: React.FC = () => {
  const [node, setNode] = useState<Node | null>(null);
  const [reactTags, setReactTags] = useState<{ id: string; text: string }[]>(
    []
  );

  const location = useLocation();
  console.log('location: ', location);
  const pathParts = location.pathname.split('/');
  const id = parseInt(pathParts[pathParts.length - 1]);

  useEffect(() => {
    if (node && node.tags) {
      setReactTags(node.tags.map((tag) => ({ id: tag, text: tag })));
    }
  }, [node]);

  useEffect(() => {
    const fetchData = async () => {
      const data: TreeData = await loadTreeData();
      const foundNode = findNodeById(data.tree, id);
      if (foundNode) {
        setNode(foundNode);
      }
    };
    fetchData();
  }, [id]);

  const findNodeById = (tree: Node, id: number): Node | null => {
    if (tree.id === id) return tree;
    for (const child of tree.children || []) {
      const found = findNodeById(child, id);
      if (found) {
        return found;
      }
    }
    return null;
  };

  const handleFieldChange = (
    field: keyof Node,
    value: string | number | string[]
  ) => {
    if (node) {
      setNode({ ...node, [field]: value });
    }
  };

  const updateNodeInTree = (tree: Node, updatedNode: Node): Node => {
    if (tree.id === updatedNode.id) {
      return { ...updatedNode };
    }
    if (!tree.children) {
      return { ...tree };
    }
    return {
      ...tree,
      children: tree.children.map((child) =>
        updateNodeInTree(child, updatedNode)
      )
    };
  };

  useEffect(() => {
    const updateLocalStorage = async () => {
      const currentTreeData: TreeData = await loadTreeData();
      if (node) {
        const updatedTree = updateNodeInTree(currentTreeData.tree, node);
        localStorage.setItem('treeData', JSON.stringify({ tree: updatedTree }));
      }
    };

    if (node) {
      updateLocalStorage();
    }
  }, [node, id]);

  const handleDelete = (i: number) => {
    const newTags = reactTags.slice(0);
    newTags.splice(i, 1);
    setReactTags(newTags);
    if (node) {
      setNode({ ...node, tags: newTags.map((tag) => tag.id) });
    }
  };

  const handleAddition = (tag: { id: string; text: string }) => {
    setReactTags([...reactTags, tag]);
    if (node) {
      setNode({ ...node, tags: [...node.tags, tag.id] });
    }
  };

  const handleTagClick = (index: number) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const handleApply = () => {
    console.log('Applying');
  };

  return (
    <div>
      <Button onClick={handleApply}>{'Apply/Compile'}</Button>

      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="name" className="w-24 font-medium">
          Name:
        </label>
        <input
          id="name"
          type="text"
          style={{ width: '25%' }}
          value={node ? node.name : ''}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
        />
      </div>

      <div className="flex items-center space-x-2">
        <label htmlFor="name" className="w-24 font-medium">
          Disable:
        </label>
        <ToggleButton
          onChange={(hidden) => handleFieldChange('hidden', hidden ? 1 : 0)}
          initialState={node ? node.hidden === 1 : false}
        />
        <img src={hideIcon} alt="new file" className="w-6 h-6 opacity-75" />
      </div>

      <div className="flex mt-5 space-x-2">
        <label className="w-24 mt-1 font-medium">Tags:</label>
        <ReactTags
          tags={reactTags}
          suggestions={ICSTAGS.map((tag) => ({ id: tag, text: tag }))}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleTagClick={handleTagClick}
          inputFieldPosition="inline"
          autocomplete={true}
          allowDragDrop={false}
          placeholder="Add properties"
          classNames={{
            tags: 'flex',
            tagInput: 'ml-2',
            tagInputField:
              'h-8 border rounded focus:outline-none focus:border-zinc-800',
            tag: 'h-8 bg-zinc-800 text-white rounded-full px-4 mr-2',
            remove: 'cursor-pointer ml-2 font-bold text-xl',
            selected: 'flex flex-wrap',
            suggestions:
              'bg-zinc-200 border border-black border-t-0 p-1 text-base text-black rounded'
            // activeSuggestion: 'font-bold'
          }}
        />
      </div>
    </div>
  );
};

export default FormSection;
