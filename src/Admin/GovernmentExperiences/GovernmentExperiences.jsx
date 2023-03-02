import React, { useState } from 'react'
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu';
import AddAwardPopup from '../../Components/Popups/AddAwardPopup/AddAwardPopup';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';
import './GovernmentExperiencesStyle.css';

const GovernmentExperiences = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <main className='clearAll'>
      <AdminHeader onClick={() => setIsActive(true)} />
      <AddAwardPopup isActive={isActive} onClose={() => setIsActive(false)} />
      <AdminSideMenu value={'govermentExperiences'} />
      <section className='blackBG governmentWrap'>
        <div className="x5Wrapper flexBox">

          <div className="boxBusiness">
            <div className="floatingBtns">
              <img src="/assets/svg/delete.svg" alt="" />
              <img src="/assets/svg/edit.svg" alt="" />
            </div>
            <img src="./assets/img/demoUser.png" alt="" />
            <div className="text-3">New York State & NYC Certified Minority Business Enterprise</div>
          </div>

          <div className="boxBusiness">
            <div className="floatingBtns">
              <img src="/assets/svg/delete.svg" alt="" />
              <img src="/assets/svg/edit.svg" alt="" />
            </div>
            <img src="./assets/img/demoUser.png" alt="" />
            <div className="text-3">Women-Owned Small Business certified</div>
          </div>

          <div className="boxBusiness">
            <div className="floatingBtns">
              <img src="/assets/svg/delete.svg" alt="" />
              <img src="/assets/svg/edit.svg" alt="" />
            </div>
            <img src="./assets/img/demoUser.png" alt="" />
            <div className="text-3">Economically Disadvantaged Women-Owned Small Business</div>
          </div>

          <div className="boxBusiness">
            <div className="floatingBtns">
              <img src="/assets/svg/delete.svg" alt="" />
              <img src="/assets/svg/edit.svg" alt="" />
            </div>
            <img src="./assets/img/demoUser.png" alt="" />
            <div className="text-3">New York State & NYC Certified Women Business Enterprise</div>
          </div>

          <div className="boxBusiness">
            <div className="floatingBtns">
              <img src="/assets/svg/delete.svg" alt="" />
              <img src="/assets/svg/edit.svg" alt="" />
            </div>
            <img src="./assets/img/demoUser.png" alt="" />
            <div className="text-3">8a Certified Company</div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default GovernmentExperiences