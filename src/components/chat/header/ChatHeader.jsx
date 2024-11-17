import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {
  const { activeConversation } = useSelector((state) => state.chat);
  const { name, picture } = activeConversation;
  return (
    <div>
      Chat Header
    </div>
  )
}

export default ChatHeader
