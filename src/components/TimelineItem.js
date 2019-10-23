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
    dates, degree, description, type, studyField
  } = data
  return (
    <Fragment>
      <div className={type === 'school' ? 'educationItem' : 'jobItem'} >
        <p><h3><b>{roleTitle}</b></h3> | {dates} </p>
        <p><i><b>{company}</b></i> | <i>{location}</i></p>
        { degree && studyField ? <p><b>{degree}</b> | {studyField}</p> : null }
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