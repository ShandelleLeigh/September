import React from 'react';
import './styles.css';

const styles = {
  textContainer : {
    paddingLeft: 'calc(30vw - 75px)',
    marginTop: '25vh',
  },
  container: {
    float: 'left',
  },
  polygon: {
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
    backgroundColor: 'pink',
    shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',
    float: 'right',
    width: '100vw',
    height: '90vh',
    marginTop: '10vh',
    boxShadow: '-1px -2px 4px -1px rgba(0,0,0,0.3), -1px -4px 5px 0px rgba(0,0,0,0.2), -1px -1px 10px 0px rgba(0,0,0,0.2)',
  },
}

const Intro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.polygon}/>
      <div style={styles.textContainer}>
        <h1>Hello,</h1>
        <h3>I'm Shandelle Lovato</h3>
        <h4>Front-End Web Developer</h4>
      </div>
    </div>
  )
}

export default Intro