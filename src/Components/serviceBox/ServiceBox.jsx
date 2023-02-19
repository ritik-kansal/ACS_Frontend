import React from 'react'
import './ServiceBoxStyle.css';

const serviceBox = ({src,text,onclick}) => {
  return (
    <div className="servciceBox">
        <img src={src} alt="" />
        <h1 className="serviceHeading">{text}</h1>
        <span onClick={onclick} className="readMore">Read More</span>
    </div>
  )
}

export default serviceBox