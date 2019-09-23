import React from 'react';

const styles = {
  block: {
    height: 'fit-content',
    textAlign: 'center',
    float: 'left',
    width: '100%',
    fontSize: '1.2em',
  },
  pink: {
    backgroundColor:  '#fe6b60',
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