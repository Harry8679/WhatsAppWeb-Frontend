import React from 'react'

const Picture = ({ readablePicture }) => {
  return (
    <div className='mt-8 content-center dark:text-dark_text_1 space-y-1'>
      <label htmlFor="picture" className='text-sm font-bold tracking-wide'>
        Picture (Optional)
      </label>
      {readablePicture ? (
        <div>
            <img src={readablePicture} alt='about_me' />
        </div>
      ): (
        <div className='w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer'>
            Upload picture
        </div>
      )}
    </div>
  )
}

export default Picture;
