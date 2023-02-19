import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../Components/Button/Button';
import './HomeStyle.css';
import 'swiper/css';
import { Navigation } from 'swiper';

const Home = () => {
  return (
    <>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true} modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="sliderBox">
          <img src="/assets/img/slider1BG.jpg" alt="" />
          <div className="siderText">
            <h1 className="heroText">Clients</h1>
            <p className="heroDetail">
              ACS is focused on client satisfaction -we aim to fulfill our client’s needs with quality and precision, while also being punctual.
              ACS also prides itself in client confidentiality and security.
            </p>
            <Button className={'mt-30 HeroButton'} name={'Get in Touch'}/>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="sliderBox">
          <img src="/assets/img/slider1BG.jpg" alt="" />
          <div className="siderText">
            <h1 className="heroText">Partners</h1>
            <p className="heroDetail">
              ACS is able to provide a superior client experience to our customersby collaborating with Partners. We are able 
              to provide quality at scaleand value through our network of partners.
            </p>
            <Button className={'mt-30 HeroButton'} name={'Get in Touch'}/>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="sliderBox">
          <img src="/assets/img/slider1BG.jpg" alt="" />
          <div className="siderText">
            <h1 className="heroText">Employees</h1>
            <p className="heroDetail">
              ACS offers a comprehensive benefits package to its employees.You can be part of a close-knit team while enjoying 
              perkstypical of a large enterprise.
            </p>
            <Button className={'mt-30 HeroButton'} name={'Get in Touch'}/>
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>

    <section className="ServiceSection">
      <div className="container">
        
      </div>
    </section>
    </>
  )
}

export default Home