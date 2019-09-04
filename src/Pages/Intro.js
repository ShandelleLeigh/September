import React, {Fragment} from 'react';
import './styles.css';

const styles = {
  textContainer : {
    paddingLeft: 'calc(30vw - 75px)',
    marginTop: '25vh',
    float: 'left',
    height: '100%',
    width: '100%',
  },
  container: {
    // float: 'left',
    height: '100%',
    // width: 'calc(100vw )',
    width: 'calc(100vw - 76px)',
    // width: '100%',
    marginLeft: '76px',
  },
  polygon: {
    float: 'right',
    height: '90vh',
    // width: 'calc(100vw - 76px)',
    width: 'calc(100%)',
    backgroundColor: 'pink',
    // marginTop: '10vh',
    // marginLeft: '76px',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
    shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',
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