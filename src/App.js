import React from 'react';
import './App.css';
import Intro from './Pages/Intro'
import Socials from './Pages/socials'
import Skills from './Pages/Skills';


function App() {
  return (
    <div className="App">
      <Socials/>
      <div className="Pages" >
      {/* Word */}
        <Intro className="Intro"/>
        {/* <div className="first">
          1
        </div>
        <div className="snd">
          2
        </div> */}
        <Skills className="Skills"/>
      </div>
    </div>
  );
}

export default App;
