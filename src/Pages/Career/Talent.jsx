import axios from 'axios';
import React, { useState } from 'react'
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Input from '../../Components/Input/Input';
import { API_TALENT } from '../../config';
import Header from '../../Layouts/Header/Header';
import './CareerStyle.css';

const Talent = () => {

    const defaultTalent = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        current_employee: "",
        current_designation: "",
    }

    const [talent, setTalent] = useState(defaultTalent);
    const [files, setFiles] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileValue, setFileValue] = useState('');

    const handleFileChange = (e) => {
        setFileValue(e.target.value);
        setFiles(e.target.files);
    }

    const onSave = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('first_name', talent.first_name);
        formData.append('last_name', talent.last_name);
        formData.append('email', talent.email);
        formData.append('phone', talent.phone);
        formData.append('current_employee', talent.current_employee);
        formData.append('current_designation', talent.current_designation);

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        await axios.post(API_TALENT, formData).then((res) => {
            console.log(res);
            setFiles([]);
            setTalent(defaultTalent);
            setFileValue('');
            setIsSubmitted(true);

        }
        ).catch((err) => {
            console.log(err);
            setFiles([]);
            setTalent(defaultTalent);
            setFileValue('');

        })
    }


    return (
        <>
            <Header page={'job'} />
            <CommonSubBanner currentPage={'Opportunities'} activePage={'Talent Community'} className={'talentBanner'} heading={'Talent Community'} text={'You can join our talent community by filling the form.'} />
            <div className="talentWrapper gradientBG">
                <div className="container">

                    <section className="multiLevelFormWrap">
                        <form onSubmit={onSave} className='whiteForm'>
                            <h3 className="heading-4">Join our talent community and we will notify you about relevant positions, and keep you in mind when we have interesting opportunities</h3>
                            <Input className={'talentForm'} type={'text'} placeholder={'First Name'} value={talent.first_name} onChange={(e) => setTalent({ ...talent, first_name: e.target.value })} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Last Name'} value={talent.last_name} onChange={(e) => setTalent({ ...talent, last_name: e.target.value })} />
                            <Input className={'talentForm'} type={'email'} placeholder={'Email id'} value={talent.email} onChange={(e) => setTalent({ ...talent, email: e.target.value })} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Phone Number'} value={talent.phone} onChange={(e) => { if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) { setTalent({ ...talent, phone: e.target.value }) } }} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Current Employee'} value={talent.current_employee} onChange={(e) => setTalent({ ...talent, current_employee: e.target.value })} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Current Designation'} value={talent.current_designation} onChange={(e) => setTalent({ ...talent, current_designation: e.target.value })} />

                            <Input className={'talentForm'} type={'file'} placeholder={'Upload Resume'} value={fileValue} onChange={handleFileChange} accept={"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"} />
                            <div className="btnWraperCenter">
                                <Button type="submit" className={'HeroButton mt-20'} name={'Submit'} />
                            </div>
                        </form>
                        {
                            isSubmitted &&
                            <div className="talentSuccess">
                                <h3 className="heading-4">Thank you for joining our talent community. We will get back to you soon.</h3>
                            </div>
                        }

                    </section>

                </div>
            </div>
        </>
    )
}

export default Talent