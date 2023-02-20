import React from 'react'
import './Textarea.css';

const Textarea = ({className,placeholder}) => {
  return (
    <div className="formGroup">
      <textarea rows="3" className={className} placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea