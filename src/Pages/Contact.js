import React from 'react';
import '../components/item.css';
import SectionHeader from '../components/SectionHeader';

const styles = {
  section: {
    height: '100vh',
    border: 'solid 10px #fe6b60',
    color: '',
  },
  inner: {
    // backgroundColor: 'white',
    // color: 'black',
    padding: '1em',
    margin: '1em',
    height: '100%',
  }
}

const Contact = () => {
  return (
    <div style={styles.section} >
      <SectionHeader headerText={'Contact'} color={'coolColors'} />
      < div style={styles.inner}>
        <p>
          I'm currently looking for a Jr Web Developer or QA position in Lehi or Salt Lake areas.
          If you have any leads or feedback you can
          <a href='mailto:shandellejensen90@gmail.com'> send me an email. </a>
        </p>
      </div>
    </div>
  )
}

export default Contact