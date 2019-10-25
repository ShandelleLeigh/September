import React, {
  Fragment,
} from 'react';
import SectionHeader from '../components/SectionHeader';
import workHistory from '../data/resumeData';
import TimelineItem from '../components/TimelineItem';
import '../components/item.css';

const Resume = () => {
  return (
    <Fragment>
      <SectionHeader headerText={'Recent Work History'} color={'pinkColors'} />
      <div className='tContainer'>
        <div className='lineThing' />
          {
            workHistory.map( (item, index) =>
              <TimelineItem data={item} key={'wh'+index}/>
            )
          }
      </div>
    </Fragment>
  )
}

export default Resume