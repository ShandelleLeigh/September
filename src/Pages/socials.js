import React from 'react';
import './styles.css';
import LinkedIn from '../assets/LinkedIn';

const Socials = () => {
  return (
    <div className='socials'>
      <div className='socIcons'><a
            target="_blank"
            href='https://www.linkedin.com/in/shandelle-lovato-10b635102/'
          >
          <LinkedIn/>
        </a></div>
      <div className='socIcons'><a
            target="_blank"
            href='https://www.linkedin.com/in/shandelle-lovato-10b635102/'
          >
          <LinkedIn/>
        </a></div>
      <div className='socIcons'>
        <a
            target="_blank"
            href='https://www.linkedin.com/in/shandelle-lovato-10b635102/'
          >
          <LinkedIn/>
        </a>
      </div>

    </div>
  )
}

export default Socials;