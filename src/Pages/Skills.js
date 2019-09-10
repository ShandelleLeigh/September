import React, {Fragment} from 'react';
import './styles.css';
import SectionHeader from '../components/SectionHeader';

const styles = {
  colContainer:{
    height: '100%',
    width: '100%',
    display: 'grid',
    grid: '12% 25% 25% 25% 12%',
  },
  col1: {
    gridColumn: '2/3'
  },
  col2: {
    gridColumn: '3/4'
  },
  col3: {
    gridColumn: '4/5'
  },
}

const Skills = () => {
  return (
    <Fragment>
      <SectionHeader headerText={'Skills'} color={'pink'} />
      <div style={styles.colContainer}>
        <div style={styles.col1}>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Ruby</div>
          <div>PHP</div>
          <div>SQL</div>
          <div>Unit Testing with Jest</div>
        </div>
        <div style={styles.col2}>
          <div>React.js</div>
          <div>Material-UI</div>
          <div>Materiailze-UI</div>
          <div>Bootstrap</div>
        </div>
        <div style={styles.col3}>
          <div>Git</div>
          <div>Github, Bitbucket</div>
          <div>Agile/Scrum</div>
          <div>PostgreSQL</div>
          <div>Docker</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Skills