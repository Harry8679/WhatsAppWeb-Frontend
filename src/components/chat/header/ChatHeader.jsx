import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {
  const { activeConversation } = useSelector((state) => state.chat);
  const { name, picture } = activeConversation;
  console.log('name', name);
  console.log('picture', picture);
  return (
    <div className='h-[59px] dark:bg-dark_bg_2 flex items-center p-16 select-none'>
      {/* Container */}
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-x-4'>
            {/* Conversation Img */}
            <button className='btn !min-w-[40px] !max-w-[40px]'>
                <img src={picture ? picture : 'https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg'} alt={`${name} pic`} className='w-full h-full rounded-full object-cover' />
            </button>
            {/* Conversation name and online status */}
            <div className='flex flex-col'>
                <h1 className='dark:text-white text-md font-bold'>{name.split(' ')[0]}</h1>
                <span className='text-xs dark:text-dark_svg_2'>online</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader;
