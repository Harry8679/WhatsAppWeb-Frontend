import React from 'react'

const Conversation = ({ convo }) => {
  return (
    // Container
    <div className='relative w-full flex items-center justify-between py-[10px]'>
      {/* Left */}
      <div className='flex items-center gap-x-3'>
        {/* Conversation user picture */}
        <div className='relative min-w-[50px] h-[50px] rounded-full overflow-hidden'>
            <img src={convo.picture ? convo.picture : 'https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg'} 
                alt={convo.name} className='w-full h-full object-cover' />
            {/* {convo?.latestMessage?.message} */}
        </div>
      </div>
    </div>
  )
}

export default Conversation
