import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './HeaderStyle.css';

const Header = ({ page }) => {

    const location = useLocation();
    const [showMenu, setShowMenu] = useState();

    const handleDropDown = (id) => {
        if (showMenu === id) {
            setShowMenu(null);
        } else {
            setShowMenu(id);
        }
    }

    const [active, setActive] = useState(false)

    return (
        <header>
            <div className="container">
                <nav className="navigationWrap">

                    <Link to="/" className='logoAlign'><img src="/assets/svg/Logo.svg" alt="" /></Link>

                    <div className="boxIcon mob-visible" onClick={()=> setActive(!active)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_535_3813)">
                            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_535_3813">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <ul className={`navigation ${active === true && 'active'}`}>
                        <li className={`navItem ${page == 'home' ? 'active' : ''}`}>
                            <Link to="/" className="navLink">Home</Link>
                        </li>
                        <li className={`navItem ${page == 'service' ? 'active' : ''}`} onClick={() => handleDropDown(1)}>
                            <a className="navLink">Services <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 1 ? 'active' : ''}`}>

                                <Link onClick={()=> setActive(!active)} to="/services/ETS">Enterprise Technology Services</Link>
                                <Link onClick={()=> setActive(!active)} to="/services/BPS">Business Process Services</Link>
                                <Link onClick={()=> setActive(!active)} to="/services/Infra">Infrastructure Management Services</Link>
                                <Link onClick={()=> setActive(!active)} to="/services/Cloud">Cloud Management Services</Link>
                                <Link onClick={()=> setActive(!active)} to="/services/StaffAugmentation">Staff Augmentation services</Link>
                                <Link onClick={()=> setActive(!active)} to="/services/ERP">ERP/SAP Services</Link>

                            </div>
                        </li>
                        <li className={`navItem ${page == 'gov' ? 'active' : ''}`} onClick={() => handleDropDown(2)}>
                            <a className="navLink">Government <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 2 ? 'active' : ''}`}>
                                <Link to="/governmentCertification">Government Certificates</Link>
                                <Link to="/governmentExperience">Government Experiences</Link>
                                <Link to="/governmentPlacement">Government Placments</Link>
                            </div>
                        </li>
                        <li className={`navItem ${page == 'job' ? 'active' : ''}`} onClick={() => handleDropDown(3)}>
                            <a className="navLink">Opportunities <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 3 ? 'active' : ''}`}>
                                <Link to="/jobOpening">Current Job Openings</Link>
                                <Link to="/talentCommunity">Talent Community</Link>
                                <Link to="/partner">Partners</Link>
                            </div>
                        </li>
                        <li className={`navItem ${page == 'about' ? 'active' : ''}`}>
                            <Link to="/about" className="navLink">About Us</Link>
                        </li>
                        <li className={`navItem ${page == 'insight' ? 'active' : ''}`} onClick={() => handleDropDown(4)}>
                            <a className="navLink">Insight <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.02409 6.49993L8.13016 6.606L8.23622 6.49993L14.2199 0.516209L15.7474 2.04366L8.13016 9.66091L0.512913 2.04366L2.04037 0.516209L8.02409 6.49993Z" fill="white" stroke="#0A2640" stroke-width="0.3" />
                            </svg></a>
                            <div className={`dropdown ${showMenu === 4 ? 'active' : ''}`}>
                                <Link to="/news">News</Link>
                                <Link to="/awards">Awards</Link>
                            </div>
                        </li>
                        <li className={`navItem ${page == 'contact' ? 'active' : ''}`}>
                            <Link to="/contact" className="navLink">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header