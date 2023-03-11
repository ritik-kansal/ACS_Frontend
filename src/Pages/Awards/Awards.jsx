import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Header from '../../Layouts/Header/Header';
import './AwardsStyle.css';

const Awards = () => {
    return (
        <>
            <Header page={'insight'} />
            <CommonSubBanner currentPage={'Insight'} activePage={'Awards'} className={'AwardBG'} heading={'Awards'} text={'All Headlines of us that represent us in news'} />
            <section className="gradientBG newsWrapper">
                <div className="container">

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">1. New York State Education Department (NYSED)</div>
                        <span className="awardsAnswer">Contract Type: Project Management Services</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">2. NYS Higher Education Services (HESC)</div>
                        <span className="awardsAnswer">Contract Type: Business Analysis</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">3. NYC Metropolitan Transit Authority (MTA)</div>
                        <span className="awardsAnswer">Contract Type: Application Development and Cloud Services.</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">4. NYS Department of Motor Vehicles (DMV)</div>
                        <span className="awardsAnswer">Contract Type: Project Management Services, Application Development Services, quality Assurance Services and Programming Services.</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">5. NYS Office of General Services (OGS)</div>
                        <span className="awardsAnswer">Contract Type: Application Development Services.</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">6. NYS Department of Environment Conservation (DEC)</div>
                        <span className="awardsAnswer"> Contract Type: Project and Program Management Services</span>
                    </div>

                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">7. NYS Department of Transportation (DOT) </div>
                        <span className="awardsAnswer"> Contract Type: Business Analysis and Application Development Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">8. NYS Integrated Eligibility Services (IES)  </div>
                        <span className="awardsAnswer">Contract Type: Cobol Development Services, Business Analysis, Quality Assurance and Application Development Services. </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">9. The New York Statewide Financial System (SFS) </div>
                        <span className="awardsAnswer">Contract Type: Application Development Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">10. New York State Department of Taxation and Finance (DTF).
                        </div>
                        <span className="awardsAnswer">Contract Type: Project and Program Management Services, and Software Development Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">11. NYS Office of Children and Family Services (OCFS)
                        </div>
                        <span className="awardsAnswer">Contract Type: IT staff augmentation services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">12. NYS Department of Health (DOH)
                        </div>
                        <span className="awardsAnswer">Contract Type: Project Management, Business Analysis and Application Development Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">13. NYS Office of Mental Health (OMH)
                        </div>
                        <span className="awardsAnswer">Contract Type: Business Analysis and Application Development Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">14. NYS Department of Corrections & Community Supervision (DCCS) </div>
                        <span className="awardsAnswer">Contract Type: IT staff augmentation.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">15. New York State Insurance Fund (STIF)
                        </div>
                        <span className="awardsAnswer">Contract Type: IT staff augmentation services. </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">16. NYS Office of Attorney General (OAG) </div>
                        <span className="awardsAnswer">Contract Type: IT staff augmentation services. </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">17. NYS Board of Elections
                        </div>
                        <span className="awardsAnswer">Contract Type: Application Development.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">18. NYS Department of Public Service (DPS)  </div>
                        <span className="awardsAnswer">Contract Type: Quality Assurance Services.
                        </span>
                    </div>
                    <div className="awardsArticleWrap">
                        <div className="awardsQuestion">19. New York State Department of Labor (DOL)
                        </div>
                        <span className="awardsAnswer">Contract Type: IT Support and Services. </span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Awards