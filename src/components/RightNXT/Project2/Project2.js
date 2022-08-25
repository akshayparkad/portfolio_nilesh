import React from 'react'
import colorscheme from './colorscheme.jpg'
import typo from './typo.jpg'
import rightnxtlogo2 from './rightnxtlogo2.svg'
import welcome from './welcome.svg'
import about1 from './About1.png'
import about2 from './About2.png'
import about3 from './About3.png'
import business from './business.png'
import BusinessL from './BusinessL.png'
import contact from './contact.png'
import faq from './faq.png'
import code from './code.png'


import './Project2.css'

export const Project2 = () => {
    return (
        <div className='project2'>
            <h2>Color Scheme</h2>
            <p className='paragraph'>
                I went for a bright color scheme. Bright colors create appetite and orangeis also a color that triggers search
            </p>
            <img src={colorscheme} alt="color scheme" />
            <h2>Typography</h2>
            <img src={typo} alt="typo" />
            <h2>Logotype</h2>
            <p className='paragraph'>
                I wanted an obvious name but also a significant logo so FarmCrate was the best choice for the name once I thought of that I though a crate as a logo and soon after some iterations I came up with combining a farm and a crate.
            </p>
            <img src={rightnxtlogo2} alt="rightnxtlogo2" />
            <img src={welcome} alt="welcome" />
            <img src={about1} alt="about1" />
            <img src={about2} alt="about2" />
            <img src={about3} alt="about3" />
            <img src={business} alt="business" />
            <img src={BusinessL} alt="BusinessL" />
            <img src={contact} alt="contact" />
            <img src={faq} alt="faq" />
            <img src={code} alt="code" />
        </div>
    )
}
