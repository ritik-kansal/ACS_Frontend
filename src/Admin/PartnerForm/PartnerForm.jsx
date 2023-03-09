import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu';
import { API_PARTNER } from '../../config';
import { AuthContext } from '../../contexts/AuthContext';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';
import './PartnerFormStyle.css';

const PartnerForm = () => {

    const { user } = useContext(AuthContext);

    const [partnerForm, setPartnerForm] = useState([]);

    const getPartnerForm = async () => {
        const res = await axios.get(API_PARTNER, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        });
        if (res.status === 200) {
            console.log(partnerForm)
            console.log(res.data)
            setPartnerForm(res.data.partners);
        }
    }

    useEffect(() => {
        getPartnerForm();
    }, [])


    return (
        <main className='clearAll'>
            <AdminHeader />
            <AdminSideMenu value={'partnerForm'} />
            <section className="blackBox">

                {
                    partnerForm.map((partner, index) => {
                        return (

                            <div className="detailListWrap">

                                <div className="detailList">
                                    <strong>Name: </strong>
                                    <span>{partner.name}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Email: </strong>
                                    <span>{partner.email}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Organisation: </strong>
                                    <span>{partner.organisation}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Phone Number: </strong>
                                    <span>{partner.phone_number}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Region: </strong>
                                    <span>{partner.region}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Partners: </strong>
                                    <span>{partner.partners}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Message: </strong>
                                    <span>{partner.message}</span>
                                </div>

                            </div>
                        )
                    })
                }

            </section>
        </main>
    )
}

export default PartnerForm