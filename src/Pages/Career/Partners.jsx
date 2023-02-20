import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './CareerStyle.css';
import ServiceBox from '../../Components/serviceBox/ServiceBox';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Partners = () => {
    return (
        <>
            <CommonSubBanner currentPage={'Opportunities'} activePage={'Partners'} className={'partnerBG'} heading={'Partners'} text={'You can join us as paartners by filling the form.'} />
            <section className="gradientBG partnerWrapper">
                <div className="container">

                    <h2 className="heading-3">Benefit from best-in-class capabilities, brought to you by ACS and the most trusted names in technology.</h2>

                    <div className="x3BoxWrap mt-60">
                        <ServiceBox src={'/ACS_Frontend/assets/img/settings.png'} text={'Seamless integration keeps it simple'} />
                        <ServiceBox src={'/ACS_Frontend/assets/img/glow.png'} text={'Big ideas call for big thinking'} />
                        <ServiceBox src={'/ACS_Frontend/assets/img/workingUser.png'} text={'The latest in emerging technology'} />
                    </div>

                    <section className="multiLevelFormWrap">
                        <form action="" className='whiteForm'>
                            <h3 className="heading-4">Let’s connect to find out what the power of our partnerships can do for you.</h3>
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <Input className={'talentForm'} type={'text'} placeholder={'Name'} />
                            <div className="btnWraperCenter">
                                <Button className={'HeroButton mt-20'} name={'Submit'} />
                            </div>
                        </form>
                    </section>

                </div>
            </section>
        </>
    )
}

export default Partners