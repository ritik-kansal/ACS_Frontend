import React from 'react'
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner';
import Header from '../../Layouts/Header/Header';
import './GovernmentServiceStyle.css';

const GovernmentPlacements = () => {
    return (
        <>
            <Header page={'gov'} />
            <CommonSubBanner currentPage={'Government'} activePage={'Government Placements'} className={'governmentBanner'} heading={'Government Placements'} text={'All certification we have in our showcase are below.'} />

            <section className="placementWrapper gradientBG">
                <div className="container">

                    <h2 className="redHeading">Labor categories with Government agencies by ACS</h2>'
                    <p className="text-2">
                        We believe that one of the most effective ways of understanding and improving health for all is by having
                        a workforce that appreciates and reflects the diversity of the world around us. That’s why we consistently
                        and meticulously examine how we hire to make sure the best candidate always gets the job. Driving diversity,
                        equity and inclusion in hiring involves using data to measure and shape diversity goals and hold ourselves
                        accountable. Of course, we don’t stop there. It’s also a critical step in driving social, environmental,
                        and economic change around the world. Employees’ diverse perspectives, cultures and experiences have sparked
                        staff augmentation services and solutions for more than 11 years. Our fair and inclusive hiring process is
                        how we find people who bring heart, science, and ingenuity to their careers and our collective purpose.
                        Everyone involved in hiring is guided, a shared set of values highlighting our responsibility to provide
                        equal opportunity for employment, development, and advancement to our employee community and beyond.
                    </p>

                </div>
            </section>
        </>
    )
}

export default GovernmentPlacements