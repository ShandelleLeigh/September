import React from 'react';
import '../components/item.css';
import SectionHeader from '../components/SectionHeader';
import '../App.css';
import EmailIcon from '../assets/emailIcon';

const styles = {
  section: {
    height: 'max-content',
    paddingBottom: '20%',
    border: 'solid 5px #fe6b60',
  },
  inner: {
    padding: '1em',
    margin: '1em',
    height: '100%',
    lineHeight: '2.5em',
    color: 'white',
  },
}


const Contact = () => {
  return (
    <div style={styles.section} >
      <SectionHeader headerText={'Contact'} color={'pinkColors'} />
      <div style={styles.inner}>
      {/* <p>Here's a copy of <a href='public/Shandelle_Jensen_Resume.pdf' download="Shandelle_Jensen_Resume.pdf" >my resume</a></p> */}
        <p>
          I'm currently looking for a Jr Web Developer or QA position in Lehi or Salt Lake areas.
        </p>
        <p>
          If you have any feedback you can <span className='link'>
            <a href='mailto:shandellejensen90@gmail.com'>
              send me an email. &nbsp;
              <EmailIcon/>
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Contact