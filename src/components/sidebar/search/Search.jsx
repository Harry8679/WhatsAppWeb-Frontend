import React, { useState } from 'react'

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='h-[49px] py-1.5'>
      {/* Container */}
      <div className='px-[10px]'>
        {/* Search input container */}
        <div className='flex items-center gap-x-2'>
          <div className='w-full dark:bg-dark_bg_2 rounded-lg pl-2'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;
