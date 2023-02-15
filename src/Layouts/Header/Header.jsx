import React from 'react'
import './HeaderStyle.css';

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav className="navigationWrap">
                <a href="/"><img src="/assets/svg/Logo.svg" alt="" /></a>
                <ul className="navigation">
                    <li className="navItem">
                        <a href="/" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">Services</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">Government</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">Oppertunities</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">About Us</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">Insight</a>
                    </li>
                    <li className="navItem">
                        <a href="/" className="navLink">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header