import React, {Fragment} from 'react';
import './styles.css';
import SectionHeader from '../components/SectionHeader';

const styles = {
  skillsPage: {
      // display: 'grid',
      // gridTemplateColumns: 'col col col'
      width: '100%',
  },
  treColumn: {
    // gridArea: 'col'
  }
}

const Skills = () => {
  return (
    <Fragment style={styles.skillsPage}>
      < SectionHeader headerText={'Skills'} color={'pink'} />
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
    </Fragment>
  )
}

export default Skills