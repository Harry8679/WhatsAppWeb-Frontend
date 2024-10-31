import React, { useRef } from 'react'

const Picture = ({ readablePicture }) => {
  const inputRef = useRef();
  const handlePicture = (e) => {
    let pic = e.target.files[0];
    if (pic.type !== 'image/jpeg' && pic.type !== 'image/png' && pic.type !== 'image/webp') {
      return;
    }
  }
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
        <div className='w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer' onClick={() => inputRef.current.click()}>
            Upload picture
        </div>
      )}
      <input type="file" name='picture' id='picture' hidden ref={inputRef} accept='image/png, image/jpeg, image/webp' onChange={handlePicture}/>
    </div>
  )
}

export default Picture;
