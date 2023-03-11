import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import { API_GOVERNMENT_EXPERIENCE_URL } from '../../config';
import Header from '../../Layouts/Header/Header';
import './GovernmentServiceStyle.css';

const GovernmentExperience = () => {

    const [governmentExperience, setGovernmentExperience] = useState([])

    const getGovernmentExperience = async () => {
        const res = await axios.get(API_GOVERNMENT_EXPERIENCE_URL);
        setGovernmentExperience(res.data.gov_exp);
    }

    useEffect(() => {
        getGovernmentExperience();
    }, [])

    return (
        <>
            <Header page={'gov'} />
            <CommonSubBanner currentPage={'Government'} activePage={'Government Experiences'} className={'governmentBanner'} heading={'Government Experiences'} text={'All certification we have in our showcase are below.'} />
            <section className="gradientBG governmentWrapper">
                <div className="container">

                    <div className="x5Wrapper flexBox mt-40">

                        {
                            governmentExperience.map((item, index) => {
                                return (
                                    <div className="boxBusiness" key={index}>
                                        <img src={`https://acs-data-1.s3.us-east-2.amazonaws.com/${item.img}`} alt="" />
                                        <div className="text-3">{item.caption}</div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default GovernmentExperience