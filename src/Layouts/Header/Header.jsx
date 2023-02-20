import React, { useState } from 'react'
import './HeaderStyle.css';

const Header = () => {

    const [showMenu, setShowMenu] = useState();

    return (
        <header>
            <div className="container">
                <nav className="navigationWrap">
                    <a href="/ACS_Frontend/" className='logoAlign'><img src="/ACS_Frontend/assets/svg/Logo.svg" alt="" /></a>
                    <ul className="navigation">
                        <li className="navItem active">
                            <a href="/ACS_Frontend/" className="navLink">Home</a>
                        </li>
                        <li className="navItem" onClick={() => setShowMenu(1)}>
                            <a className="navLink">Services <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 1 ? 'active' : ''}`}>
                                <a href="/ACS_Frontend/services">Service</a>
                                <a href="/ACS_Frontend/services">Service</a>
                                <a href="/ACS_Frontend/services">Service</a>
                            </div>
                        </li>
                        <li className="navItem" onClick={() => setShowMenu(2)}>
                            <a className="navLink">Government <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 2 ? 'active' : ''}`}>
                                <a href="/ACS_Frontend/governmentCertification">Government Certificates</a>
                                <a href="/ACS_Frontend/governmentExperience">Government Experiences</a>
                                <a href="/ACS_Frontend/governmentPlacement">Government Placments</a>
                            </div>
                        </li>
                        <li className="navItem" onClick={() => setShowMenu(3)}>
                            <a className="navLink">Oppertunities <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 3 ? 'active' : ''}`}>
                                <a href="/ACS_Frontend/jobOpening">Current Job Openings</a>
                                <a href="/ACS_Frontend/talentCommunity">Talent Community</a>
                                <a href="/ACS_Frontend/partner">Partners</a>
                            </div>
                        </li>
                        <li className="navItem">
                            <a href="/ACS_Frontend/about" className="navLink">About Us</a>
                        </li>
                        <li className="navItem" onClick={() => setShowMenu(4)}>
                            <a className="navLink">Insight <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 4 ? 'active' : ''}`}>
                                <a href="/ACS_Frontend/news">News</a>
                                <a href="/ACS_Frontend/awards">Awards</a>
                            </div>
                        </li>
                        <li className="navItem">
                            <a href="/ACS_Frontend/contact" className="navLink">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header