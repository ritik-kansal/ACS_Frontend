import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu'
import { API_GET_IN_TOUCH } from '../../config';
import { AuthContext } from '../../contexts/AuthContext';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader'

const GetInTouch = () => {

    const { user } = useContext(AuthContext);

    const [getInTouch, setGetInTouch] = useState([
        {
            name: '',
            email: '',
            phone: '',
            query: '',
            message: ''
        }
    ]);

    const getContactForms = async () => {
        const res = await axios.get(API_GET_IN_TOUCH, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        });
        if (res.status === 200) {
            console.log(getInTouch)
            console.log(res.data)
            setGetInTouch(res.data.getintouch);
        }
    }

    useEffect(() => {
        getContactForms();
    }, [])


    return (
        <main className='clearAll'>
            <AdminHeader />
            <AdminSideMenu value={'getInTouch'} />

            <section className="blackBox jobsBox">

                <div className="mb-20 b-top "></div>

                {
                    getInTouch.map((contact, index) => {
                        return (
                            <div className="detailListWrap">

                                <div className="detailList">
                                    <strong>Name: </strong>
                                    <span>{contact.name}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Email: </strong>
                                    <span>{contact.email}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Phone: </strong>
                                    <span>{contact.phone}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Query: </strong>
                                    <span>{contact.query}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Message: </strong>
                                    <span>{contact.message}</span>
                                </div>

                            </div>
                        )
                    })
                }

            </section>
        </main>
    )
}

export default GetInTouch