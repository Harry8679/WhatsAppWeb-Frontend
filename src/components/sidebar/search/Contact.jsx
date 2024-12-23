import React from 'react'
import { open_create_conversation } from '../../../features/chatSlice';
import { useDispatch, useSelector } from 'react-redux';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { token } = user;
    console.log('contact', contact);
    const values = {
      receiver_id: contact._id,
      token
    };
    const openConversation = () => {
      dispatch(open_create_conversation(values));
    };
  return (
    <div onClick={() => openConversation()} className='list-none h-[72px] hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]'>
      {/* Container */}
      <div className='flex items-center gap-x-3 py-[10px]'>
        {/* Contact infos */}
        <div className='flex items-center gap-x-3'>
            {/* Conversation user picture */}
            <div className='relative min-w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img src={contact.picture ? contact.picture : 'https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg'} 
                    alt={contact.name} className='w-full h-full object-cover' />
            </div>
            {/* Conversation name and message */}
            <div className='w-full flex flex-col'>
                {/* Conversation name */}
                <h1 className='font-bold flex items-center gap-x-2 text-white'>{contact.name}</h1>
                {/* Conversation message */}
                <div>
                    <div className='flex items-center gap-x-1 dark:text-dark_text_2'>
                        <div className='flex-1 items-center gap-x-1 dark:text-dark_text_2'>
                            <p>{contact?.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
