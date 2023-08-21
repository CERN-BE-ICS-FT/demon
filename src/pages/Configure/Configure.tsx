import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import Rules from '../Rules/Rules';
import Nodes from '../Nodes/Nodes';

const Configure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabNames = ['rules', 'nodes'];

  const currentTab = tabNames.indexOf(location.pathname.split('/')[2] ?? '');
  const pathParts = location.pathname.split('/');

  const handleTabClick = (tabName: string) => {
    if (pathParts[3]) {
      navigate(`${tabName}/${pathParts[3]}`);
    } else {
      navigate(tabName);
    }
  };

  return (
    <div>
      <div className="flex border-b ">
        <button
          className={`py-2 px-4 ${
            currentTab === 0 ? 'border-b-2 border-zinc-900' : ''
          }`}
          onClick={() => handleTabClick('rules')}
        >
          Rules
        </button>
        <button
          className={`py-2 px-4 ${
            currentTab === 1 ? 'border-b-2 border-zinc-900' : ''
          }`}
          onClick={() => handleTabClick('nodes')}
        >
          Properties
        </button>
      </div>

      <Routes>
        <Route path="rules/*" element={<Rules />} />
        <Route path="nodes/*" element={<Nodes />} />
      </Routes>
    </div>
  );
};

export default Configure;
