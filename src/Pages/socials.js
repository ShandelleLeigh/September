import React from 'react';
import LinkedIn from '../assets/LinkedIn';
import GitHub from '../assets/GitHub';

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
    gridAutoFlow: 'row',
    justifyContent: 'center',
    alignContent: 'end',
  },
  socIcons: {
    marginBottom: '16px',
    width: '50px',
    height: '50px',
  },
  socHeading: {
    marginBottom: '16px',
    width: '50px',
    height: '200px',
    order: '1',
  },
}

const Socials = () => {
  return (
    <div style={styles.socials}>
      <div style={styles.socIcons}>
        <GitHub/>
      </div>
      <div style={styles.socIcons}>
        <a href='https://www.linkedin.com/in/shandelle-leigh/' >
          <LinkedIn/>
        </a>
      </div>
    </div>
  )
}

export default Socials;