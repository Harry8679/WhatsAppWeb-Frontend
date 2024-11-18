import React from 'react'
// import moment from 'moment';
import { dateHandler } from '../../../utils/date';
import { useDispatch, useSelector } from 'react-redux';
import { open_create_conversation } from '../../../features/chatSlice';
import { getConversationId } from '../../../utils/chat';

const Conversation = ({ convo }) => {
  // console.log(moment(convo?.latestMessage?.createdAt).fromNow(true));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;
    // console.log(convo);
  const values = {
    receiver_id: getConversationId(user, convo.users),
    token
  };
  const openConversation = () => {
    dispatch(open_create_conversation(values));
  };

  return (
    <li onClick={() => openConversation()} className='list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_bg_2'>
        {/* Container */}
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
                            <p>{convo?.latestMessage?.message.length > 25 ? `${convo?.latestMessage?.message.substring(0, 25)}...`: convo?.latestMessage?.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Right */}
        <div className='flex flex-col gap-y-4 items-end text-xs'>
            <span className='dark:text-dark_text_2'>{convo.latestMessage?.createdAt ? dateHandler(convo.latestMessage?.createdAt) : 'date non indiquée'}</span>
        </div>
        </div>
        {/* Border */}
        <div className='ml-16 border-b border-b-dark_border_1'></div>
    </li>
  )
}

export default Conversation;
