import React, { useState } from 'react'
import SidebarHeader from './header/SidebarHeader';
import { Notifications } from './notifications';
import Search from './search';
import { Conversations } from './conversations';

const Sidebar = () => {
  const [searchResults, setSearchRgesults] = useState([]);
//   const [searchResults] = useState([]);
  return (
    <div className='w-[40%] h-full select-none'>
      {/* Sidebar Header */}
      <SidebarHeader />
      {/* Notifications */}
      <Notifications />
      {/* Search */}
      <Search searchLength={searchResults.length} searchResults={setSearchRgesults} />
      {/* Conversations */}
      <Conversations />
    </div>
  )
}

export default Sidebar;
