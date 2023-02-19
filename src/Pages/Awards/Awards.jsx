import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import './AwardsStyle.css';

const Awards = () => {
  return (
    <>
      <CommonSubBanner currentPage={'Insight'} activePage={'Awards'} className={'AwardBG'} heading={'Awards'} text={'All Headlines of us that represent us in news'} />
      <section className="gradientBG newsWrapper">
            <div className="container">

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">1. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">2. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">3. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">4. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">5. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

                <div className="awardsArticleWrap">
                    <div className="awardsQuestion">6. New York State Education Department (NYSED)</div>
                    <span className="awardsAnswer">Contract Type: Project Management Services</span>
                </div>

            </div>
        </section>
    </>
  )
}

export default Awards