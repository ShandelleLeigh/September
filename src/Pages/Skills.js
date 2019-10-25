import React, {Fragment} from 'react';
import SectionHeader from '../components/SectionHeader';
import list from '../data/skillsList';

const styles = {
  colContainer:{
    width: '100%',
    display: 'grid',
    padding: '10% 0',
    fontSize: '1.7em', //1.1em for small mobile devices?
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

const Skills = () => {
  return (
    <Fragment>
      <SectionHeader headerText={'Skills'} color={'pinkColors'} />
      <div style={styles.colContainer}>
      {
        list.map(
           (column, index) => (
            <span style={styles.gridCol} key={'col'+index}>
              {
                column.map(
                  (item, i) => <div key={'col'+index+'item'+i}>{item}</div>
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