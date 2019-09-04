import React, {Fragment} from 'react';
import './App.css';
import Intro from './Pages/Intro'
import Socials from './Pages/socials'
import Skills from './Pages/Skills';


const styles = {
  spacer: {
    // marginLeft: '75px',
  },
}


function App() {
  return (
    <span className="App">
      <Socials/>
      <span className="Pages" style={styles.spacer} >
        {/* <Intro className="Intro"/> */}
        <Skills className="Skills"/>
      </span>
    </span>
  );
}

export default App;
