import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Tree from '../../../pages/Tree/Tree';
import { treeData } from '../../../pages/Tree/TreeData';
import { useState } from 'react';
import TreeNavBar from '../../../pages/Tree/TreeNavBar';
import TreeIconsRow from '../../common/rows/TreeIconsRow';
import playButton from './play.png';
import settingsIcon from './settings.png';
import helpIcon from './help.png';

export default function RootLayout() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (itemName: string) => {
    console.log(itemName);
    setSelectedItem(itemName);
  };

  return (
    <div className="root-layout min-h-screen min-w-screen bg-gray-100">
      <header>
        <nav className="bg-blue-700 p-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-white text-2xl font-bold hover:underline"
          >
            DeMon++
          </NavLink>
          <div className="flex">
            {' '}
            <NavLink to="/" className="text-white mr-4 hover:underline">
              <img src={playButton} alt="Operate" className="w-7 h-7" />
            </NavLink>
            <NavLink to="catalog" className="text-white mr-4 hover:underline">
              <img src={settingsIcon} alt="Settings" className="w-7 h-7" />
            </NavLink>
            <NavLink to="help" className="text-white mr-4 hover:underline">
              <img src={helpIcon} alt="Help" className="w-7 h-7" />
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="container flex-grow flex w-screen min-h-[calc(88vh)]">
        <aside className="flex-grow bg-gray-200 min-w-[350px] border-r-2 border-gray-300 p-2 flex flex-col items-start w-fit max-w-[300px]">
          {' '}
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
