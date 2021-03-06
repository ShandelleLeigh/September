import React from 'react';
import './App.css';
import Intro from './Pages/Intro'
import Socials from './Pages/socials'
import Skills from './Pages/Skills';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

const styles = {
  pageContainer: {
    gridColumn: '2 / -1 ',
  },
  app: {
    display: 'grid',
    gridTemplateColumns: '75px auto',
  },
}

function App() {
  return (
    <span className="App" style={styles.app}>
      <Socials/>
      <div className="Pages" style={styles.pageContainer} >
        <Intro className="Intro"/>
        <Skills className="Skills"/>
        <Resume/>
        <Contact/>
      </div>
    </span>
  );
}

export default App;
