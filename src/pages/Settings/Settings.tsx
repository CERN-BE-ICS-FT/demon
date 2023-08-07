import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './Admin';
import Harddrive from './Harddrive';
import Neo4j from './Neo4j';

const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabNames = ['harddrive', 'admin', 'neo4j'];

  const currentTab = tabNames.indexOf(location.pathname.split('/').pop() ?? '');

  return (
    <div>
      <div className="flex border-b">
        <button
          className={`py-2 px-4 ${
            currentTab === 0 ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => navigate('harddrive')}
        >
          HardDrive
        </button>
        <button
          className={`py-2 px-4 ${
            currentTab === 1 ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => navigate('admin')}
        >
          Admin Panel
        </button>
        <button
          className={`py-2 px-4 ${
            currentTab === 2 ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => navigate('neo4j')}
        >
          Neo4j Browser
        </button>
      </div>

      <Routes>
        <Route path="harddrive" element={<Harddrive />} />
        <Route path="admin" element={<Admin />} />
        <Route path="neo4j" element={<Neo4j />} />
      </Routes>
    </div>
  );
};

export default Settings;
