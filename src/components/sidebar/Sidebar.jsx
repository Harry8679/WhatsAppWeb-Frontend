import React, { useState } from 'react'
import SidebarHeader from './header/SidebarHeader';
import { Notifications } from './notifications';
import { Search, SearchResults } from './search';
import { Conversations } from './conversations';

const Sidebar = () => {
  const [searchResults, setSearchRgesults] = useState([]);
  console.log(searchResults);
  return (
    <div className='w-[40%] h-full select-none'>
      {/* Sidebar Header */}
      <SidebarHeader />
      {/* Notifications */}
      <Notifications />
      {/* Search */}
      <Search searchLength={searchResults.length} setSearchResults={setSearchRgesults} />
      {searchResults.length > 0 ? (
        <>
          {/* SearchResults */}
          <SearchResults />
        </>
      ): (
        <>
          {/* Conversations */}
          <Conversations />
        </>
      )}
    </div>
  )
}

export default Sidebar;
