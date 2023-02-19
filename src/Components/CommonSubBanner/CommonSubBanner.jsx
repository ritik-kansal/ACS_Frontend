import React from 'react'
import './CommonSubBannerStyle.css';

const CommonSubBanner = () => {
  return (
    <div className="commonBanner" style={`background: url(/assets/img/${BGName})`}>
        <div className="container">
            <h1 className='HeadingBanner'>{heading}</h1>
            <p className="textBanner">{text}</p>
        </div>
    </div>
  )
}

export default CommonSubBanner