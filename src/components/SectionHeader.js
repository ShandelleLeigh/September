import React from 'react';

const styles = {
  block: {
    height: '5em',
    textAlign: 'center',
    float: 'left',
    width: '100%',
  },
  pink: {
    backgroundColor:  '#fe6b60',
  },
  textStyle: {
    verticalAlign: 'middle',
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