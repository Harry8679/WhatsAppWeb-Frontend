import React from 'react'
import SidebarHeader from './header/SidebarHeader';
import { Notifications } from './notifications';
import Search from './search';

const Sidebar = () => {
  return (
    <div className='w-[40%] h-full select-none'>
      {/* Sidebar Header */}
      <SidebarHeader />
      {/* Notifications */}
      <Notifications />
      {/* Search */}
      <Search />
    </div>
  )
}

export default Sidebar;
