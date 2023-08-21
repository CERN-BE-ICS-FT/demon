import { NavLink } from 'react-router-dom';
import playButton from '../../../assets/icons/play.png';
import settingsIcon from '../../../assets/icons/settings.png';
import helpIcon from '../../../assets/icons/help.png';
import editIcon from '../../../assets/icons/edit.png';

const Navbar = () => {
  return (
    <header>
      <nav className="bg-zinc-800 p-2 flex justify-between items-center min-w-full">
        <NavLink
          to="/"
          className="text-white text-xl font-bold hover:underline"
        >
          DeMon++
        </NavLink>
        <div className="flex">
          {' '}
          <NavLink to="/monitor" className="text-white mr-3 hover:underline">
            <img src={playButton} alt="Liveview" className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="/configure/rules"
            className="text-white mr-3 hover:underline"
          >
            <img src={editIcon} alt="Configure" className="w-5 h-5" />
          </NavLink>
          <NavLink
            to="settings/admin"
            className="text-white mr-3 hover:underline"
          >
            <img src={settingsIcon} alt="Settings" className="w-5 h-5" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
