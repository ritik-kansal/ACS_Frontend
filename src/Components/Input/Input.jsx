import { placeholder } from '@babel/types';
import React from 'react'
import './InputStyle.css';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <div className={`formGroup ${className}`}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default Input