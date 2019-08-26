import React from 'react';
// import './styles.css';

const styles = {
  skillsPage: {
      // display: 'grid',
      // gridTemplateColumns: 'col col col'

  },
  treColumn: {
    // gridArea: 'col'
  }
}

const Skills = () => {
  return (
    <div style={styles.skillsPage}>
        <div style={styles.treColumn}>
          <h2>Languages</h2>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Ruby</div>
          <div>PHP</div>
          <div>SQL</div>
          <div>Unit Testing with Jest</div>
        </div>
        <div style={styles.treColumn}>
          <h2>Frameworks<br/>/ Libraries</h2>
          <div>React.js</div>
          <div>Material-UI</div>
          <div>Materiailze-UI</div>
          <div>Bootstrap</div>
        </div>
        <div style={styles.treColumn}>
          <h2>Tools</h2>
          <div>Git</div>
          <div>Github, Bitbucket</div>
          <div>Agile/Scrum</div>
          <div>PostgreSQL</div>
          <div>Docker</div>
        </div>
    </div>
  )
}

export default Skills