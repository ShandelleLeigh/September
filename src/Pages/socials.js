import React from 'react';
import LinkedIn from '../assets/LinkedIn';

const styles = {
  socials: {
    backgroundColor: '#4abef2',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.3), 0px 4px 5px 0px rgba(0,0,0,0.2), 0px 1px 10px 0px rgba(0,0,0,0.2)',
    minWidth: '50px',
    width: '75px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'grid',
    grid: 'auto',
    gridAutoRows: 'max-content',
    justifyContent: 'center',
    alignContent: 'end',
    zIndex: '10',
  },
  socIcons: {
    marginBottom: '16px',
    width: '50px',
    height: '50px',
  },
}

const Socials = () => {
  return (
    <div style={styles.socials}>
      <div style={styles.socIcons}>
        <a target="_blank" href='https://www.linkedin.com/in/shandelle-lovato-10b635102/' >
          <LinkedIn/>
        </a>
      </div>
      <div style={styles.socIcons}>
        <a target="_blank" href='https://www.linkedin.com/in/shandelle-lovato-10b635102/' >
          <LinkedIn/>
        </a>
      </div>
      <div style={styles.socIcons}>
        <a target="_blank" href='https://www.linkedin.com/in/shandelle-lovato-10b635102/' >
          <LinkedIn/>
        </a>
      </div>

    </div>
  )
}

export default Socials;