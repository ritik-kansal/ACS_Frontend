import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Input from '../../Components/Input/Input';
import { API_APPLICANTS, API_JOB } from '../../config';
import Header from '../../Layouts/Header/Header';
import './CareerStyle.css';

const GetJob = () => {

    const defaultApplicant = {
        full_name: '',
        email: '',
        phone_number: '',
        cover_letter: '',
        applied_for: '',
    }

    let { id } = useParams();
    const [job, setJob] = useState({});
    const [applicant, setApplicant] = useState(defaultApplicant);
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
        formData.append('full_name', applicant.full_name);
        formData.append('email', applicant.email);
        formData.append('phone_number', applicant.phone_number);
        formData.append('cover_letter', applicant.cover_letter);
        formData.append('applied_for', id);


        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        await axios.post(API_APPLICANTS, formData).then((res) => {
            console.log(res);
            setFiles([]);
            setApplicant(defaultApplicant);
            setFileValue('');
            setIsSubmitted(true);

        }
        ).catch((err) => {
            console.log(err);
            setFiles([]);
            setApplicant(defaultApplicant);
            setFileValue('');

        });
    }

    const getJob = async () => {
        const res = await axios.get(API_JOB + "/apply/" + id);
        console.log(res.data);
        setJob(res.data['job']);
    }

    useEffect(() => {
        getJob();
    }, [])

    return (
        <>
            <Header page={'job'} />
            <CommonSubBanner currentPage={'Opportunities > Current Job Openings'} activePage={'Peoplesoft Functional Supply Chain Manager'} className={'careerBanner'} />
            <section className="gradientBG">
                <div className="container">

                    <div className="flexBox formDetailWrap">
                        <div className="formLeft">
                            <h3 className="heading-3">{job.position}</h3>
                            <p className="text-3 mt-5">{job.desc}</p>
                            <p className='newHeading-3 mt-20'>Required Experience:</p>
                            <p className='text-3'>{job.required_exp}
                            </p>
                            <p className="text-3 mt-20"><strong>Qualification Required:</strong> {job.qualification}</p>
                            <p className="text-3 mt-20"><strong>Job Location:</strong> {job.location}</p>
                            <p className="text-3 mt-20"><strong>Job Category:</strong> {job.job_category}</p>
                            <p className="text-3 mt-20"><strong>Job Type:</strong> {job.job_type}</p>

                        </div>
                        <div className="formRight">
                            <form onSubmit={onSave} className='whiteForm contactForm'>
                                <h3 className="formHeading">Apply Here</h3>
                                <Input required={true} className={'mt-30'} type={'text'} placeholder={'Name'} value={applicant.full_name} onChange={(e) => setApplicant({ ...applicant, full_name: e.target.value })} />
                                <Input required={true} className={'mt-20'} type={'email'} placeholder={'Email Address'} value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} />
                                <Input required={true} className={'mt-20'} type={'text'} placeholder={'Phone Number'} value={applicant.phone_number} onChange={(e) => { if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) { setApplicant({ ...applicant, phone_number: e.target.value }) } }} />
                                <textarea className='sameDesignTextArea mt-20' name="" id="" cols="10" rows="10" required={true} placeholder={'Cover Letter'} value={applicant.cover_letter} onChange={(e) => setApplicant({ ...applicant, cover_letter: e.target.value })}>
                                </textarea>
                                {/* <Input required={true} className={'mt-20'} type={'text'} placeholder={'Cover Letter'} value={applicant.cover_letter} onChange={(e) => setApplicant({ ...applicant, cover_letter: e.target.value })} /> */}
                                <Input required={true} className={'mt-20'} type={'file'} placeholder={'Upload CV'} value={fileValue} onChange={(e) => handleFileChange(e)} accept={"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"} />
                                <Button className={'HeroButton mt-20'} name={'Submit'} />

                            </form>
                            {
                                isSubmitted && <div className="alert alert-success mt-20" role="alert"> Application Submitted Successfully </div>
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default GetJob