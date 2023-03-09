import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSideMenuStyle.css';

const AdminSideMenu = ({ value }) => {



  return (
    <div className="adminSideMenuWrap">
      <ul className='sideMenu'>
        <li className={value == 'govermentExperiences' ? 'active' : ''}><Link to="/admin-govermentExperiences">Government Experiences</Link></li>
        <li className={value == 'partnerForm' ? 'active' : ''}><Link to="/admin-partnerForm">Partners Form</Link></li>
        <li className={value == 'talentCommunity' ? 'active' : ''}><Link to="/admin-talentCommunity">Talent Community</Link></li>
        <li className={value == 'getInTouch' ? 'active' : ''}><Link to="/admin-getInTouch">Get in touch</Link></li>
        <li className={value == 'jobs' ? 'active' : ''}><Link to="/admin-jobs">Jobs</Link></li>
      </ul>
    </div>
  )
}

export default AdminSideMenu