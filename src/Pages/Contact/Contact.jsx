import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './ContactStyle.css';

const Contact = () => {
  return (
    <>
        <CommonSubBanner className={'ContactBG'} heading={'Contact Us'} text={'Kindly fill the form so we contact you'} />
        <div className="blankSpace"></div>
    </>
  )
}

export default Contact