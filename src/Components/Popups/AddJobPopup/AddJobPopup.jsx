import axios from 'axios';
import React, { useContext, useState } from 'react'
import { API_JOB } from '../../../config';
import { AuthContext } from '../../../contexts/AuthContext';
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import './AddPopupStyle.css';

const AddJobPopup = ({ isActive, onClose }) => {

  const job_types = [
    'IT',
    'Medical',
    'Non IT',
    'Other',
  ]

  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [qualification, setQualification] = useState('');
  const [jobType, setJobType] = useState(job_types[0]);
  const [jobCategory, setJobCategory] = useState('');
  const [desc, setDesc] = useState('');
  const [required_experience, setRequired_experience] = useState('');

  const { user, isAuthenticated } = useContext(AuthContext);

  const clearData = () => {
    setPosition('');
    setLocation('');
    setQualification('');
    setJobType('');
    setJobCategory('');
    setDesc('');
    setRequired_experience('');
  }



  const onSave = async (e) => {

    e.preventDefault();

    const data = {
      'position': position,
      'location': location,
      'qualification': qualification,
      'job_type': jobType,
      'job_category': jobCategory,
      'desc': desc,
      'required_exp': required_experience,
    }


    await axios.post(API_JOB, data, {
      headers: {
        'Authorization': `Bearer ${user.access_token}`
      }
    }).then((res) => {
      console.log(res);
      clearData();
      onClose();
    }
    ).catch((err) => {
      console.log(err);
      clearData();
      onClose();
    });


  }

  return (
    <div className={`popupWrap ${isActive && 'active'}`}>
      <div className="popupContainer">

        <form onSubmit={onSave}>
          <div className="popupBody">
            <div className="popupHeading">Add Awards</div>
            <Input className={'mt-40'} type={'text'} placeholder={'Headline'} value={position} onChange={(e) => { setPosition(e.target.value) }} />
            <Input className={'mt-20'} type={'text'} placeholder={'Qualification'} value={qualification} onChange={(e) => { setQualification(e.target.value) }} />
            <Input className={'mt-20'} type={'text'} placeholder={'Job Category'} value={jobCategory} onChange={(e) => { setJobCategory(e.target.value) }} />
            <div className="popup4cols flexbox jobsPopup">
              <select id="options1" value={location} onChange={(e) => { setLocation(e.target.value) }}>

                <option value="Location 1">Location 1</option>
                <option value="Location 2">Location 2</option>
                <option value="Location 3">Location 3</option>
                <option value="Location 4">Location 4</option>
              </select>

              <select id="options2" value={jobType} onChange={(e) => { setJobType(e.target.value) }}>
                {
                  job_types.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    )
                  })
                }
              </select>
            </div>
            <textarea className='sameDesignTextArea mt-20' placeholder='Required Experience' name="" id="" cols="10" rows="10"
              onChange={(e) => { setRequired_experience(e.target.value) }} value={required_experience}
            ></textarea>
            <textarea className='sameDesignTextArea mt-20' placeholder='Description' name="" id="" cols="10" rows="10"
              onChange={(e) => { setDesc(e.target.value) }} value={desc}
            ></textarea>

            <div className="btnWrapBox mt-40">
              <Button className={'adminLoginBtn'} name={'Cancel'} onClick={onClose} />
              <Button type="submit" className={'HeroButton adminLoginBtn'} name={'Save'} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddJobPopup