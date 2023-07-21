import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './app/global/layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
