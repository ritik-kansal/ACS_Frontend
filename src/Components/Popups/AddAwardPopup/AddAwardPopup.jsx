import React from 'react'
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import './AddAwardPopupStyle.css';

const AddAwardPopup = ({isActive}) => {
  return (
    <div className={`popupWrap ${isActive && 'active'}`}>
        <div className="popupContainer">

            <div className="popupBody">
            <div className="popupHeading">Add Awards</div>
            <Input className={'mt-40'} type={'text'} placeholder={'Headline'}/>
            <Input className={'mt-20'} type={'file'} placeholder={'Password'} />
            <div className="textRight redLink mt-5">Note:- Image should be square dimensions</div>
            <div className="btnWrapBox mt-40">
                <Button className={'adminLoginBtn'} name={'Cancel'} />
                <Button className={'HeroButton adminLoginBtn'} name={'Save'} />
            </div>
            </div>

        </div>
    </div>
  )
}

export default AddAwardPopup