import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu';
import AddAwardPopup from '../../Components/Popups/AddAwardPopup/AddAwardPopup';
import { API_GOVERNMENT_EXPERIENCE_URL } from '../../config';
import { AuthContext } from '../../contexts/AuthContext';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';
import './GovernmentExperiencesStyle.css';

const GovernmentExperiences = () => {

  const [isActive, setIsActive] = useState(false);

  const [experiences, setExperiences] = useState([]);

  const { user } = useContext(AuthContext);

  const getExperiences = async () => {
    const res = await axios.get(API_GOVERNMENT_EXPERIENCE_URL);
    if (res.status === 200) {
      setExperiences(res.data.gov_exp);
    }
  }

  const deleteExperience = async (id) => {
    const res = await axios.delete(`${API_GOVERNMENT_EXPERIENCE_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${user.access_token}`
      }
    });
    if (res.status === 200) {
      getExperiences();
    }
  }

  useEffect(() => {
    getExperiences();
  }, [])


  return (
    <main className='clearAll'>
      <AdminHeader onClick={() => setIsActive(true)} />
      <AddAwardPopup isActive={isActive} onClose={() => setIsActive(false)} getExperiences={getExperiences} />
      <AdminSideMenu value={'govermentExperiences'} />
      <section className='blackBG governmentWrap'>
        <div className="x5Wrapper flexBox">

          {
            experiences.map((experience, index) => {
              return (
                <div className="boxBusiness">
                  <div className="floatingBtns">
                    <img src="/assets/svg/delete.svg" alt="" onClick={() => deleteExperience(experience.id)} />
                    {/* <img src="/assets/svg/edit.svg" alt="" /> */}
                  </div>
                  <img src={`https://acs-data-1.s3.us-east-2.amazonaws.com/${experience.img}`} alt="" />
                  <div className="text-3">{experience.caption}</div>
                </div>
              )
            })
          }

        </div>
      </section>
    </main>
  )
}

export default GovernmentExperiences