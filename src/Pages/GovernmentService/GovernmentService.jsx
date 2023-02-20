import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './GovernmentServiceStyle.css';

const GovernmentService = () => {
  return (
    <>
        <CommonSubBanner currentPage={'Government'} activePage={'Government Certificates'} className={'governmentBanner'} heading={'Government Certificates'} text={'All certification we have in our showcase are below.'} />
        <section className="gradientBG governmentWrapper">
            <div className="container">

                <p className="text-2">
                ACS Consultancy Services Inc. (ACS) is a New York State (NYS) and City (NYC) Certified Minority and 
                Women-Owned Business Enterprise. ACS has been providing staff augmentation services (Contingent Staffing, 
                Contract Consultant Staffing, Contract-to-Hire, Full-time Placement, SOW/Project Based IT Staffing, and Pay-rolling) 
                to diverse industry verticals. Our clients get relevant staff augmentation support without overpaying for redundant 
                recruitment stages. ACS’s government contracting portfolio includes multiple awards and certifications that allow 
                federal, state and local government to quickly engage our services through a simplified procurement process.
                </p>

                <h2 className="redHeading mt-50">ACS’s Business Certificates</h2>

                <div className="x4Wrapper flexBox mt-40">

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                </div>

                <h2 className="redHeading mt-50">GSA Sins</h2>

                <div className="x4Wrapper flexBox mt-40">

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                    <div className="boxBusiness">
                        <img src="/assets/img/demoUser.png" alt="" />
                        <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default GovernmentService