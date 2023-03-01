import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './HeaderStyle.css';

const Header = () => {

    const location = useLocation();
    const [showMenu, setShowMenu] = useState();

    return (
        <header>
            <div className="container">
                <nav className="navigationWrap">
                    <a href="./" className='logoAlign'><img src="./assets/svg/Logo.svg" alt="" /></a>
                    <ul className="navigation">
                            <li className="navItem active">
                                <a href="./" className="navLink">Home</a>
                            </li>
                            <li className="navItem" onClick={() => setShowMenu(1)}>
                                <a className="navLink">Services <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                                </svg></a>
                                <div className={`dropdown ${showMenu === 1 ? 'active' : ''}`}>
                                    <a href="./">Service</a>
                                    <a href="./">Service</a>
                                    <a href="./">Service</a>
                                </div>
                            </li>
                            <li className="navItem" onClick={() => setShowMenu(2)}>
                                <a className="navLink">Government <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                                </svg></a>
                                <div className={`dropdown ${showMenu === 2 ? 'active' : ''}`}>
                                    <a href="./governmentCertification">Government Certificates</a>
                                    <a href="./governmentExperience">Government Experiences</a>
                                    <a href="./governmentPlacement">Government Placments</a>
                                </div>
                            </li>
                            <li className="navItem" onClick={() => setShowMenu(3)}>
                                <a className="navLink">Oppertunities <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                                </svg></a>
                                <div className={`dropdown ${showMenu === 3 ? 'active' : ''}`}>
                                    <a href="./jobOpening">Current Job Openings</a>
                                    <a href="./talentCommunity">Talent Community</a>
                                    <a href="./partner">Partners</a>
                                </div>
                            </li>
                            <li className="navItem">
                                <a href="./about" className="navLink">About Us</a>
                            </li>
                            <li className="navItem" onClick={() => setShowMenu(4)}>
                                <a className="navLink">Insight <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                                </svg></a>
                                <div className={`dropdown ${showMenu === 4 ? 'active' : ''}`}>
                                    <a href="./news">News</a>
                                    <a href="./awards">Awards</a>
                                </div>
                            </li>
                            <li className="navItem">
                                <a href="./contact" className="navLink">Contact Us</a>
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header