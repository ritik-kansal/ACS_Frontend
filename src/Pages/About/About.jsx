import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import ServiceBox from '../../Components/serviceBox/ServiceBox';
import Header from '../../Layouts/Header/Header';
import './AboutStyle.css';

const About = () => {
    return (
        <>
            <Header page={'about'} />
            <CommonSubBanner className={'AboutBG'} heading={'About Us'} text={'Here everything about us who we are is described.'} />

            <section className='gradientBG aboutWrapper'>
                <div className="container">
                    <div className="flexBox">

                        <div className="aboutLeft shadowLeft">
                            <img src="./assets/img/aboutUs.png" alt="" />
                        </div>

                        <div className="aboutRight">
                            <h2 className="heading-2">
                                About Us
                            </h2>
                            <p className="text-2 mt-15">ACS Consultancy Services Inc. (ACS) is a New York-based consulting firm that specializes in providing technology solutions. The company, which was established in 2011, has received several certifications, including Minority Business Enterprise, Woman Business Enterprise, WOSB, 8a, and NYS/NYC Women Owned (NYS WBE). The founder and President of ACS, Asha Ramrakhiani, has over 20 years of leadership experience working with various New York State agencies.</p>
                            <p className="text-2 mt-15">Leveraging the extensive experience of its leadership team in working with the US Government, ACS offers IT consulting and project-based services to state and federal agencies. The company has been recognized by the Center for Digital Government for its exceptional experience in collaborating with government agencies, having received the "Best Application Serving a department or Agency's Business Needs" award in the Project Excellence category as part of the Best of New York Awards.</p>
                            <p className="text-2 mt-15">ACS provides IT consulting and staff augmentation services to more than 50 clients in the state of New York, connecting them with over 100 local technology professionals with expertise in the latest technologies. The company focuses on providing best-in-class certified local talent for information technology job categories, providing extended local support to ensure that NYS clients receive relevant consulting services without the need for redundant recruitment stages.</p>
                            <p className="text-2 mt-15">ACS is committed to delivering professional consulting support on strategic initiatives and optimal technology solutions to local, state, and commercial customers. The company takes pride in delivering quality services that exceed customer expectations and drive business success. With its strong leadership team and commitment to excellence, ACS has established itself as a leader in the IT consulting industry and is rapidly expanding.</p>
                            {/* <Link to='/contact'><Button className={'HeroButton mt-40'} name={'Get in Touch'} /></Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='missionWrapper'>
                <div className="container">
                    <div className="flexBox">

                        <div className="aboutLeft shadowRight">
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