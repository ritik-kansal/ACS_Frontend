import React from 'react'
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Input from '../../Components/Input/Input';
import './CareerStyle.css';

const GetJob = () => {
  return (
    <>
        <CommonSubBanner currentPage={'Opportunities > Current Job Openings'} activePage={'Peoplesoft Functional Supply Chain Manager'} className={'careerBanner'} />
        <section className="gradientBG">
            <div className="container">

                <div className="flexBox formDetailWrap">
                    <div className="formLeft">
                        <h3 className="heading-3">Peoplesoft Functional Supply Chain Manager</h3>
                        <p className="text-3 mt-5">This is an Expert level position with 6-months opportunity in Part Time on the 
                        Hourly-Based IT Planning Contract at the State of New York.</p>
                        <p className='text-3 mt-20'>Required Experience:</p>
                        <p className='text-3'>PeopleSoft 9.2 Oracle ERP experience in at least one of the following modules:
                        Inventory/Mobile Inventory, Purchasing, eProcurement, Procurement Contracts (Pricing), 
                        eSupplier, eSettlements, Supplier Contract Management, Strategic Sourcing, Services Procurement, 
                        Staff Management
                        </p>
                        <p className="text-3 mt-20">Qualification Required: Bachelor’s degree</p>
                        <p className="text-3 mt-20">Job Location: NYC Health Hospital, NY</p>
                        <p className="text-3 mt-20">Job Category: PeopleSoft Functional Supply Chain Manager</p>
                        <p className="text-3 mt-20">Job Type: Full Time</p>
                        <p className="text-3 mt-20">Job Location: New York State</p>
                    </div>
                    <div className="formRight">
                        <form action="" className='whiteForm contactForm'>
                            <h3 className="formHeading">Apply Here</h3>
                            <Input className={'mt-30'} type={'text'} placeholder={'Name'}/>
                            <Input className={'mt-20'} type={'email'} placeholder={'Email Address'}/>
                            <Input className={'mt-20'} type={'text'} placeholder={'Phone Number'}/>
                            <Input className={'mt-20'} type={'text'} placeholder={'Cover Letter'}/>
                            <Input className={'mt-20'} type={'file'} placeholder={'Upload CV'}/>
                            <Button className={'HeroButton mt-20'} name={'Submit'} />

                        </form>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default GetJob