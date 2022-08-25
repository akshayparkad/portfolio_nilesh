import React from 'react'
import './Section5.css'
import hfi from './hfi.jpg'
import linkedin from './linkedin.jpg'
import google from './google.jpg'

export const Section5 = () => {
    return (
        <>
            <h2>Certifications</h2>
            <div className='row4'>
                <div className='icon-img'>
                    <img src={hfi} alt='hfi' />
                </div>

                <div className='column4'>
                    <h5>HFI (Human Factors International)</h5>
                    <p className='paragraph2'>
                        One day Seminar Of UX Architect<br />
                        Grey Worldwide<br />
                        Year : 2012
                    </p>
                    <br />
                </div>

                <div className='icon-img'>
                    <img src={google} alt='google' />
                </div>
                <div className='column4'>
                    <h5>Google Digital Unlock</h5>
                    <p className='paragraph2'>
                        The Fundamentals of Digital Marketing<br />
                        Certification ID: XLP WWA HXF<br />
                        Year : 2020
                    </p>
                </div>
            </div>

            <div className='row4'>
                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='column4'>
                    <h5>Become a UX Designer</h5>
                    <p className='paragraph2'>
                        LinkedIn Learning<br />
                        Certification ID: ATZOw4jaEpWiaMGTISQVwge1OWQx<br />
                        Year : 2020
                    </p>
                    <br />
                </div>

                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>
                <div className='column4'>
                    <h5>Advance Your Skills in UX Design</h5>
                    <p className='paragraph2'>
                        LinkedIn Learning<br />
                        Certification ID: AQi6QyWaqi_N8DGdYiGixUTrX_aQ<br />
                        Year : 2020
                    </p>
                </div>
            </div>

            <div className='row4'>
                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='column4'>
                    <h5>UX Deep Dive: Foundational Research</h5>
                    <p className='paragraph2'>
                        LinkedIn Learning<br />
                        Certification ID: Ae2t72lh9-f9O3uiNDn_C8CXoXF6<br />
                        Year : 2020
                    </p>
                    <br />
                </div>

                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>
                <div className='column4'>
                    <h5>UX Foundations: Research</h5>
                    <p className='paragraph2'>
                        LinkedIn Learning<br />
                        Certification ID: ATHaYh4vb3qv2sCSXEHEhKQA3x1f <br />
                        Year : 2020
                    </p>
                </div>
            </div>

            <div className='row4'>
                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='column4'>
                    <h5>UX Research for Agile Teams</h5>
                    <p className='paragraph2'>
                        LinkedIn Learning<br />
                        Certification ID: AQ0mnlN-lLZRp_bq9OM2IHcl-SMh<br />
                        Year : 2020
                    </p>
                    <br />
                </div>

                <div className='icon-img'>
                    <img src={linkedin} alt='linkedin' />
                </div>
                <div className='column4'>
                    <h5>Becoming an Agile Coach</h5>
                    <p className='paragraph2'>
                        Project Management Institute<br />
                        Certification ID: AZIQ9reKbF437yR7o-VacT3q9KVc<br />
                        Year : 2020
                    </p>
                </div>
            </div>
        </>
    )
}
