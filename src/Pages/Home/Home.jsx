import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../Components/Button/Button';
import ServiceBox from '../../Components/serviceBox/ServiceBox';
import './HomeStyle.css';
import 'swiper/css';
import { Navigation } from 'swiper';
import { API_JOB } from '../../config';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header/Header';

const Home = () => {

  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const res = await axios.get(API_JOB)
    console.log(res.data['jobs'])
    // slice the array to get the first 3 jobs
    setJobs(res.data['jobs'].slice(0, 4))
  }

  useEffect(() => {
    getJobs();
  }, [])

  return (
    <>
      <Header page={'home'} />
      <div className="swiperMain">
        <Swiper className='swiper2'
          spaceBetween={0}
          slidesPerView={1}
          navigation={true} modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="sliderBox">
              <img src="./assets/img/slider1BG.jpg" alt="" />
              <div className="siderText">
                <h1 className="heroText">Clients</h1>
                <p className="heroDetail">
                  ACS is focused on client satisfaction -we aim to fulfill our client’s needs with quality and precision, while also being punctual.
                  ACS also prides itself in client confidentiality and security.
                </p>
                <Link to="/contact"><Button className={'mt-30 HeroButton'} name={'Get in Touch'} /></Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sliderBox">
              <img src="./assets/img/slider2BG.png" alt="" />
              <div className="siderText">
                <h1 className="heroText">Partners</h1>
                <p className="heroDetail">
                  ACS is able to provide a superior client experience to our customersby collaborating with Partners. We are able
                  to provide quality at scaleand value through our network of partners.
                </p>
                <Link to="/contact"><Button className={'mt-30 HeroButton'} name={'Get in Touch'} /></Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sliderBox">
              <img src="./assets/img/slider3BG.png" alt="" />
              <div className="siderText">
                <h1 className="heroText">Employees</h1>
                <p className="heroDetail">
                  ACS offers a comprehensive benefits package to its employees.You can be part of a close-knit team while enjoying
                  perkstypical of a large enterprise.
                </p>
                <Link to="/contact"><Button className={'mt-30 HeroButton'} name={'Get in Touch'} /></Link>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <section className="ServiceSection gradientBG">
        <div className="container">

          <div className="topDetails">
            <h1 className="commonHeading">Our Services</h1>
            <p className="commonText">Scale up your business growth with highly robust.</p>
          </div>

          <div className="x3BoxWrap mt-60">
            <ServiceBox src={'./assets/img/code.png'} text={'Enterprise Technology \n Services'} link={"/services/ETS"} />
            <ServiceBox src={'./assets/img/s2.png'} text={'Business Process \n Services'} link={"/services/BPS"} />
            <ServiceBox src={'./assets/img/s3.png'} text={'Infrastructure Management \n Services'} link={"/services/Infra"} />
            <ServiceBox src={'./assets/img/s4.png'} text={'Cloud Management \n Services'} link={"/services/Cloud"} />
            <ServiceBox src={'./assets/img/s5.png'} text={'Staff Augmentation \n services'} link={"/services/StaffAugmentation"} />
            <ServiceBox src={'./assets/img/s6.png'} text={'ERP/SAP \n Services'} link={"/services/ERP"} />
          </div>

        </div>
      </section>

      <section className="breakerBlack">
        <div className="container">
          <h2 className="breakerHeading">Are you interested to work with us ?</h2>
          <Link to="/contact"><Button className={'HeroButton'} name={'Contact Us'} /></Link>
        </div>
      </section>

      <section className='gradientBG aboutWrapper'>
        <div className="container">
          <div className="flexBox items-center">

            <div className="aboutLeft shadowLeft">
              <img src="./assets/img/aboutUs.png" alt="" />
            </div>

            <div className="aboutRight">
              <h2 className="heading-2">
                About Us
              </h2>
              <p className="text-2 mt-15">When working on her Master’s thesis on a paratransit software syststem, Asha Ramrahkiani
                realized the potential of technology to transform people’s lives, and was inspired to found ACS in 2011. The mission
                of ACS is to work with our partners in New York State on IT related projects and to fulfill all of their IT needs as
                effectively as possible.</p>
              <p className="text-2 mt-15">ACS strives to improve life for communities across New York state by modernizing government
                systems. ACS doesn’t just look to get the job done - we aim to exceed our client’s expectations.</p>
              <Link to="/contact"><Button className={'HeroButton mt-40'} name={'Get in Touch'} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonila">
        <div className="">

          <div className="topDetails">
            <h1 className="commonHeading">Testimonials</h1>
            <p className="commonText">We feel honored when our clients appreciate our work. It is not a surprise that most of them keep <br /> coming back to us. Have a look at what some of them have to say about ACS.</p>
          </div>

          <div className="swiperBox mt-50">
            <Swiper
              className='container'
              spaceBetween={30}
              slidesPerView={3}
              navigation={true} modules={[Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>

              <SwiperSlide>
                <div className="testimonialsBox">
                  <p className="testminoal">"Buyer buzz partner network disruptive non-disclosure agreement business"</p>
                  <div className="testimonialBox mt-40">
                    <img src="./assets/img/userDemo.png" alt="" className="testimonialimg" />
                    <span className="testimonialDetail">
                      <h5 className="testiName">Albus Dumbledore</h5>
                      <span className="textTesti">Manager @ Howarts</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonialsBox">
                  <p className="testminoal">"Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."</p>
                  <div className="testimonialBox mt-40">
                    <img src="./assets/img/p2.png" alt="" className="testimonialimg" />
                    <span className="testimonialDetail">
                      <h5 className="testiName">Albus Dumbledore</h5>
                      <span className="textTesti">Manager @ Howarts</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonialsBox">
                  <p className="testminoal">"Release facebook responsive web design business model canvas seed money monetization."</p>
                  <div className="testimonialBox mt-40">
                    <img src="./assets/img/p3.png" alt="" className="testimonialimg" />
                    <span className="testimonialDetail">
                      <h5 className="testiName">Albus Dumbledore</h5>
                      <span className="textTesti">Manager @ Howarts</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </div>
      </section>

      <section className="jobOpening gradientBG">
        <div className="container">

          <div className="topDetails">
            <h1 className="commonHeading">Job Openings</h1>
            <p className="commonText">Our mission is to help you find the right job to reach your professional and lifestyle goals. We offer an ever-changing <br />
              range of exciting opportunities for top-notch professionals.</p>
          </div>

          <table className='commonTable mt-60'>
            <thead>
              <tr>
                <th>Position</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.position}</td>
                      <td>{item.location}</td>
                      <td>{item.required_exp}</td>
                      <td>
                        <Link to={`/getaJob/${item.id}`} className="redlink">Apply Now
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_26_12)">
                              <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C" />
                            </g>
                            <defs>
                              <clipPath id="clip0_26_12">
                                <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className='flexBox justify-center'>
            <Link to="/jobOpening"><Button className={'mt-30 HeroButton'} name={'View All'} /></Link>
          </div>

        </div>
      </section>

    </>
  )
}

export default Home