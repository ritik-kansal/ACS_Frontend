import React from 'react'
import { Link } from 'react-router-dom';
import './ServiceBoxStyle.css';

const serviceBox = ({ src, text, onclick, detail, link }) => {
  return (
    <div className="servciceBox">
      <img src={src} alt="" />
      <h1 className="serviceHeading">{text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</h1>
      <span onClick={onclick} ><Link to={link} className="readMore">Read More</Link></span>
      {detail && <p className="serviceDetail">{detail}</p>}
    </div>
  )
}

export default serviceBox