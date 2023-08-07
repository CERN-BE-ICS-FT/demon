import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Rules from './pages/Rules/Rules';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './app/global/layouts/RootLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Tree from './pages/Tree/Tree';
import { treeData } from '../src/pages/Tree/TreeData';
import Configure from './pages/Configure/Configure';
import Nodes from './pages/Nodes/Nodes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/monitor" element={<Dashboard />} />
      <Route path="/monitor/:deviceName" element={<Dashboard />} />
      <Route path="rules" element={<Rules />} />
      <Route path="rules/:deviceName" element={<Rules />} />
      <Route path="/configure/*" element={<Configure />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
