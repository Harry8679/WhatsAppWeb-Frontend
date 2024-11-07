import React from 'react'

const Conversation = ({ convo }) => {
  return (
    <div className='h-[800px]'>
      {convo?.latestMessage?.message}
    </div>
  )
}

export default Conversation
