import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import Tree from '../../../pages/Tree/Tree';
import { treeData } from '../../../pages/Tree/TreeData';
import { useEffect, useState } from 'react';
import TreeNavBar from '../../../pages/Tree/TreeNavBar';
import TreeIconsRow from '../../common/rows/TreeIconsRow';
import Navbar from '../navbar/Navbar';

export default function RootLayout() {
  const [selectedItem, setSelectedItem] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split('/');

  const isInSettings = location.pathname.startsWith('/settings');

  useEffect(() => {
    if (
      (pathParts[2] === 'rules' || pathParts[2] === 'nodes') &&
      !pathParts[3]
    ) {
      setSelectedItem('');
    }
    if (pathParts[1] === 'monitor' && !pathParts[2]) {
      setSelectedItem('');
    }
  }, [location.pathname]);

  const handleItemClick = (itemName: string) => {
    const encodedItemName = encodeURIComponent(itemName);

    if (pathParts[1] === 'monitor' || !pathParts[1]) {
      navigate(`/monitor/${encodedItemName}`);
      setSelectedItem(itemName);
    } else if (pathParts[2] === 'rules') {
      navigate(`configure/rules/${encodedItemName}`);
      setSelectedItem(itemName);
    } else if (pathParts[2] === 'nodes') {
      navigate(`/configure/nodes/${encodedItemName}`);
      setSelectedItem(itemName);
    }
  };

  return (
    <div className="root-layout min-h-screen min-w-screen bg-white">
      <Navbar></Navbar>
      <div className="container flex-grow flex w-screen min-h-[calc(88vh)]">
        {!isInSettings && (
          // <aside className="flex-grow bg-zinc-200 min-w-[340px] border-r-2 border-zinc-800 p-2 flex flex-col items-start w-fit max-w-[300px]">
          <aside className="flex-grow bg-zinc-200 min-w-[340px]  p-2 flex flex-col items-start w-fit max-w-[300px]">
            <TreeNavBar />
            {pathParts[1] !== 'monitor' ? (
              <TreeIconsRow
                isActive={selectedItem !== ''}
                activeItem={selectedItem}
                resetSelectedItem={() => setSelectedItem('')}
              />
            ) : (
              <br></br>
            )}
            <h1 className="pl-2 pt-2 w-fit">
              {pathParts[1] !== 'monitor' ? (
                <Tree
                  item={treeData}
                  onItemNameClick={handleItemClick}
                  activeNode={selectedItem}
                  useMonoColor={true}
                ></Tree>
              ) : (
                <Tree
                  item={treeData}
                  onItemNameClick={handleItemClick}
                  activeNode={selectedItem}
                ></Tree>
              )}
            </h1>
          </aside>
        )}
        <main className="p-4 flex-grow bg-white">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
