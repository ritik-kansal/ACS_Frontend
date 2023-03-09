import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button/Button';
import CommonSubBanner from '../../Components/CommonSubBanner/CommonSubBanner'
import './servicesStyle.css';

import { Link, useParams } from 'react-router-dom';

const Services = () => {

    const [active, setActive] = useState(0);
    const [currentService, setCurrentService] = useState({});
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');


    let { service } = useParams();

    const services = {
        'ETS': {
            title: 'Enterprise Technology Services',
            desc: 'Enterprise Technology Services comprises IT units that provide a standardized approach to the management, coordination, and integration of enterprise applications. Enterprise Technology services architecture includes principles of object-oriented design and high-level components employed to match the heterogeneous world of IT architecture. Powersolv offers a comprehensive suite of Enterprise-wide Technology Services to assist your organization to operate effectively and efficiently through the use of technology. Powersolv offers best-in-class shared and dedicated application development and maintenance services ensuring a winning combination of quality and consistency.',
            list: [
                {
                    title: 'Application Development & Maintenance',
                    img: 'ETS1.png',
                    points: [
                        'Realize faster time to market',
                        'Increase frequency and quality of deployments',
                        'Improve solution quality and shorten lead times for fixes',
                        'Deliver early and often, and detect errors earlier',
                        'Improve innovation and risk-taking by making it safer to experiment',
                        'Reduce the severity and frequency of release failures'

                    ]
                },
                {
                    title: 'Quality Assurance & Testing',
                    img: 'ETS2.png',
                    points: [
                        "Quality Assurance (QA)",
                        "Functional Testing",
                        "User Experience Testing",
                        "Compatibility Testing",
                        "Performance and Load Testing",
                        "User Acceptance Testing",
                        "Regression Testing"
                    ]
                },
                {
                    title: 'Enterprise Mobile Solutions',
                    img: 'ETS3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }, {
                    title: 'Database Management',
                    img: 'ETS4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]
        },
        'ERP': {
            title: 'ERP/SAP Services',
            desc: 'An ERP system is an integrated platform which supports a variety of business functions such as Manufacturing, Supply Chain Management, Financials, Projects, Human Resources, Customer Relationship Management, Supplier Relationship Management and Product Lifecycle Management. In today’s competitive world, SAP has established as an undisputed market leader in providing ERP solutions and has successfully been adopted across industry verticals across geographies. SAP ERP offers business functions as modules, such as Financials and Controlling (FICO), Human Capital Management (HCM), Materials Management (MM), Sales & Distribution (SD), Production Planning (PP), Quality Management (QM), Project Systems(PS), Plant Maintenance (PM), Warehouse Management (WM) and Environment, Health and Safety (EHS). SAP has typically focused on best practice methodologies for driving its software processes, but has more recently expanded into vertical markets. SAP also offers 23 Industry Specific (IS) tailor made functionalities targeted towards specific industry verticals like as Oil & Gas, Utilities, Retail, Chemicals, Mill Products, Pharma, Healthcare, Higher Education and Research, Automobiles, Media, Banking, Insurance, Public Sector, Mining, Professional Services, Engineering, Construction and Operations(ECO), Consumer Products, Defense & Security, Consumer Goods, Telecommunications, Financial Services, Wholesale Distribution, Professional Services and High Tech.',
            list: [
                {
                    title: 'SAP End-to-End Implementations',
                    img: 'ERP1.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'SAP Industry Solutions Implementations',
                    img: 'ERP2.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'SAP Application Management Services',
                    img: 'ERP3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: "SAP Upgrades and Migrations",
                    img: 'ERP4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]
        },
        'StaffAugmentation': {
            title: 'Staff Augmentation',
            desc: "Looking for software engineers with a specific skill set to fill talent gaps? Our IT staff augmentation company can help you strike a perfect balance between project progress and cost-effectiveness. Build your team up and down with ease based on the current development needs. We help you avoid costly and lengthy recruitment processes and the paperwork hassle of on-site hiring.ACS is a leading IT staff augmentation agency in Ukraine with numerous staffing solutions on demand. Our clients get relevant staffing support without overpaying for redundant recruitment stages. Remote developers will join the in-house development processes, assisting your staff in desktop, mobile, or web product development, giving you the support and assistance you need right now.",
            list: [
                {
                    title: 'Add Extra Force in Your Existing Project',
                    img: 'Staff1.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Vendor Transition',
                    img: 'Staff2.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Staff Augmentation& Migration',
                    img: 'Staff3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Long-Term Extended Team',
                    img: 'Staff4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]
        },
        'Cloud': {
            title: 'Cloud Management Services',
            desc: 'Cloud services have become an integral part of any comprehensive IT strategy, they decrease costs, enhance time to market and bring a new level of adaptability to your IT operations. Powersolv has a storied history of providing efficient cloud based services and expertise to our clients. Our cloud services are specifically constructed to facilitate the adoption and implementation of responsive cloud based technologies and solutions. We help you make informed decisions that in turn boost returns from cloud investments and lead to an overall increase in business process efficiency.',
            list: [
                // Cloud Management Services, Cloud Strategy and Consulting, Application Modernization & Migration, IT Security Governance
                {
                    title: 'Cloud Management Services',
                    img: 'Cloud1.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Cloud Strategy and Consulting',
                    img: 'Cloud2.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Application Modernization & Migration',
                    img: 'Cloud3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'IT Security Governance',
                    img: 'Cloud4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]
        },
        'Infra': {
            title: 'Infrastructure Management Services',
            desc: 'Managing IT infrastructure has become an increasingly complicated and labor-intensive task. Coupled with evolving platform diversity and new technologies, it’s almost impossible for an organization’s infrastructure to keep pace with the rate of business growth. Our solutions enable you to meet your IT infrastructure management needs without sacrificing valuable business resources. Powersolv sets up, manages, and supports your entire IT infrastructure and provides consistent, world-class services at cost-effective rates for your infrastructural needs as per your organization’s specific plans.',
            list: [
                // Network Management, IT Service Desk, IT Security Management, IT Systems Integration and Management
                {
                    title: 'Network Management',
                    img: 'Infra1.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'IT Service Desk',
                    img: 'Infra2.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'IT Security Management',
                    img: 'Infra3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'IT Systems Integration and Management',
                    img: 'Infra4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]
        },
        'BPS': {
            title: 'Business Process Services',
            desc: 'Today technology is advancing at an unprecedented rate, this is clearly reflected through the increased rate of redundancy of older enterprise processes. It has become increasingly important for organizations to consistently update, change and adapt their business processes to stay competitive. At Powersolv, we are experienced with curtailing the restrictive nature of Legacy Business models and establish innovative changes and practices that transform outdated and inefficient systems. We help you stay ahead of the curve by incorporating the latest technologies and provide the expertise to implement and maintain holistic and flexible process changes.',
            list: [
                // Program and Project Management, Data Warehousing & Business Intelligence, Independent Verification & Validation (IV&V), Business Process Re-engineering (BPR)
                {
                    title: 'Program and Project Management',
                    img: 'BPS1.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Data Warehousing & Business Intelligence',
                    img: 'BPS2.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Independent Verification & Validation (IV&V)',
                    img: 'BPS3.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                },
                {
                    title: 'Business Process Re-engineering (BPR)',
                    img: 'BPS4.png',
                    points: [
                        "Realize faster time to market",
                        "Increase frequency and quality of deployments",
                        "Improve solution quality and shorten lead times for fixes",
                        "Deliver early and often, and detect errors earlier",
                        "Improve innovation and risk-taking by making it safer to experiment",
                        "Reduce the severity and frequency of release failures",
                    ]
                }
            ]

        }
    }

    useEffect(() => {
        setCurrentService(services[service])
        setLoading(false)
        console.log("service", service, currentService)
    }, [service])

    useEffect(() => {
        console.log("service", currentService)
    }, [loading])




    return (
        <>
            <CommonSubBanner className={'serviceBanner'} heading={'Our Services'} text={'Scale up your business growth with highly robust.'} />
            {!loading &&
                <>
                    <section className="serviceWrapper gradientBG">
                        <div className="container">

                            <h1 className="redHeading">{currentService.title}</h1>
                            <p className="newText2 mt-20">{currentService.desc}</p>

                        </div>
                    </section>

                    <div className="navigationTabsWrap">
                        <div className="container">

                            <div className="navigationWrapper">
                                <span className={`navigationTab ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>{currentService.list[1].title}</span>
                                <span className={`navigationTab ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>{currentService.list[1].title}</span>
                                <span className={`navigationTab ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>{currentService.list[2].title}</span>
                                <span className={`navigationTab ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>{currentService.list[3].title}</span>

                            </div>

                            <div className={`navigationBoxWrap active`}>

                                <div className="navigationBox flexBox">

                                    <div className="aboutLeft shadowLeft">
                                        <img src={`/assets/img/${currentService.list[active].img}`} alt="" />
                                    </div>

                                    <div className="aboutRight">
                                        <h2 className="heading-2">
                                            {currentService.list[active].title}
                                        </h2>

                                        <ul className="serviceList mt-15">
                                            {
                                                currentService.list[active].points.map((item, index) => {
                                                    return (
                                                        <li key={index}>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                        <Link to={'/contact'}><Button className={'HeroButton mt-40'} name={'Get in Touch'} /></Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default Services