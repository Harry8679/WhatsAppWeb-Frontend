import React, { useRef, useState } from 'react'

const Picture = ({ readablePicture }) => {
  const [error, setError] = useState('');
  const inputRef = useRef();
  const handlePicture = (e) => {
    let pic = e.target.files[0];

    // Vérifiez si un fichier a bien été sélectionné
    if (!pic) {
      setError("Aucun fichier n'a été sélectionné.");
      return;
    }
    
    if (pic.type !== 'image/jpeg' && pic.type !== 'image/png' && pic.type !== 'image/webp') {
      setError(`${pic.name} format is not supportable.`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      setError(`${pic.name} is too large, maximum 5mb allowed.`);
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
      {/* Error */}
      <div className="mt-2">
        <p className="text-red-400">{error}</p>
      </div>
    </div>
  )
}

export default Picture;
