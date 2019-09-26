import React, {
  Fragment,
} from 'react';
import './item.css';

const TimelineItem = ({data}) => {
  const {
    roleTitle, company, location,
    dates, degree, description,
    type
  } = data
  console.log('*', roleTitle, ' - ', description, typeof description)
  if (type === 'school') return (
    <div className='educationItem'>
      <h4>{roleTitle}</h4>
      <p><i><b>{company}</b> - {location}</i></p>
      <p>{dates}</p>
      <p>{degree}</p>
      <p>{description}</p>
    </div>
  )
  if (type === 'job') return (
    <div className='jobItem' >
      <span>{roleTitle}</span>
      <span><i><b>{company}</b> - {location}</i></span>
      <span>{dates}</span>
      { description.length > 0 ? <span>{description}</span> : null}
    </div>
  )

}

export default TimelineItem