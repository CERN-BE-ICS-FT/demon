import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Tree from '../../../pages/Tree/Tree';
import { treeData } from '../../../pages/Tree/TreeData';
import { useState } from 'react';

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
            className="text-white text-2xl font-bold mb-3 hover:underline"
          >
            DeMon-CERN
          </NavLink>
          <div>
            <NavLink to="/" className="text-white mr-4 hover:underline">
              Home
            </NavLink>
            <NavLink to="about" className="text-white mr-4 hover:underline">
              About
            </NavLink>
            <NavLink to="help" className="text-white mr-4 hover:underline">
              Help
            </NavLink>
            <NavLink to="careers" className="text-white mr-4 hover:underline">
              Careers
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="container flex-grow flex w-screen min-h-[calc(82vh)]">
        <aside className="flex-grow bg-gray-200 min-w-[250px] min-w-fit border-r-2 border-gray-300 p-4 flex flex-col items-start">
          {/* Add your content here */}
          <h1 className="p-2 w-fit">
            <Tree item={treeData} onItemNameClick={handleItemClick}></Tree>
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
