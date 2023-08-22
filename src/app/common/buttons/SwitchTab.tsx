import React, { useState } from 'react';

interface SwitchTabProps {
  onChange: (activeTab: 'members' | 'outsiders') => void;
}

const SwitchTab: React.FC<SwitchTabProps> = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState<'members' | 'outsiders'>(
    'members'
  );

  const switchTab = (tab: 'members' | 'outsiders') => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="border hover:border-zinc-800 rounded px-1 py-1 flex min-w-fit">
      <button
        className={`flex-1 text-center rounded-l ${
          activeTab === 'members' ? 'bg-zinc-800 text-white' : 'bg-zinc-200'
        }`}
        onClick={() => switchTab('members')}
      >
        Members
      </button>
      <button
        className={`flex-1 text-center rounded-r ${
          activeTab === 'outsiders' ? 'bg-zinc-800 text-white' : 'bg-zinc-200'
        }`}
        onClick={() => switchTab('outsiders')}
      >
        Non-members
      </button>
    </div>
  );
};

export default SwitchTab;
