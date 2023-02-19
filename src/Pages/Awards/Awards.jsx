import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './AwardsStyle.css';

const Awards = () => {
  return (
    <>
      <CommonSubBanner currentPage={'Insight'} activePage={'News'} className={'NewsBG'} heading={'News'} text={'All Headlines of us that represent us in news'} />
    </>
  )
}

export default Awards