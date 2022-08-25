import React from 'react'
import './Section2.css'
import nilesh from './nilesh.jpg'
import cycle from './cycle.gif'

export const Section2 = () => {


    return (
        <>
            <div className='row1'>
                <div className='column1'>
                    <h4 className='h4-heading'>A journey of curiosity and explorations</h4>
                    <p className='paragraph'>
                        I'm a creative designer & front-end developer with years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for Small and medium-sized enterprises and large enterprises including Spiel Gaming Studios, Atos Origin, BC Webwise, Grey Worldwide, Qurious Media and IMGNRS.

                        Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.
                    </p>
                    <div className='t-heading'>
                        “Make good habits and they will make you.”
                    </div>
                    <h4 className='h4-heading'>My Story</h4>
                    <p className='paragraph'>
                        Head with experience as a UX & UI Designer. Currently managing Design & Developers Team at IMGNRS.

                        Demonstrated history of working in the design & development industry. Skilled in UI-UX Design, Web, Mobile & Front End Development. Strong arts and design professional with a Bachelor of Fine Art focused in Advertising from Abhinav Kala Mahavidyalaya, Pune & Multimedia (UX process and Architecture, UI and Web Design and Development, Digital Content) from CDAC (Mumbai Education Trust, Bandra, Mumbai)

                        Specialties: Project Management, Team Management, UX/UI Design, Mobile & Web Design, Brand Identity, Front End development.
                    </p>
                    <a href="/" class="download-button">Download My Resume</a>
                </div>

                <div className='column1'>
                    <img src={nilesh} alt='nilesh'/>
                </div>
            </div>

            <div className='t-heading-t'>
                “Life is short Play Hard!”
            </div>

            <div className='row1'>
                <div className='column1'>
                    <img src={cycle} alt="cycle" />
                </div>
                <div className='column1'>

                    <h5>London Edinburgh London 2017 - 1450 kms (SOLO)</h5>
                    <h6>July 2017 | 110 Hrs</h6>
                    <p className='paragraph'>Participate in 2017 London Edinburg London Cycling competition
                        Worlds one of longest & toughest cycling competition</p>

                    <h5>Deccan Cliffhanger - 647 kms Pune Goa Cycle race (SOLO)</h5>
                    <h6>Nov 2016 | 35 Hrs</h6>
                    <p className='paragraph'>Inspire India Medal
                        Successfully completed Deccan Cliffhanger 647 KM Pune - Mhabaleshwar - Satara - Kolhapur - Dharwad - Anmod Ghat - Goa Cycling Race. </p>

                    <h5>Deccan Cliffhanger - 647 kms Pune Goa Cycle race (TEAM)</h5>
                    <h6>Nov 2015 | 39 Hrs</h6>
                    <p className='paragraph'>Inspire India Medal
                        Successfully completed Deccan Cliffhanger 647 KM Pune - Mhabaleshwar - Satara - Kolhapur - Belgaon - Chorla Ghat - Goa Cycling Race. </p>

                    <h5>Brevets de Randonneurs Mondiaux (BRM) - Audax India Randonneurs (AIR)</h5>
                    <h6>2014 - 2022</h6>
                    <p className='paragraph'>200 Kms to 600 Kms</p>

                </div>

            </div>

            <div className='t-heading-t'>
                “Every Design has a Story”
            </div>

        </>
    )
}
