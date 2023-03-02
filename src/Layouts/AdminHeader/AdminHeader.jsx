import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import './AdminHeaderStyle.css';

const AdminHeader = ({ onClick }) => {
  const location = useLocation();
  return (
    <header className='adminHeader'>
      <div className="container">
        <nav className="navigationWrap">
          <a href="./" className='logoAlign'><img src="../assets/svg/Logo.svg" alt="" /></a>
          <div className="buttonWrapHeader flexbox">
            <div className="HeaderHeading">{location.pathname === '/govermentExperiences' && 'Government Experiences'}</div>
            <div className=" flexbox rightWrapper">

              <Button className={'HeroButton headerBtn'} name={'Add New'} onClick={onClick} />

              <span>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="42" height="42" rx="8.07692" fill="#414141" />
                  <g clip-path="url(#clip0_7_21326)">
                    <path d="M12.9231 31.0962C12.9231 28.9541 13.7741 26.8997 15.2888 25.385C16.8035 23.8702 18.8579 23.0193 21 23.0193C23.1422 23.0193 25.1965 23.8702 26.7113 25.385C28.226 26.8997 29.0769 28.9541 29.0769 31.0962H27.0577C27.0577 29.4896 26.4195 27.9488 25.2835 26.8128C24.1474 25.6767 22.6066 25.0385 21 25.0385C19.3934 25.0385 17.8526 25.6767 16.7166 26.8128C15.5805 27.9488 14.9423 29.4896 14.9423 31.0962H12.9231ZM21 22.0097C17.6531 22.0097 14.9423 19.2989 14.9423 15.952C14.9423 12.6051 17.6531 9.89429 21 9.89429C24.3469 9.89429 27.0577 12.6051 27.0577 15.952C27.0577 19.2989 24.3469 22.0097 21 22.0097ZM21 19.9904C23.2313 19.9904 25.0385 18.1832 25.0385 15.952C25.0385 13.7207 23.2313 11.9135 21 11.9135C18.7688 11.9135 16.9616 13.7207 16.9616 15.952C16.9616 18.1832 18.7688 19.9904 21 19.9904Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_21326">
                      <rect width="24.2308" height="24.2308" fill="white" transform="translate(8.88464 8.88464)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="42" height="42" rx="8.07692" fill="#414141" />
                  <g clip-path="url(#clip0_7_21331)">
                    <path d="M29.0769 27.0578H27.0576V29.077H14.9423V12.9232H27.0576V14.9424H29.0769V11.9135C29.0769 11.6458 28.9705 11.389 28.7812 11.1996C28.5918 11.0103 28.335 10.9039 28.0673 10.9039H13.9326C13.6649 10.9039 13.4081 11.0103 13.2187 11.1996C13.0294 11.389 12.923 11.6458 12.923 11.9135V30.0866C12.923 30.3544 13.0294 30.6112 13.2187 30.8005C13.4081 30.9899 13.6649 31.0962 13.9326 31.0962H28.0673C28.335 31.0962 28.5918 30.9899 28.7812 30.8005C28.9705 30.6112 29.0769 30.3544 29.0769 30.0866V27.0578ZM27.0576 19.9905H19.9903V22.0097H27.0576V25.0385L32.1057 21.0001L27.0576 16.9616V19.9905Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_21331">
                      <rect width="24.2308" height="24.2308" fill="white" transform="matrix(-1 0 0 1 33.1154 8.88464)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AdminHeader