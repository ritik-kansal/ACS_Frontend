import React, { useContext, useState } from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './CareerStyle.css';
import ServiceBox from '../../Components/serviceBox/ServiceBox';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../contexts/AuthContext';
import { API_PARTNER } from '../../config';
import axios from 'axios';
import Header from '../../Layouts/Header/Header';

const Partners = () => {

    const partners = [
        'Sub Contractor',
        'Joint Venture',
        'Prime Contractor',
    ]

    const defaultPartner = {
        name: "",
        organisation: "",
        region: "",
        message: "",
        email: "",
        phone_number: "",
        partners: partners[0],
    }


    const [partner, setPartner] = useState(defaultPartner);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSave = async (e) => {

        e.preventDefault();
        const res = await axios.post(API_PARTNER, partner);

        if (res.status === 200) {
            setPartner(defaultPartner);
            setIsSubmitted(true);
        }
        else {
            setPartner(defaultPartner);
            setIsSubmitted(false);
        }
    }



    return (
        <>
            <Header page={'job'} />
            <CommonSubBanner currentPage={'Opportunities'} activePage={'Partners'} className={'partnerBG'} heading={'Partners'} text={'You can join us as paartners by filling the form.'} />
            <section className="gradientBG partnerWrapper">
                <div className="container">

                    <h2 className="heading-3">Benefit from best-in-class capabilities, brought to you by ACS and the most trusted names in technology.</h2>

                    <div className="x3BoxWrap mt-60">
                        <ServiceBox src={'./assets/img/settings.png'} text={'Seamless integration keeps it simple'} />
                        <ServiceBox src={'./assets/img/glow.png'} text={'Big ideas call for big thinking'} />
                        <ServiceBox src={'./assets/img/workingUser.png'} text={'The latest in emerging technology'} />
                    </div>

                    <section className="multiLevelFormWrap">
                        <form onSubmit={onSave} className='whiteForm'>
                            <h3 className="heading-4">Let’s connect to find out what the power of our partnerships can do for you.</h3>
                            <Input required={true} className={'talentForm'} type={'text'} placeholder={'Name'} value={partner.name} onChange={(e) => setPartner({ ...partner, name: e.target.value })} />
                            <Input required={true} className={'talentForm'} type={'text'} placeholder={'Email'} value={partner.email} onChange={(e) => setPartner({ ...partner, email: e.target.value })} />
                            <Input required={true} className={'talentForm'} type={'text'} placeholder={'Organization'} value={partner.organisation} onChange={(e) => setPartner({ ...partner, organisation: e.target.value })} />
                            <Input required={true} className={'talentForm'} type={'text'} placeholder={'Phone Number'} value={partner.phone_number} onChange={(e) => { if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) { setPartner({ ...partner, phone_number: e.target.value }) } }} />
                            <Input required={true} className={'talentForm'} type={'text'} placeholder={'Region'} value={partner.region} onChange={(e) => setPartner({ ...partner, region: e.target.value })} />
                            <div className="formGroup talentForm partner-select">

                                <select required={true} id="options1" name="options1" className="selectBox" value={partner.partners} onChange={(e) => setPartner({ ...partner, partners: e.target.value })}>
                                    {
                                        partners.map((partner, index) => {
                                            return <option key={index} value={partner}>{partner}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <textarea className='sameDesignTextArea mt-20' placeholder='Message' name="" id="" cols="10" rows="10" value={partner.message} onChange={(e) => setPartner({ ...partner, message: e.target.value })}></textarea>

                            <div className="btnWraperCenter">
                                <Button type="submit" className={'HeroButton mt-20'} name={'Submit'} />
                            </div>
                        </form>
                        {
                            isSubmitted && <div className="successMsg">
                                <h3 className="heading-4">Thank you for your interest in partnering with us. We will get back to you shortly.</h3>
                            </div>
                        }
                    </section>

                </div>
            </section>
        </>
    )
}

export default Partners