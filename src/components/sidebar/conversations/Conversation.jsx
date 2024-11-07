import React from 'react'

const Conversation = ({ convo }) => {
  return (
    <div>
      {convo?.latestMessage?.message}
    </div>
  )
}

export default Conversation
