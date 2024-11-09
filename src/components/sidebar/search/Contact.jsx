import React from 'react'

const Contact = () => {
  return (
    <div className='list-none h-[72px] hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]'>
      {/* Container */}
      <div className='flex items-center gap-x-3 py-[10px]'>
        {/* Contact infos */}
        <div className='flex items-center gap-x-3'>
            {/* Conversation user picture */}
            <div className='relative min-w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img src={convo.picture ? convo.picture : 'https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg'} 
                    alt={convo.name} className='w-full h-full object-cover' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
