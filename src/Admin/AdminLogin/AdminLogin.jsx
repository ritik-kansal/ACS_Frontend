import React, { useContext, useEffect, useState } from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { AuthContext } from '../../contexts/AuthContext';
import './AdminLoginStyle.css';
import { useNavigate } from "react-router-dom";
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';

const AdminLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const navigate = useNavigate();

  const { login, isAuthenticated } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({
        email: email,
        password: password
      });
    } catch (err) {
      console.log(err.data);
      setError(err.message);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin-jobs');
    }
  }, [isAuthenticated]);

  return (
    <>
      <AdminHeader />
      <section className="adminLoginWrap">

        <div className="adminLoginBox">
          <div className="adminHeading">Admin Login</div>
          <form onSubmit={handleLogin}>
            <Input className='mt-40' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <Input className='mt-20' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            {error && <div className="textRight redLink mt-5">{error}</div>}
            <Button type="submit" className={'HeroButton adminLoginBtn mt-40'} name={'Login'} />
          </form>
        </div>

      </section >
    </>
  )
}

export default AdminLogin