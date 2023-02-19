import React from 'react'
import './ServiceBoxStyle.css';

const serviceBox = ({src,text,onclick,detail}) => {
  return (
    <div className="servciceBox">
        <img src={src} alt="" />
        <h1 className="serviceHeading">{text}</h1>
        <span onClick={onclick} className="readMore">Read More</span>
        {detail && <p className="serviceDetail">{detail}</p>}
    </div>
  )
}

export default serviceBox