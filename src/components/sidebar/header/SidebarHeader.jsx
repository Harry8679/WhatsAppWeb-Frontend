import React from 'react'
import { useSelector } from 'react-redux'

const SidebarHeader = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className='h-[50px] dark:bg-dark_bg_2 flex items-center p16'>
      {/* Container */}
      <div className="w-full flex items-center justify-between">
        {/* user image */}
        <button className='btn'>
            <img src={user.picture} alt="user" />
        </button>
      </div>
    </div>
  )
}

export default SidebarHeader
