import React, { useState } from 'react'
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import './servicesStyle.css';

const Services = () => {

    const[active, setActive] = useState(1);

    return (
    <>
        <CommonSubBanner className={'serviceBanner'} heading={'Our Services'} text={'Scale up your business growth with highly robust.'} />
        <section className="serviceWrapper gradientBG">
            <div className="container">

                <h1 className="redHeading">Enterprise Technology Services</h1>
                <p className="newText2 mt-20">Enterprise Technology Services comprises IT units that provide a standardized approach 
                to the management, coordination, and integration of enterprise applications. Enterprise Technology services 
                architecture includes principles of object-oriented design and high-level components employed to match the 
                heterogeneous world of IT architecture. Powersolv offers a comprehensive suite of Enterprise-wide Technology 
                Services to assist your organization to operate effectively and efficiently through the use of technology. 
                Powersolv offers best-in-class shared and dedicated application development and maintenance services ensuring a 
                winning combination of quality and consistency.</p>

            </div>
        </section>

        <div className="navigationTabsWrap">
            <div className="container">

                <div className="navigationWrapper">
                    <span className={`navigationTab ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>Application Development & Maintenance</span>
                    <span className={`navigationTab ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>Quality Assurance & Testing</span>
                    <span className="navigationTab">Enterprise Mobile Solutions</span>
                    <span className="navigationTab">Database Management</span>
                </div>

                <div className={`navigationBoxWrap ${active === 1 ? 'active' : ''}`}>

                    <div className="navigationBox flexBox">

                    <div className="aboutLeft shadowLeft">
                        <img src="/assets/img/aboutUs.png" alt="" />
                    </div>

                    <div className="aboutRight">
                        <h2 className="heading-2">
                        Application Development & Maintenance
                        </h2>
                        
                        <ul className="serviceList mt-15">
                            <li>Realize faster time to market</li>
                            <li>Increase frequency and quality of deployments</li>
                            <li>Improve solution quality and shorten lead times for fixes</li>
                            <li>Deliver early and often, and detect errors earlier</li>
                            <li>Improve innovation and risk-taking by making it safer to experiment</li>
                            <li>Reduce the severity and frequency of release failures</li>
                        </ul>
                        
                        <Button className={'HeroButton mt-40'} name={'Get in Touch'} />
                    </div>

                    </div>

                    <div className="navigationBox flexBox">

                    <div className="aboutLeft shadowLeft">
                        <img src="/assets/img/aboutUs.png" alt="" />
                    </div>

                    <div className="aboutRight">
                        <h2 className="heading-2">
                        Application Development & Maintenance
                        </h2>
                        
                        <ul className="serviceList mt-15">
                            <li>Realize faster time to market</li>
                            <li>Increase frequency and quality of deployments</li>
                            <li>Improve solution quality and shorten lead times for fixes</li>
                            <li>Deliver early and often, and detect errors earlier</li>
                            <li>Improve innovation and risk-taking by making it safer to experiment</li>
                            <li>Reduce the severity and frequency of release failures</li>
                        </ul>
                        
                        <Button className={'HeroButton mt-40'} name={'Get in Touch'} />
                    </div>

                    </div>

                </div>

                <div className={`navigationBoxWrap ${active === 2 ? 'active' : ''}`}>

                    <div className="navigationBox flexBox">

                    <div className="aboutLeft shadowLeft">
                        <img src="/assets/img/aboutUs.png" alt="" />
                    </div>

                    <div className="aboutRight">
                        <h2 className="heading-2">
                        Application Development & Maintenance
                        </h2>
                        
                        <ul className="serviceList mt-15">
                            <li>Realize faster time to market</li>
                            <li>Increase frequency and quality of deployments</li>
                            <li>Improve solution quality and shorten lead times for fixes</li>
                            <li>Deliver early and often, and detect errors earlier</li>
                            <li>Improve innovation and risk-taking by making it safer to experiment</li>
                            <li>Reduce the severity and frequency of release failures</li>
                        </ul>
                        
                        <Button className={'HeroButton mt-40'} name={'Get in Touch'} />
                    </div>

                    </div>

                    <div className="navigationBox flexBox">

                    <div className="aboutLeft shadowLeft">
                        <img src="/assets/img/aboutUs.png" alt="" />
                    </div>

                    <div className="aboutRight">
                        <h2 className="heading-2">
                        Application Development & Maintenance
                        </h2>
                        
                        <ul className="serviceList mt-15">
                            <li>Realize faster time to market</li>
                            <li>Increase frequency and quality of deployments</li>
                            <li>Improve solution quality and shorten lead times for fixes</li>
                            <li>Deliver early and often, and detect errors earlier</li>
                            <li>Improve innovation and risk-taking by making it safer to experiment</li>
                            <li>Reduce the severity and frequency of release failures</li>
                        </ul>
                        
                        <Button className={'HeroButton mt-40'} name={'Get in Touch'} />
                    </div>

                    </div>

                </div>

            </div>
        </div>

    </>
  )
}

export default Services