import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import './servicesStyle.css';

const Services = () => {
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
                    <span className="navigationTab active">Application Development & Maintenance</span>
                    <span className="navigationTab">Quality Assurance & Testing</span>
                    <span className="navigationTab">Enterprise Mobile Solutions</span>
                    <span className="navigationTab">Database Management</span>
                </div>

                <div className="navigationBoxWrap">

                    <div className="navigationBox flexBox">
                        <div className="naviLeft">

                        </div>
                        <div className="naviRight">
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </>
  )
}

export default Services