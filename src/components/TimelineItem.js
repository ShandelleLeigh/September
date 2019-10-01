import React, {
  Fragment,
  // useState,
} from 'react';
import './item.css';

import {generateShortID} from '../helpers/helperFunctions';

// const CollapsableDescription = ({rel, desc}) => {
//   const [open, toggleOpen] = useState(false);
//   return (
//     <Fragment>
//       <DescriptionDiv desc={desc}/>
//     </Fragment>
//   )
// }

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
    // relevency
  } = data
  return (
    <div className={type === 'school' ? 'educationItem' : 'jobItem'} >
      <p>{roleTitle}</p>
      <p><i><b>{company}</b> - {location}</i></p>
      <p>{dates}</p> {/* ??? */}
      <p>{degree}</p>
      {
        (description !== undefined) ? (
          // (relevency === true) ?
              <DescriptionDiv desc={description}/>
            // : <CollapsableDescription rel={relevency} desc={description}/>
          ) : null
      }
    </div>

  )
}

export default TimelineItem