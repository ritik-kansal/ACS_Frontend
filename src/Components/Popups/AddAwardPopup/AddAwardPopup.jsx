import axios from 'axios';
import React, { useContext, useState } from 'react'
import { API_GOVERNMENT_EXPERIENCE_URL } from '../../../config';
import { AuthContext } from '../../../contexts/AuthContext';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import './AddAwardPopupStyle.css';

const AddAwardPopup = ({ isActive, onClose, getExperiences }) => {

  const [heading, setHeading] = useState('');
  const [files, setFiles] = useState([]);

  const { user, isAuthenticated } = useContext(AuthContext);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  }

  const onSave = async (e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }


    await axios.post(API_GOVERNMENT_EXPERIENCE_URL, formData, {
      headers: {
        'Authorization': `Bearer ${user.access_token}`
      }
    }).then((res) => {
      console.log(res);
      getExperiences();
      setFiles([]);
      setHeading('');
      onClose();
    }
    ).catch((err) => {
      console.log(err);
      setFiles([]);
      setHeading('');
      onClose();
    });


  }


  return (
    <div className={`popupWrap ${isActive && 'active'}`}>
      <div className="popupContainer">

        <div className="popupBody">
          <div className="popupHeading">Add Awards</div>
          <form onSubmit={onSave}>
            <Input className={'mt-40'} type={'text'} placeholder={'Headline'} value={heading} onChange={(e) => { setHeading(e.target.value) }} />
            <Input className={'mt-20'} type={'file'} onChange={(e) => { handleFileChange(e) }} />
            <div className="textRight redLink mt-5">Note:- Image should be square dimensions</div>
            <div className="btnWrapBox mt-40">
              <Button className={'adminLoginBtn'} name={'Cancel'} onClick={onClose} />
              <Button type="submit" className={'HeroButton adminLoginBtn'} name={'Save'} />
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddAwardPopup