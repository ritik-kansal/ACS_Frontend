import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Input from '../../Components/Input/Input';
import './CareerStyle.css';

const Talent = () => {
  return (
    <>
    <CommonSubBanner currentPage={'Opportunities'} activePage={'Talent Community'} className={'talentBanner'} heading={'Talent Community'} text={'You can join our talent community by filling the form.'} />
    <div className="talentWrapper gradientBG">
        <div className="container">

            <section className="multiLevelFormWrap">
                <form action="" className='whiteForm'>
                <h3 className="heading-4">Join our talent community and we will notify you about relevant positions, and keep you in mind when we have interesting opportunities</h3>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                    <Input className={'talentForm'} type={'text'} placeholder={'Name'}/>
                </form>
            </section>

        </div>
    </div>
    </>
  )
}

export default Talent