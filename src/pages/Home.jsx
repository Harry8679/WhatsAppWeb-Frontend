import React, { useEffect } from 'react'
import { Sidebar } from '../components/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getConversations } from '../features/chatSlice';
import { ChatContainer, WhatsappHome } from '../components/chat';
// import ChatHeader from '../components/chat/header/ChatHeader';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  console.log('activeConversation', activeConversation);

  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user, dispatch]);
  return (
    <div className='h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden'>
      {/* container */}
      <div className="container h-screen flex">
        {/* sidebar */}
        <Sidebar />
        {activeConversation._id ? <ChatContainer /> : <WhatsappHome />}
      </div>
    </div>
  )
}

export default Home;
