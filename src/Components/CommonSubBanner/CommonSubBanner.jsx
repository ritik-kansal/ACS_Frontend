import React from 'react'
import './CommonSubBannerStyle.css';

const CommonSubBanner = ({className,heading,text,currentPage,activePage}) => {
  return (
    <div className={`commonBanner ${className}`}>
        <div className="container">
          {currentPage &&
            <div className="breadCrumb">
              <div className="currentPage">{`${currentPage} > `}<span className='activePage'>{activePage}</span></div>
            </div> 
          }
            <h1 className='headingBanner'>{heading}</h1>
            <p className="textBanner">{text}</p>
        </div>
    </div>
  )
}

export default CommonSubBanner