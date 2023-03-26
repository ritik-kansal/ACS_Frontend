import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import Input from '../../Components/Input/Input'
import { API_JOB } from '../../config';
import Header from '../../Layouts/Header/Header';
import './CareerStyle.css';

const Career = () => {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState({
    position: '',
    location: '',
    job_type: '',
    job_category: ''
  });

  const location = [
    'Location 1',
    'Location 2',
    'Location 3',
    'Location 4',
  ]

  const jobType = [
    'IT',
    'Medical',
    'Non IT',
    'Other'
  ]


  const getJobs = async () => {
    const res = await axios.get(API_JOB)
    console.log(res.data)
    setJobs(res.data['jobs'])
  }

  const onSearch = async () => {
    const res = await axios.get(API_JOB + "/search?position=" + search.position + "&location=" + search.location + "&job_type=" + search.job_type + "&job_category=" + search.job_category)
    console.log(res.data)
    setJobs(res.data['jobs'])
  }

  useEffect(() => {
    getJobs();
  }, [])

  useEffect(() => {
    onSearch();
  }, [search])

  return (
    <>
      <Header page={'job'} />
      <CommonSubBanner currentPage={'Opportunities'} activePage={'Current Job Openings'} className={'careerBanner'} heading={'Current Job Openings'} text={'We are looking for talented professionals to join our team. The following areas are where we have immediate needs.'} />
      <section className="gradientBG">
        <div className="container">

          <div className="searchBoxWrap">
            <Input className={'searchBox searchBoxIcon'} placeholder={'Search Any Position'} value={search.position} onChange={(e) => { setSearch({ ...search, position: e.target.value }) }} />
            <Input className={'searchBox resHide'} placeholder={'Job Category'} value={search.job_category} onChange={(e) => { setSearch({ ...search, job_category: e.target.value }) }} />

            <select id="options2" value={search.job_type} onChange={(e) => { setSearch({ ...search, job_type: e.target.value }) }}>
              <option value="">All Job Type</option>
              {
                jobType.map((item, index) => {
                  return (
                    <option value={item} key={index}>{item}</option>
                  )
                })
              }
            </select>
            <select id="options3" value={search.location} onChange={(e) => { setSearch({ ...search, location: e.target.value }) }}>
              <option value="">All Job Location</option>
              {
                location.map((item, index) => {
                  return (
                    <option value={item} key={index}>{item}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="commonTableWrapper">
            <table className='commonTable responsiveTable mt-60'>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>location</th>
                  <th>Experience</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobs.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.position}</td>
                        <td>{item.location}</td>
                        <td>{item.required_exp}</td>
                        <td>
                          <Link to={`/getaJob/${item.id}`} className="redlink">Apply Now
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
                    )
                  })
                }
              </tbody>
            </table>
          </div>  

        </div>
      </section>
    </>
  )
}

export default Career