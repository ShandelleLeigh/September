import React, {Fragment} from 'react';
// import './styles.css';

const styles = {
  textContainer : {
    paddingLeft: 'calc(25vw - 75px)',
    paddingTop: '30vh',
    height: '70vh', // Has to account for padding top
    width: '100%',
  },
  container: {
    height: '100vh',
    gridRow: '1/ span 1',
  },
  container: {
    ':after': {
      float: 'none',
    },
  },
  polygon: {
    float: 'right',
    height: '100vh',
    width: 'calc(100%)',
    backgroundColor: 'pink',
    clipPath: 'polygon(95% 0px, 100% 0px, 100% 100%, 0px 100%, 0px 96%)',
    shapeOutside: 'polygon(0 96%, 0 100%, 100% 100%, 100% 0, 95% 0, 0 97%)',
    boxShadow: '-1px -2px 4px -1px rgba(0,0,0,0.3), -1px -4px 5px 0px rgba(0,0,0,0.2), -1px -1px 10px 0px rgba(0,0,0,0.2)',
  },
}

const Intro = () => {
  return (
    <Fragment>
      <div style={styles.container} className='container'>
        <div style={styles.polygon}/>
        <div style={styles.textContainer}>
          <h1>Hello,</h1>
          <h3>I'm Shandelle Lovato</h3>
          <h4>Front-End Web Developer</h4>
        </div>
      </div>
    </Fragment>
  )
}

export default Intro