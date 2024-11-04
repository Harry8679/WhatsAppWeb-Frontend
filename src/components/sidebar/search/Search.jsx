import React, { useState } from 'react'
import { ReturnIcon, SearchIcon } from '../../../svg';

const Search = ({ searchLength }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='h-[49px] py-1.5'>
      {/* Container */}
      <div className='px-[10px]'>
        {/* Search input container */}
        <div className='flex items-center gap-x-2'>
          <div className='w-full dark:bg-dark_bg_2 rounded-lg pl-2'>
            {show || searchLength > 0 ? (
              <span className='w-8 flex items-center justify-center rotateAnimation'>
                <ReturnIcon className='fill-green_1 w-5' />
              </span>
            ) : (
              <span className='w-8 flex items-center justify-center'>
                <SearchIcon className='dark:fill-dark_svg_2 w-5' />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
