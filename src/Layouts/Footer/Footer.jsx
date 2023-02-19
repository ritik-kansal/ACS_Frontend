import React from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './FooterStyle.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">

            <div className="topLevelFooter flexBox">

                <div className="topLevelLeft">
                    <h2 className="footerHeading">Get in Touch</h2>
                    <p className="footerText mt-10">If you have any comments, suggestions or questions, please do not hesitate to contact us. 
                    Our high-quality office staff will help you and answer all your questions.</p>

                    <div className="listBox mt-30">
                        <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1.20996" width="45.0002" height="44.9997" rx="22.4999" stroke="white"/>
                        <path d="M29.9368 27.3808V30.2264C29.9369 30.4301 29.8597 30.6263 29.7208 30.7754C29.5819 30.9244 29.3916 31.0152 29.1884 31.0295C28.8367 31.0536 28.5494 31.0665 28.3273 31.0665C21.2156 31.0665 15.4512 25.3021 15.4512 18.1906C15.4512 17.9684 15.4632 17.6811 15.4882 17.3295C15.5025 17.1262 15.5933 16.936 15.7423 16.7971C15.8914 16.6582 16.0876 16.581 16.2913 16.5811H19.137C19.2368 16.581 19.3331 16.618 19.4071 16.6849C19.4812 16.7518 19.5277 16.8439 19.5377 16.9432C19.5562 17.1283 19.5731 17.2756 19.5892 17.3874C19.7492 18.5035 20.0769 19.5891 20.5614 20.6072C20.6378 20.7682 20.5879 20.9605 20.4431 21.0635L18.7064 22.3044C19.7683 24.7786 21.74 26.7503 24.2142 27.8121L25.4535 26.0787C25.5042 26.0079 25.5781 25.9571 25.6623 25.9352C25.7466 25.9133 25.8359 25.9216 25.9146 25.9588C26.9327 26.4423 28.0179 26.7693 29.1336 26.9285C29.2455 26.9446 29.3928 26.9623 29.5763 26.98C29.6754 26.9902 29.7673 27.0368 29.8341 27.1108C29.9008 27.1849 29.9369 27.2811 29.9368 27.3808Z" fill="white"/>
                        </svg>
                        <span>+91 7770000230</span>
                    </div>

                    <div className="listBox mt-20">
                        <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1.20947" width="45" height="45.0001" rx="22.5" stroke="white"/>
                        <g clip-path="url(#clip0_12_4234)">
                        <path d="M13.8504 15.0688H31.4076C31.6663 15.0688 31.9144 15.1716 32.0973 15.3545C32.2802 15.5375 32.383 15.7856 32.383 16.0442V31.6506C32.383 31.9093 32.2802 32.1574 32.0973 32.3404C31.9144 32.5233 31.6663 32.626 31.4076 32.626H13.8504C13.5917 32.626 13.3436 32.5233 13.1607 32.3404C12.9778 32.1574 12.875 31.9093 12.875 31.6506V16.0442C12.875 15.7856 12.9778 15.5375 13.1607 15.3545C13.3436 15.1716 13.5917 15.0688 13.8504 15.0688ZM22.6875 23.5382L16.4333 18.2272L15.1701 19.7137L22.7002 26.1074L30.0947 19.7088L28.8189 18.233L22.6875 23.5382Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_12_4234">
                        <rect width="23.4096" height="23.4096" fill="white" transform="translate(10.9248 12.1431)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>Queryonline@acsincny.com</span>
                    </div>

                    <div className="listBox mt-20">
                        <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1.20996" width="45" height="45" rx="22.5" stroke="white"/>
                        <g clip-path="url(#clip0_12_4245)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6064 20.7555C15.6064 16.9807 18.6594 13.9277 22.4342 13.9277C26.209 13.9277 29.262 16.9807 29.262 20.7555C29.262 24.8229 24.9508 30.4315 23.1853 32.5676C22.7951 33.0358 22.0831 33.0358 21.6929 32.5676C19.9177 30.4315 15.6064 24.8229 15.6064 20.7555ZM19.9957 20.7555C19.9957 22.1016 21.0882 23.194 22.4342 23.194C23.7803 23.194 24.8727 22.1016 24.8727 20.7555C24.8727 19.4095 23.7803 18.317 22.4342 18.317C21.0882 18.317 19.9957 19.4095 19.9957 20.7555Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_12_4245">
                        <rect width="23.4096" height="23.4096" fill="white" transform="translate(10.9248 12.144)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>952 Troy Schenectady Rd, Suite #106 Latham, NY -12110</span>
                    </div>

                </div>

                <div className="topLevelRight">
                    <form action="" className='whiteForm'>
                        
                        <Input className={'mt-20'} type={'text'} placeholder={'Name'}/>
                        <Input className={'mt-20'} type={'email'} placeholder={'Email Address'}/>
                        <Input className={'mt-20'} type={'text'} placeholder={'Phone Number'}/>
                        <Button className={'HeroButton mt-20'} name={'Submit'} />

                    </form>
                </div>

            </div>

            <div className="bottomLevelFooter flexBox">
                <span className="footerLogo"><img src="/assets/svg/logo.svg" alt="" /></span>
                <div className="footerList flexBox">
                    <a href="">About us</a>
                    <a href="">Certifications</a>
                    <a href="">Services</a>
                    <a href="">Job Openings</a>
                </div>
            </div>

            <div className="footerSocial flexBox">
                <p className="footerText">© 2022  ACS Consultancy Services. All Rights Reserved.</p>
                <div className="socialIcons">
                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.984863" width="45" height="45.0001" rx="22.5" stroke="white"/>
                        <path d="M32 18.2606C31.3386 18.5618 30.6265 18.7655 29.8796 18.8565C30.6424 18.3884 31.2277 17.6463 31.5034 16.7622C30.7892 17.1956 30 17.5109 29.1569 17.6799C28.4849 16.9442 27.5246 16.4849 26.4617 16.4849C24.4237 16.4849 22.7702 18.1804 22.7702 20.2714C22.7702 20.5683 22.8019 20.8565 22.8653 21.1338C19.7961 20.9757 17.0755 19.4697 15.253 17.1761C14.935 17.7373 14.7533 18.3884 14.7533 19.0818C14.7533 20.3949 15.4052 21.5542 16.3962 22.2335C15.7919 22.2151 15.2213 22.0428 14.7227 21.7611V21.8077C14.7227 23.643 15.9958 25.1739 17.6862 25.5206C17.3767 25.6095 17.0502 25.6539 16.7132 25.6539C16.4754 25.6539 16.243 25.6311 16.018 25.5867C16.4881 27.0905 17.851 28.1858 19.4675 28.2151C18.2039 29.2313 16.6107 29.837 14.8811 29.837C14.5832 29.837 14.2884 29.8196 14 29.785C15.6344 30.8576 17.5763 31.4849 19.6609 31.4849C26.4543 31.4849 30.168 25.7156 30.168 20.7113C30.168 20.5466 30.1648 20.3819 30.1585 20.2205C30.8801 19.6864 31.5066 19.0201 32 18.2606Z" fill="white"/>
                    </svg>

                    <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.984863" width="45.0002" height="44.9997" rx="22.4999" stroke="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1188 19.2561H16.0934C14.8234 19.2561 14 18.4252 14 17.372C14 16.2983 14.8477 15.4849 16.1431 15.4849C17.4374 15.4849 18.2333 16.2963 18.2587 17.369C18.2587 18.4222 17.4374 19.2561 16.1188 19.2561ZM32.0001 31.4839H28.0218V25.8593C28.0218 24.3871 27.3995 23.382 26.0311 23.382C24.9844 23.382 24.4024 24.0602 24.1314 24.7139C24.042 24.9205 24.0436 25.1985 24.0452 25.4851C24.0455 25.524 24.0457 25.5631 24.0457 25.6021V31.4839H20.1045C20.1045 31.4839 20.1553 21.5204 20.1045 20.6148H24.0457V22.3206C24.2785 21.5747 25.5379 20.5103 27.5477 20.5103C30.0411 20.5103 32.0001 22.0737 32.0001 25.4403V31.4839ZM17.9624 20.6157H14.454V31.4849H17.9624V20.6157Z" fill="white"/>
                    </svg>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer