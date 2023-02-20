import React from 'react'
import './ButtonStyle.css';

const Button = ({className,name,onClick,disabled,src}) => {
    return (
      <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
          {src && <img src={src} alt="" />}
          {name}
      </button>
    )
}

export default Button