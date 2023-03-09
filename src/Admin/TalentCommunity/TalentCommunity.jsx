import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu';
import { API_TALENT } from '../../config';
import { AuthContext } from '../../contexts/AuthContext';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';
import './TalentCommunityStyle.css';

const TalentCommunity = () => {

    const { user } = useContext(AuthContext);

    const [talentCommunity, setTalentCommunity] = useState([]);

    const getTalentCommunity = async () => {
        const res = await axios.get(API_TALENT, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        });
        if (res.status === 200) {
            console.log(talentCommunity)
            console.log(res.data)
            setTalentCommunity(res.data.talentForms);
        }
    }

    useEffect(() => {
        getTalentCommunity();
    }, [])


    return (
        <main className='clearAll'>
            <AdminHeader />
            <AdminSideMenu value={'talentCommunity'} />
            <section className="blackBox">

                {
                    talentCommunity.map((talent, index) => {
                        return (

                            <div className="detailListWrap">

                                <div className="detailList">
                                    <strong>Name: </strong>
                                    <span>{talent.first_name + " " + talent.last_name}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Email: </strong>
                                    <span>{talent.email}</span>

                                </div>

                                <div className="detailList">
                                    <strong>phone: </strong>
                                    <span>{talent.phone}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Current Employee: </strong>
                                    <span>{talent.current_employee}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Current Designation: </strong>
                                    <span>{talent.current_designation}</span>
                                </div>

                                <div className="detailList">

                                    <strong>CV: </strong>
                                    <span className='redLinkCV'>
                                        <a className='redLinkCV' href={`https://acs-data-1.s3.us-east-2.amazonaws.com/${talent.cv}`}>Cv</a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7_21811)">
                                                <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12H4V19Z" fill="#FF364C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7_21811">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        )
                    })

                }

            </section>
        </main>
    )
}

export default TalentCommunity