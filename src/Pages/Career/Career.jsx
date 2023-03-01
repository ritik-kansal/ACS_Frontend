import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import Input from '../../Components/Input/Input'
import './CareerStyle.css';

const Career = () => {
  return (
    <>
        <CommonSubBanner currentPage={'Opportunities'} activePage={'Current Job Openings'} className={'careerBanner'} heading={'Current Job Openings'} text={'We are looking for talented professionals to join our team. The following areas are where we have immediate needs.'} />
        <section className="gradientBG">
            <div className="container">

                <div className="searchBoxWrap">
                    <Input className={'searchBox'} placeholder={'Search Any Position'}/>
                    <select id="options1">
                        <option value="All Job Category">All Job Category</option>
                        <option value="All Job Category">All Job Category</option>
                        <option value="All Job Category">All Job Category</option>
                        <option value="All Job Category">All Job Category</option>
                    </select>
                    <select id="options2">
                        <option value="All Job Type">All Job Type</option>
                        <option value="All Job Type">All Job Type</option>
                        <option value="All Job Type">All Job Type</option>
                        <option value="All Job Type">All Job Type</option>
                    </select>
                    <select id="options3">
                        <option value="All Job Location">All Job Location</option>
                        <option value="All Job Location">All Job Location</option>
                        <option value="All Job Location">All Job Location</option>
                        <option value="All Job Location">All Job Location</option>
                    </select>
                </div>

          <table className='commonTable mt-60'>
            <thead>
              <tr>
                <th>Position</th>
                <th>location</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peoplesoft Functional Supply Chain Manager</td>
                <td>New York</td>
                <td>1-4 Years</td>
                <td>
                  <a href="" className="redlink">Apply Now 
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_12)">
                    <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_12">
                    <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Peoplesoft Functional Supply Chain Manager</td>
                <td>New York</td>
                <td>1-4 Years</td>
                <td>
                  <a href="" className="redlink">Apply Now 
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_12)">
                    <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_12">
                    <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Peoplesoft Functional Supply Chain Manager</td>
                <td>New York</td>
                <td>1-4 Years</td>
                <td>
                  <a href="" className="redlink">Apply Now 
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_12)">
                    <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_12">
                    <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Peoplesoft Functional Supply Chain Manager</td>
                <td>New York</td>
                <td>1-4 Years</td>
                <td>
                  <a href="" className="redlink">Apply Now 
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_12)">
                    <path d="M16.3384 10.3041L7.73138 18.9111L6.31738 17.4971L14.9234 8.89014H7.33838V6.89014H18.3384V17.8901H16.3384V10.3041Z" fill="#FF364C"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_12">
                    <rect width="24" height="24" fill="white" transform="translate(0.333984 0.890137)"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

            </div>
        </section>
    </>
  )
}

export default Career