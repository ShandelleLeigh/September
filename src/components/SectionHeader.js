import React from 'react';

const styles = {
  block: {
    height: 'fit-content',
    textAlign: 'center',
    padding: '1px',
    width: '100%',
    fontSize: '1.2em',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.3), 0px 4px 5px 0px rgba(0,0,0,0.2), 0px 1px 10px 0px rgba(0,0,0,0.2)',
  },
  textStyle: {
  },
  pink: {
    backgroundColor:  '#fe6b60',
  },
  blue: {
    backgroundColor: '#3849ad',
  },
  green: {
    backgroundColor: '#82c03e',
  },
  warmColors: {
    background: 'linear-gradient(135deg, #ed7466 19%, #ce6ad5 100%)',
  },
  coolColors: {
    background: 'linear-gradient(135deg, #7adeae 19%, #50bce4 37%, #8c5dba 100%)',
  },
  orangeColors: {
    background: 'linear-gradient(135deg, #e77163 15%, #ffa754 85%)',
  },
  pinkColors: {
    background: 'linear-gradient(135deg,  #e77163 15%, #ce6ad5 85%)',
  }
}

const SectionHeader = ({headerText, color}) => {
  return (
    <div style={Object.assign({}, styles.block, styles[`${color}`])} >
      <h1 style={styles.textStyle}>{`${headerText}`}</h1>
    </div>
  )
}

export default SectionHeader;