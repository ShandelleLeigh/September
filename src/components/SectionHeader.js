import React from 'react';

const styles = {
  block: {
    height: 'fit-content',
    textAlign: 'center',
    padding: '1px',
    width: '100%',
    fontSize: '1.2em',
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
}

const SectionHeader = ({headerText, color}) => {
  return (
    <div style={Object.assign({}, styles.block, styles[`${color}`])} >
      <h1 style={styles.textStyle}>{`${headerText}`}</h1>
    </div>
  )
}

export default SectionHeader;