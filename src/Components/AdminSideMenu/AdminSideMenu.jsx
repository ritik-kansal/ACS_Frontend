import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSideMenuStyle.css';

const AdminSideMenu = () => {
  return (
    <div className="adminSideMenuWrap">
      <ul className='sideMenu'>
        <li className='active'><a href="/govermentExperiences">Government Experiences</a></li>
        <li><a href="/partnerForm">Partners Form</a></li>
        <li><a href="/talentCommunity">Talent Community</a></li>
        <li><a href="/#">Get in touch</a></li>
        <li><a href="/jobsDetail">Jobs</a></li>
      </ul>
    </div>
  )
}

export default AdminSideMenu