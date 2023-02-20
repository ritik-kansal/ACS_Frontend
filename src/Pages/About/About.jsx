import React from 'react'
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import ServiceBox from '../../Components/serviceBox/ServiceBox';
import './AboutStyle.css';

const About = () => {
    return (
        <>
            <CommonSubBanner className={'AboutBG'} heading={'About Us'} text={'Here everything about us who we are is described.'} />

            <section className='gradientBG aboutWrapper'>
                <div className="container">
                    <div className="flexBox">

                        <div className="aboutLeft shadowLeft">
                            <img src="./assets/img/aboutUs.png" alt="" />
                        </div>

                        <div className="aboutRight">
                            <h2 className="heading-2">
                                Who we are
                            </h2>
                            <p className="text-2 mt-15">When working on her Master’s thesis on a paratransit software syststem, Asha Ramrahkiani
                                realized the potential of technology to transform people’s lives, and was inspired to found ACS in 2011. The mission
                                of ACS is to work with our partners in New York State on IT related projects and to fulfill all of their IT needs as
                                effectively as possible.</p>
                            <p className="text-2 mt-15">ACS strives to improve life for communities across New York state by modernizing government
                                systems. ACS doesn’t just look to get the job done - we aim to exceed our client’s expectations.</p>
                            <Button className={'HeroButton mt-40'} name={'Get in Touch'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='missionWrapper'>
                <div className="container">
                    <div className="flexBox">

                        <div className="aboutLeft shadowLeft">
                            <img src="./assets/img/aboutUs.png" alt="" />
                        </div>

                        <div className="aboutRight">
                            <h2 className="heading-2">
                                Our Mission
                            </h2>
                            <p className="text-2 mt-15">
                                We provide highly qualified IT professionals with the expertise required to design, develop, implement, and maintain
                                technology solutions. Our experts is comprised of highly trained, educated & experienced business & technical
                                professionals who are committed to their client’s success. ACS Consultancy Services typically fill critical
                                technical lead roles & their contributions are consistently viewed by client managers to be vital to project success.
                            </p>
                            <p className="text-2 mt-15">
                                We work with our customers to identify, qualify, and present IT consultants to work within the client’s organization.
                                Our consultants undergo extensive background screens, reference checks, and technical assessments prior to employment.
                                ACS Consultancy Services offers consultant, consult-to-hire, and direct placement services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutMid gradientBG">
                <div className="container">

                    <h2 className="heading-2">Get Interesting Features at Our Place</h2>

                    <div className="x3BoxWrap mt-60">
                        <ServiceBox src={'./assets/img/starpeople.png'} text={'Customer Experience'} detail={'At ACS we are committed to providing a world-class customer experience. Our team is made up of highly professional people who approach work with integrity & always seek to add value to the clients. We seek to build strong, long-term relationships with our clients by understanding their needs.'} />
                        <ServiceBox src={'./assets/img/star.png'} text={'Excellence'} detail={'It is our policy at ACS to maintain the high standards that we started with. We do not compromise on quality in any area of our business. Whether it is hiring new people or working on a client’s project, we thrive on excellence. With our well structured internal quality controlprocedures.'} />
                        <ServiceBox src={'./assets/img/helphand.png'} text={'Diversity'} detail={'ACS Consultancy Services Inc is a Small Business that is New York State and New York City Certified Minority and Women-Owned Business Enterprise. We provide Information Technology solutions and services, and IT consulting services to public sector entities.'} />
                    </div>

                </div>
            </section>

        </>
    )
}

export default About