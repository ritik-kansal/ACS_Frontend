import { placeholder } from '@babel/types';
import React from 'react'
import './InputStyle.css';

const Input = ({text,placeholder,className}) => {
  return (
    <div className={`formGroup ${className}`}>
        <input type={text} placeholder={placeholder}/>
    </div>
  )
}

export default Input