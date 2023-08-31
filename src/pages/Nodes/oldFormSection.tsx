// import { useEffect, useState } from 'react';
// import ToggleButton from '../../app/common/buttons/ToggleButton';
// import hideIcon from '../../assets/icons/hide.png';
// import ICSTAGS from './icsTags';
// import { WithContext as ReactTags } from 'react-tag-input';
// import { loadTreeData } from '../../app/utils/loadTreeData';
// import { useLocation } from 'react-router-dom';

// const suggestions = ICSTAGS.map((tag) => {
//   return {
//     id: tag,
//     text: tag
//   };
// });

// const KeyCodes = {
//   comma: 188,
//   enter: 13
// };

// type TreeData = {
//   tree: Node;
// };

// type Node = {
//   id: number;
//   name: string;
//   type: number;
//   rule_id: number;
//   state: string;
//   hidden: number;
//   tags: { id: string; text: string }[];
//   children: Node[];
// };

// const delimiters = [KeyCodes.comma, KeyCodes.enter];

// const FormSection = () => {
//   const [node, setNode] = useState<Partial<Node> | null>(null);
//   const location = useLocation();
//   const pathParts = location.pathname.split('/');
//   const id = parseInt(pathParts[pathParts.length - 1]);
//   const [reactTags, setReactTags] = useState<{ id: string; text: string }[]>(
//     []
//   );

//   useEffect(() => {
//     if (node && node.tags) {
//       setReactTags(node.tags.map((tag) => ({ id: tag, text: tag })));
//     }
//   }, [node]);

//   const findNodeById = (tree: Node[], id: number): Node | null => {
//     for (let i = 0; i < tree.length; i++) {
//       if (tree[i].id === id) {
//         return tree[i];
//       } else if (tree[i].children) {
//         const childResult = findNodeById(tree[i].children, id);
//         if (childResult) return childResult;
//       }
//     }
//     return null;
//   };

//   const updateLocalStorage = (updatedNode: Partial<Node>) => {
//     const storedData = localStorage.getItem('treeData');
//     if (storedData) {
//       try {
//         const data: TreeData = JSON.parse(storedData);
//         const node = findNodeById(data.tree.children, id);
//         if (node) {
//           Object.assign(node, updatedNode);
//           localStorage.setItem('treeData', JSON.stringify(data));
//         }
//       } catch (error) {
//         console.error('Failed to update local storage:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     if (node) {
//       updateLocalStorage(node);
//     }
//   }, [node]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data: TreeData = await loadTreeData();
//       const foundNode = findNodeById(data.tree.children, id);
//       if (foundNode) {
//         setNode(foundNode);
//         setReactTags(foundNode.tags.map((tag) => ({ id: tag, text: tag })));
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleFieldChange = (
//     field: keyof Node,
//     value: string | number | string[]
//   ) => {
//     if (node) {
//       setNode({
//         ...node,
//         [field]: value
//       });
//     }
//   };

//   const handleTagClick = (index: number) => {
//     console.log('The tag at index ' + index + ' was clicked');
//   };

//   const handleDelete = (i: number) => {
//     if (node && node.tags && reactTags) {
//       // Remove the tag from node.tags
//       const newTags = [...node.tags];
//       newTags.splice(i, 1);

//       // Remove the tag from reactTags
//       const newReactTags = [...reactTags];
//       newReactTags.splice(i, 1);

//       // Update both state variables
//       setNode({
//         ...node,
//         tags: newTags
//       });
//       setReactTags(newReactTags);
//     }
//   };

//   const handleAddition = (tag: { id: string; text: string }) => {
//     if (node && node.tags) {
//       setNode({
//         ...node,
//         tags: [...node.tags, tag.id]
//       });
//       setReactTags([...reactTags, tag]);
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center space-x-2 mb-4">
//         <label htmlFor="name" className="w-24 font-medium">
//           Name:
//         </label>
//         <input
//           id="name"
//           type="text"
//           style={{ width: '25%' }}
//           value={node ? node.name : ''}
//           onChange={(e) => handleFieldChange('name', e.target.value)}
//           className="px-2 py-0 border rounded focus:outline-none focus:border-zinc-800"
//         />
//       </div>

//       <div className="flex items-center space-x-2">
//         <label htmlFor="name" className="w-24 font-medium">
//           Disable:
//         </label>
//         <ToggleButton
//           onChange={(hidden) => handleFieldChange('hidden', hidden ? 1 : 0)}
//           initialState={node ? node.hidden === 1 : false}
//         />
//         <img src={hideIcon} alt="new file" className="w-6 h-6 opacity-75" />
//       </div>

//       <div className="flex mt-5 space-x-2">
//         <label className="w-24 mt-1 font-medium">Tags:</label>
//         <ReactTags
//           // tags={node ? (node.tags as any) : []}
//           tags={reactTags}
//           suggestions={suggestions}
//           delimiters={delimiters}
//           handleDelete={handleDelete}
//           handleAddition={handleAddition}
//           handleTagClick={handleTagClick}
//           inputFieldPosition="inline"
//           autocomplete={true}
//           allowDragDrop={false}
//           placeholder="Add properties"
//           classNames={{
//             tags: 'flex',
//             tagInput: 'ml-2',
//             tagInputField:
//               'h-8 border rounded focus:outline-none focus:border-zinc-800',
//             tag: 'h-8 bg-zinc-800 text-white rounded-full px-4 mr-2',
//             remove: 'cursor-pointer ml-2 font-bold text-xl',
//             selected: 'flex flex-wrap',
//             suggestions:
//               'bg-zinc-200 border border-black border-t-0 p-1 text-base text-black rounded'
//             // activeSuggestion: 'font-bold'
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default FormSection;

import React from 'react';

const old = () => {
  return <div>old</div>;
};

export default old;
