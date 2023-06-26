import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-gray-100">
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
      <div className="container flex h-[calc(100vh-156px)]">
        <aside className="w-1/4 bg-gray-200 h-full border-r-2 border-gray-300 p-4 flex flex-col items-start">
          {/* Add your content here */}
          <h1 className="p-8">Tree</h1>
        </aside>
        <main className="p-4 w-3/4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
