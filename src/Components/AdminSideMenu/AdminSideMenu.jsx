import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSideMenuStyle.css';

const AdminSideMenu = () => {
  return (
    <div className="adminSideMenuWrap">
      <ul className='sideMenu'>
        <li className='active'>Government Experiences</li>
        <li>Partners Form</li>
        <li>Talent Community</li>
        <li>Get in touch</li>
        <li>Jobs</li>
      </ul>
    </div>
  )
}

export default AdminSideMenu