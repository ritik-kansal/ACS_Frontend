import { placeholder } from '@babel/types';
import React from 'react'
import './InputStyle.css';

const Input = ({ type, placeholder, value, onChange, className, accept }) => {
  return (
    <div className={`formGroup ${className}`}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} accept={accept} />
    </div>
  )
}

export default Input