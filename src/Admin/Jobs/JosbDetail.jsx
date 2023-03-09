import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu'
import { API_JOB } from '../../config';
import { AuthContext } from '../../contexts/AuthContext';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader'

const JosbDetail = ({ match }) => {

    let { id } = useParams();
    const { user } = useContext(AuthContext);

    const [job, setJob] = useState({
        job: {
            position: '',
            location: '',
            qualification: '',
            job_type: '',
            job_category: '',
            desc: '',
            required_exp: '',
        },
        applicants: []
    });

    const getJob = async () => {
        const res = await axios.get(
            `${API_JOB}/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            }
        });
        console.log(res.data)
        setJob(res.data);
    }

    useEffect(() => {
        getJob();
    }, [])


    return (
        <main className='clearAll'>
            <AdminHeader />
            <AdminSideMenu value={'jobs'} />

            <section className="blackBox jobsBox">

                <div className="jobsHeading">{job.job.position}</div>
                <div className="jobsText mt-5">{job.job.desc}</div>

                <div className="jobsText mt-20"><strong>Required Experience:</strong> <br />
                    {job.job.required_exp}</div>

                <div className="mb-20 b-top "></div>

                {
                    job.applicants.map((applicant, index) => {
                        return (
                            <div className="detailListWrap">

                                <div className="detailList">
                                    <strong>Name: </strong>
                                    <span>{applicant.full_name}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Email: </strong>
                                    <span>{applicant.email}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Phone: </strong>
                                    <span>{applicant.phone}</span>
                                </div>

                                <div className="detailList">
                                    <strong>Cover Letter: </strong>
                                    <span>{applicant.cover_letter}</span>
                                </div>

                                <div className="detailList flexbox">
                                    <strong>CV: </strong>
                                    <span className='redLinkCV'>
                                        <a className='redLinkCV' href={`https://acs-data-1.s3.us-east-2.amazonaws.com/${applicant.cv}`}>Cv</a>
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

export default JosbDetail