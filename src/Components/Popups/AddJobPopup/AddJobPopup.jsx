import React from 'react'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import './AddPopupStyle.css';

const AddJobPopup = ({isActive}) => {
  return (
    <div className={`popupWrap ${isActive && 'active'}`}>
        <div className="popupContainer">

            <div className="popupBody">
            <div className="popupHeading">Add Awards</div>
            <Input className={'mt-40'} type={'text'} placeholder={'Headline'}/>
            <div className="popup4cols flexbox jobsPopup">
              <select id="options1">
                <option value="Location">Location</option>
                <option value="Location">Location</option>
                <option value="Location">Location</option>
                <option value="Location">Location</option>
              </select>

              <select id="options2">
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
              </select>

              <select id="options3">
                <option value="Qualification Required">Qualification Required</option>
                <option value="Qualification Required">Qualification Required</option>
                <option value="Qualification Required">Qualification Required</option>
                <option value="Qualification Required">Qualification Required</option>
              </select>

              <select id="options4">
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
                <option value="Job Type">Job Type</option>
              </select>
            </div>
            <textarea className='sameDesignTextArea mt-20' placeholder='Required Experience' name="" id="" cols="10" rows="10"></textarea>
            <textarea className='sameDesignTextArea mt-20' placeholder='Description' name="" id="" cols="10" rows="10"></textarea>

            <div className="btnWrapBox mt-40">
                <Button className={'adminLoginBtn'} name={'Cancel'} />
                <Button className={'HeroButton adminLoginBtn'} name={'Save'} />
            </div>
            </div>

        </div>
    </div>
  )
}

export default AddJobPopup