import React, {Fragment} from 'react';
import './styles.css';
import SectionHeader from '../components/SectionHeader';

const styles = {
  colContainer:{
    height: '100%',
    width: '100%',
    display: 'grid',
    // grid: '12% 25% 25% 25% 12%',
    padding: '10% 0',
    fontSize: '1.7em',
    gridAutoFlow: 'column',
    justifyContent: 'space-evenly',
  },
  gridCol: {
    gridColumn: 'auto',
    width: 'fit-content',
    alignContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
}

const list = [
  [
    'JavaScript',
    'TypeScript',
    'Ruby',
    'PHP',
    'SQL',
    'Unit Testing & Jest'
  ],
  [
    'React.js',
    'Material-UI',
    'Materiailze-UI',
    'Bootstrap',
  ],
  [
    'Git',
    'Github & Bitbucket',
    'Agile/Scrum',
    'PostgreSQL',
    'Docker',
  ],
];

const Skills = () => {
  return (
    <Fragment>
      <SectionHeader headerText={'Skills'} color={'pink'} />
      <div style={styles.colContainer}>
      {
        list.map(
           column => (
            <span style={styles.gridCol}>
              {
                column.map(
                  item => <div>{item}</div>
                )
              }
            </span>
          )
        )
      }
      </div>
    </Fragment>
  )
}

export default Skills