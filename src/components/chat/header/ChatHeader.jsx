import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {
  const { activeConversation } = useSelector((state) => state.chat);
  const { name, picture } = activeConversation;
  return (
    <div className='h-[59px] dark:bg-dark_bg_2 flex items-center p-16 select-none'>
      {/* Container */}
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-x-4'>
            {/* Conversation Img */}
            <button className='btn'>
                <img src={picture} alt={`${name} pic`} className='w-full h-full rounded-full object-cover' />
            </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
