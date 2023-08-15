import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';
import Tree from '../../../pages/Tree/Tree';
import { treeData } from '../../../pages/Tree/TreeData';
import { useEffect, useState, useRef } from 'react';
import TreeNavBar from '../../../pages/Tree/TreeNavBar';
import TreeIconsRow from '../../common/rows/TreeIconsRow';
import Navbar from '../navbar/Navbar';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

const DEFAULT_LEFT_PANEL_SIZE = 21;

import React from 'react';

interface ResizeHandleProps {
  collapsed: boolean;
  expandPanel: () => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({
  collapsed,
  expandPanel
}) => {
  if (collapsed) {
    return (
      <div
        onClick={expandPanel}
        className="relative cursor-e-resize flex h-screen w-5 ml-5 flex-row items-center justify-center gap-px rounded-sm hover:bg-zinc-200 transition duration-200 text-transparent hover:text-black font-bold"
      >
        <span>&gt;</span>
      </div>
    );
  } else {
    return (
      <div className="relative cursor-col-resize flex h-screen w-1 flex-row items-center justify-center gap-px rounded-sm bg-zinc-200 hover:bg-zinc-800 transition duration-200">
        <div className="h-4 w-0.5 bg-zinc-200" />
      </div>
    );
  }
};

export default function RootLayout() {
  const [leftSize, setLeftSize] = useState(DEFAULT_LEFT_PANEL_SIZE);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const panelRef = useRef<any>(null); // Reference to Panel

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

  const handleExpandPanel = () => {
    if (panelRef.current) {
      panelRef.current.resize(DEFAULT_LEFT_PANEL_SIZE);
      setIsCollapsed(false);
    }
  };

  return (
    <div className="root-layout min-h-screen min-w-screen bg-white">
      <Navbar></Navbar>
      <div className="container flex-grow flex w-screen h-screen">
        <PanelGroup direction="horizontal" className="relative">
          <Panel
            ref={panelRef}
            defaultSize={DEFAULT_LEFT_PANEL_SIZE}
            order={1}
            minSize={10}
            onResize={setLeftSize}
            collapsible={true}
            collapsedSize={0}
            onCollapse={setIsCollapsed}
            className="bg-zinc-200 flex-grow"
          >
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
            <h1 className="pl-2 w-fit">
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
          </Panel>
          <PanelResizeHandle
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${leftSize}%`
            }}
          >
            <ResizeHandle
              collapsed={isCollapsed}
              expandPanel={handleExpandPanel}
            />
          </PanelResizeHandle>
          <Panel order={2}>
            <main className="p-4 flex-grow bg-white">
              <Outlet />
            </main>
          </Panel>
        </PanelGroup>
      </div>
      <Footer />
    </div>
  );
}
