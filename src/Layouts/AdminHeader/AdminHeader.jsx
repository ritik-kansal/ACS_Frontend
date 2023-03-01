import React from 'react'
import './AdminHeaderStyle.css';

const AdminHeader = () => {
  return (
    <header className='adminHeader'>
        <div className="container">
            <nav className="navigationWrap">
                <a href="./" className='logoAlign'><img src="./assets/svg/Logo.svg" alt="" /></a>
            </nav>
        </div>
    </header>
  )
}

export default AdminHeader