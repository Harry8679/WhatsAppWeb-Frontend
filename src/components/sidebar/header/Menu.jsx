import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../features/userSlice';

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <div className='absolute right-1 z-50 dark:bg-dark_bg_2 dark:text-dark_text_1 shadow-md w-52'>
      <ul>
        <li className='py-3 pl-5 cursor-pointer hover:bg-dark_bg_3'><span>New Group</span></li>
        <li className='py-3 pl-5 cursor-pointer hover:bg-dark_bg_3'><span>New Community</span></li>
        <li className='py-3 pl-5 cursor-pointer hover:bg-dark_bg_3'><span>Starred messaged</span></li>
        <li className='py-3 pl-5 cursor-pointer hover:bg-dark_bg_3'><span>Setting</span></li>
        <li onClick={() => dispatch(logout())} className='py-3 pl-5 cursor-pointer hover:bg-dark_bg_3'><span>Logout</span></li>
      </ul>
    </div>
  )
}

export default Menu
