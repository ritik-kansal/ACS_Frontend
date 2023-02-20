import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import './GovernmentServiceStyle.css';

const GovernmentExperience = () => {
    return (
        <>
            <CommonSubBanner currentPage={'Government'} activePage={'Government Experiences'} className={'governmentBanner'} heading={'Government Experiences'} text={'All certification we have in our showcase are below.'} />
            <section className="gradientBG governmentWrapper">
                <div className="container">

                    <div className="x5Wrapper flexBox mt-40">

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                        <div className="boxBusiness">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/demoUser.png`} alt="" />
                            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default GovernmentExperience