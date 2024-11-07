import React from 'react'
import moment from 'moment';

const Conversation = ({ convo }) => {
  console.log(moment(convo?.latestMessage?.createdAt).fromNow(true));
  return (
    // Container
    <div className='relative w-full flex items-center justify-between py-[10px]'>
      {/* Left */}
      <div className='flex items-center gap-x-3'>
        {/* Conversation user picture */}
        <div className='relative min-w-[50px] h-[50px] rounded-full overflow-hidden'>
            <img src={convo.picture ? convo.picture : 'https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg'} 
                alt={convo.name} className='w-full h-full object-cover' />
        </div>
        {/* Conversation name and message */}
        <div className='w-full flex flex-col'>
            {/* Conversation name */}
            <h1 className='font-bold flex items-center gap-x-2 text-white'>{convo.name}</h1>
            {/* Conversation message */}
            <div>
                <div className='flex items-center gap-x-1 dark:text-dark_text_2'>
                    <div className='flex-1 items-center gap-x-1 dark:text-dark_text_2'>
                        <p>{convo?.latestMessage?.message}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* Right */}
      <div className='flex flex-col gap-y-4 items-end text-xs'>
        <span className='dark:text-dark_text_2'>{convo.latestMessage?.createdAt ? convo.latestMessage?.createdAt : 'date non indiquée'}</span>
      </div>
    </div>
  )
}

export default Conversation
