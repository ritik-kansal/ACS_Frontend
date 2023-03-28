import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Header from '../../Layouts/Header/Header';
import './NewsStyle.css';

const News = () => {
    return (
        <>
            <Header page={'insight'} />
            <CommonSubBanner currentPage={'Insight'} activePage={'News'} className={'NewsBG'} heading={'News'} text={'All Headlines of us that represent us in news'} />
            <section className="gradientBG newsWrapper">
                <div className="container">

                    <div className="newsArticleWrap">
                        <div className="newsArticle">ACS provides Project Management Services to New York State Education Department (NYSED)</div>
                        <span className="newsDetail mt-10">ACS is providing Project Management Services to the NYSED. ACS is responsible for leading multi-disciplinary teams in information technology (IT) projects and will interact with Program Leaders, Associate Program Leaders, Technical Staff, and customers including steering committees and project review panels to define project scope, project management approaches, cost, schedule, and to execute and report status of projects..</span>
                    </div>

                    <div className="newsArticleWrap">
                        <div className="newsArticle">ACS provides Business Analysis Services to NYS Higher Education Services (HESC)</div>
                        <span className="newsDetail mt-10">ACS is Business Analysis services to HESC where we are working with business process owners and key stakeholders to identify business process improvement opportunities, elicit business requirements, analyze and evaluate solutions options, and deliver business value through new system and process capabilities.</span>
                    </div>

                    <div className="newsArticleWrap">
                        <div className="newsArticle">ACS is providing Cloud Services to NYC Metropolitan Transit Authority (MTA)</div>
                        <span className="newsDetail mt-10">ACS is responsible for the overall direction and roadmap for the organization’s architectural approach to cloud services utilization. ACS drives development of the overall application, data, and infrastructure blueprints and standards in relation to cloud technologies. We design an architecture that supports multiple cloud environments, while ensuring adherence to enterprise patterns and industry best practices.</span>
                    </div>

                    <div className="newsArticleWrap">
                        <div className="newsArticle">IT Staff Augmentation Services to the NYS Department of Motor Vehicles (DMV)</div>
                        <span className="newsDetail mt-10">ACS is providing IT staff augmentation services to the DMV. We placed two (2) highly qualified & certified Project Managers two (2) ColdFusion Developers, one (1) Tester, and one Expert Programmer required by the DMV. We have matched the requirement and provided the resumes of qualified candidates at a possible low cost. For these roles, our experienced SMEs (20+ years of experience) of similar skill sets interacted with candidates to evaluate various technical parameters. This process ensured that candidates are technically fit and had relevant experience/skills as per the job requirement.</span>
                    </div>

                    <div className="newsArticleWrap">
                        <span className="newsDetail mt-10">ACS is providing IT staff augmentation services to the OGS and placed one (1) certified and skilled Java Developer. Our consultant is still working with the OGS and performing well. Team ACS has performed a reference and background check of the candidate before submitting resume to the OGS. Team ACS's retention rate is so high as per industry standards</span>
                    </div>


                </div>
            </section>
        </>
    )
}

export default News