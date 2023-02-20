import { placeholder } from '@babel/types';
import React from 'react'
import './InputStyle.css';

const Input = ({type,placeholder,className}) => {
  return (
    <div className={`formGroup ${className}`}>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input