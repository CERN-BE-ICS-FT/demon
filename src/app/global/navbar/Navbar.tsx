import { NavLink } from 'react-router-dom';
import playButton from './play.png';
import settingsIcon from './settings.png';
import helpIcon from './help.png';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
