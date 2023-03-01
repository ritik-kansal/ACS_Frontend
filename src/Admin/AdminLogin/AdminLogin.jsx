import React from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './AdminLoginStyle.css';

const AdminLogin = () => {
  return (
    <section className="adminLoginWrap">

        <div className="adminLoginBox">
            <div className="adminHeading">Admin Login</div>
            <Input className={'mt-40'} type={'text'} placeholder={'Username'}/>
            <Input className={'mt-20'} type={'password'} placeholder={'Password'}/>
            <div className="textRight redLink mt-5">Forgot Password</div>
            <Button className={'HeroButton adminLoginBtn mt-40'} name={'Login'} />
        </div>

    </section>
  )
}

export default AdminLogin