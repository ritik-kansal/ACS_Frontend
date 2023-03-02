import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AdminSideMenu from '../../Components/AdminSideMenu/AdminSideMenu';
import AddJobPopup from '../../Components/Popups/AddJobPopup/AddJobPopup';
import { API_JOB } from '../../config';
import AdminHeader from '../../Layouts/AdminHeader/AdminHeader';
import './JobsStyle.css';

const Jobs = () => {

    const [isActive, setIsActive] = useState(false);

    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        const res = await axios.get(API_JOB)
        console.log(res.data['jobs'])
        setJobs(res.data['jobs'])
    }

    useEffect(() => {
        getJobs();
    }, [])

    return (
        <main className='clearAll'>
            <AddJobPopup isActive={isActive} onClose={() => { setIsActive(false); getJobs() }} />
            <AdminHeader onClick={() => setIsActive(true)} />
            <AdminSideMenu value={'jobs'} />
            <section className="blackBox jobsBox">

                <table className='commonTable'>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>location</th>
                            <th>Experience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index}>
                                <td>{job.position}</td>
                                <td>{job.location}</td>
                                <td>{job.required_exp}</td>
                                <td>
                                    <Link to={`/admin-jobsDetail/${job.id}`} className="redlink">Details
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_26_12)">
                                                <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_26_12">
                                                    <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </section>
        </main>
    )
}

export default Jobs