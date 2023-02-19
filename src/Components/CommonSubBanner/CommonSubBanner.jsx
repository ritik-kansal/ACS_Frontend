import React from 'react'
import './CommonSubBannerStyle.css';

const CommonSubBanner = ({className,heading,text}) => {
  return (
    <div className={`commonBanner ${className}`}>
        <div className="container">
            <h1 className='headingBanner'>{heading}</h1>
            <p className="textBanner">{text}</p>
        </div>
    </div>
  )
}

export default CommonSubBanner