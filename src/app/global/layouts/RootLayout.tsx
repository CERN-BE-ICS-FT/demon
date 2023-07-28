import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Tree from '../../../pages/Tree/Tree';
import { treeData } from '../../../pages/Tree/TreeData';
import { useState } from 'react';
import TreeNavBar from '../../../pages/Tree/TreeNavBar';
import TreeIconsRow from '../../common/rows/TreeIconsRow';
import Navbar from '../navbar/Navbar';

export default function RootLayout() {
  const [selectedItem, setSelectedItem] = useState('');

  const navigate = useNavigate();

  const handleItemClick = (itemName: string) => {
    const encodedItemName = encodeURIComponent(itemName);
    console.log(encodedItemName);
    navigate(`/rules/${encodedItemName}`);
    setSelectedItem(itemName);
  };

  return (
    <div className="root-layout min-h-screen min-w-screen bg-gray-100">
      <Navbar></Navbar>
      <div className="container flex-grow flex w-screen min-h-[calc(88vh)]">
        <aside className="flex-grow bg-gray-200 min-w-[340px] border-r-2 border-gray-300 p-2 flex flex-col items-start w-fit max-w-[300px]">
          <TreeNavBar />
          <TreeIconsRow
            isActive={selectedItem !== ''}
            activeItem={selectedItem}
            resetSelectedItem={() => setSelectedItem('')}
          />
          <h1 className="pl-2 w-fit">
            <Tree
              item={treeData}
              onItemNameClick={handleItemClick}
              activeNode={selectedItem}
            ></Tree>
          </h1>
        </aside>
        <main className="p-4 flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
