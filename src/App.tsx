import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate
} from 'react-router-dom';
import './App.css';
import Rules from './pages/Rules/Rules';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './app/global/layouts/RootLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Configure from './pages/Configure/Configure';
import { useEffect } from 'react';

const RedirectToMonitor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/monitor');
  }, [navigate]);

  return null;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RedirectToMonitor />} />
      <Route path="/monitor" element={<Dashboard />} />
      <Route path="/monitor/:type/:id" element={<Dashboard />} />
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
