import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Rules from './pages/Rules/Rules';
import Catalog from './pages/Catalog/Catalog';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './app/global/layouts/RootLayout';
import Dashboard from './pages/Dashboard/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/monitor" element={<Dashboard />} />
      <Route path="/monitor/:deviceName" element={<Dashboard />} />
      <Route path="rules" element={<Rules />} />
      <Route path="rules/:deviceName" element={<Rules />} />
      <Route path="catalog" element={<Catalog />} />
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
