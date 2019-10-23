
import React from 'react';

const styles = {
  linkedIn: {
    display: 'inline-block',
    minWidth: '34px',
    minHeight: '34px'
  },
}

const LinkedinBadge = () =>{
  return (
    <div style={styles.linkedIn}>
      <svg
        fill="#FFFFFF"
        fillRule="evenodd"
        viewBox="0 0 34 34"
        preserveAspectRatio="xMidYMid meet"
        width='100%'
        height='100%'
      >
        <path
          d="M2.8,34 L31.2,34 C32.746,34 34,32.746 34,31.2 L34,2.8 C34,1.254 32.746,0 31.2,0 L2.8,0 C1.254,0 0,1.254 0,2.8 L0,31.2 C0,32.746 1.254,34 2.8,34 Z M13,13 L17.75,13 L17.75,15.391 C18.387,14.114 20.242,12.75 22.695,12.75 C27.397,12.75 29,14.875 29,19.922 L29,29 L24,29 L24,20.984 C24,18.328 23.481,16.875 21.542,16.875 C18.921,16.875 18,18.867 18,20.984 L18,29 L13,29 L13,13 Z M5,29 L10,29 L10,13 L5,13 L5,29 Z M10.55,7.5 C10.55,9.184 9.184,10.55 7.5,10.55 C5.816,10.55 4.45,9.184 4.45,7.5 C4.45,5.815 5.816,4.45 7.5,4.45 C9.184,4.45 10.55,5.815 10.55,7.5 Z"
          fill="#0077B5">
        </path>
      </svg>
    </div>
  )
}

export default LinkedinBadge