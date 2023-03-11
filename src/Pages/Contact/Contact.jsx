import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Header from '../../Layouts/Header/Header';
import './ContactStyle.css';

const Contact = () => {
  return (
    <>
      <Header page={'contact'} />
      <CommonSubBanner className={'ContactBG'} heading={'Contact Us'} text={'Kindly fill the form so we contact you'} />
      <div className="blankSpace"></div>
    </>
  )
}

export default Contact