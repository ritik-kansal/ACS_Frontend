import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Header from '../../Layouts/Header/Header';
import './GovernmentServiceStyle.css';

const GovernmentService = () => {
    return (
        <>
            <Header page={'gov'} />
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

                    <div className="x4Wrapper flexBox mt-30">

                        <div className="boxBusiness">
                            <img src="./assets/img/c1.png" alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/c2.png" alt="" />
                            <div className="text-3">Women-Owned Small Business certified</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/c3.png" alt="" />
                            <div className="text-3">Economically Disadvantaged Women-Owned Small Business </div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/c4.png" alt="" />
                            <div className="text-3">New York State & NYC Certified Women Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/c5.png" alt="" />
                            <div className="text-3">8a Certified Company</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/c6.png" alt="" />
                            <div className="text-3">Small Business Enterprise (SBE)</div>
                        </div>

                    </div>

                    <h2 className="redHeading mt-50">GSA Sins</h2>

                    <div className="x4Wrapper flexBox mt-40">

                        <div className="boxBusiness">
                            <img src="./assets/img/s1.png" alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/sin2.png" alt="" />
                            <div className="text-3">Women-Owned Small Business certified</div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/sin3.png" alt="" />
                            <div className="text-3">Economically Disadvantaged Women-Owned Small Business </div>
                        </div>

                        <div className="boxBusiness">
                            <img src="./assets/img/sin4.png" alt="" />
                            <div className="text-3">New York State & NYC Certified Women Business Enterprise</div>
                        </div>



                    </div>

                </div>
            </section>
        </>
    )
}

export default GovernmentService