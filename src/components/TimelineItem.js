import React, {
  Fragment,
} from 'react';
import './item.css';

import {generateShortID} from '../helpers/helperFunctions';

const DescriptionDiv = ({desc}) => {
  return  (
    <Fragment>
      {
        desc.map( (line) =>
          <p key={generateShortID()}>{line}</p>
        )
      }
    </Fragment>
  )
}



const TimelineItem = ({data}) => {
  const {
    roleTitle, company, location,
    dates, degree, description, type,
  } = data
  return (
    <Fragment>
      <div className={type === 'school' ? 'educationItem' : 'jobItem'} >
        <h3><b>{roleTitle}</b></h3>
        <p><i><b>{company}</b> - {location}</i></p>
        <p>{dates}</p>
        <p>{degree}</p>
        {
          (description !== undefined) ? (
            <DescriptionDiv desc={description}/>
          ) : null
        }
        <div className='dot'/>
      </div>
    </Fragment>
  )
}

export default TimelineItem